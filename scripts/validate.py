#!/usr/bin/env python3
"""Valida el repo: frontmatter, nombres únicos, manifiestos, sin datos personales ni node_modules."""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# Patrones de datos personales. Se arman por partes para que este archivo no se auto-detecte.
PERSONAL = re.compile("|".join([
    "Ry" + "an Bar" + "dack", "bar" + "dack@", "@gm" + "ail", "Mi" + "MIT", "INC" + "AE", "Ca" + "sa de Ry" + "an",
    r"C:\\Users", "iCl" + "oud", r"\bRy" + "an\b(?! Bar)", "rg" + "bardack",
]), re.I)
ALLOWED_PERSONAL = {"LICENSE", "THIRD_PARTY.md", os.path.join(".claude-plugin", "marketplace.json")}
ALLOWED_SUFFIX = ("plugin.json",)
errors = []


def err(m):
    errors.append(m)


def frontmatter(path):
    t = open(path, encoding="utf-8").read()
    m = re.match(r"---\s*\n(.*?)\n---", t, re.S)
    if not m:
        return None
    d = {}
    cur = None
    for line in m.group(1).split("\n"):
        k = re.match(r"^([\w-]+):\s*(.*)$", line)
        if k:
            cur = k.group(1)
            d[cur] = k.group(2).strip().strip('"').strip(">|").strip()
        elif cur and line.strip():
            d[cur] = (d[cur] + " " + line.strip()).strip()
    return d


names = {}
for plugin in sorted(os.listdir(os.path.join(ROOT, "plugins"))):
    pdir = os.path.join(ROOT, "plugins", plugin)
    pj = os.path.join(pdir, ".claude-plugin", "plugin.json")
    if not os.path.isfile(pj):
        err(f"{plugin}: falta plugin.json")
    else:
        try:
            if json.load(open(pj, encoding="utf-8")).get("name") != plugin:
                err(f"{plugin}: plugin.json name no coincide")
        except Exception as e:
            err(f"{plugin}: plugin.json inválido: {e}")
    sdir = os.path.join(pdir, "skills")
    for s in sorted(os.listdir(sdir)) if os.path.isdir(sdir) else []:
        p = os.path.join(sdir, s, "SKILL.md")
        if not os.path.isfile(p):
            err(f"{plugin}/{s}: falta SKILL.md"); continue
        fm = frontmatter(p)
        if not fm or not fm.get("name") or not fm.get("description"):
            err(f"{plugin}/{s}: frontmatter sin name/description"); continue
        if fm["name"] != s:
            err(f"{plugin}/{s}: name '{fm['name']}' != carpeta")
        if fm["name"] in names:
            err(f"nombre duplicado: {fm['name']} ({plugin} y {names[fm['name']]})")
        names[fm["name"]] = plugin
    adir = os.path.join(pdir, "agents")
    for a in sorted(os.listdir(adir)) if os.path.isdir(adir) else []:
        fm = frontmatter(os.path.join(adir, a))
        if not fm or not fm.get("name") or not fm.get("description"):
            err(f"{plugin}/agents/{a}: frontmatter sin name/description"); continue
        if fm["name"] + ".md" != a:
            err(f"{plugin}/agents/{a}: name no coincide con archivo")
        if fm["name"] in names:
            err(f"nombre duplicado: {fm['name']}")
        names[fm["name"]] = plugin

mp = os.path.join(ROOT, ".claude-plugin", "marketplace.json")
try:
    m = json.load(open(mp, encoding="utf-8"))
    for p in m["plugins"]:
        if not os.path.isdir(os.path.join(ROOT, p["source"])):
            err(f"marketplace: no existe {p['source']}")
    listed = {p["name"] for p in m["plugins"]}
    for d in os.listdir(os.path.join(ROOT, "plugins")):
        if d not in listed:
            err(f"plugin {d} no está en marketplace.json")
except Exception as e:
    err(f"marketplace.json inválido: {e}")

for dp, dn, fn in os.walk(ROOT):
    dn[:] = [d for d in dn if d not in (".git",)]
    for d in list(dn):
        if d in ("node_modules", ".runtime", "output", "graphify-out"):
            err(f"carpeta prohibida: {os.path.relpath(os.path.join(dp, d), ROOT)}")
            dn.remove(d)
    for f in fn:
        rel = os.path.relpath(os.path.join(dp, f), ROOT)
        if f in ("auth.json", ".env"):
            err(f"archivo prohibido: {rel}")
        if rel in ALLOWED_PERSONAL or rel.endswith(ALLOWED_SUFFIX) or rel.startswith("licenses"):
            continue
        try:
            t = open(os.path.join(dp, f), encoding="utf-8").read()
        except Exception:
            continue
        m2 = PERSONAL.search(t)
        if m2:
            err(f"posible dato personal en {rel}: '{m2.group(0)}'")

if errors:
    print("FALLÓ:")
    for e in errors:
        print(" -", e)
    sys.exit(1)
print(f"OK: {len(names)} elementos, sin datos personales.")
