param(
    [string]$Plugin = "",
    [string]$Dest = (Join-Path $HOME ".codex\skills"),
    [switch]$Force
)
# Copia las skills del repo a ~/.codex/skills. Nunca borra nada.
$root = Split-Path -Parent $PSScriptRoot
$plugins = Join-Path $root "plugins"
New-Item -ItemType Directory -Force -Path $Dest | Out-Null
$copied = 0; $skipped = 0
Get-ChildItem $plugins -Directory | Where-Object { -not $Plugin -or $_.Name -eq $Plugin } | ForEach-Object {
    $skills = Join-Path $_.FullName "skills"
    if (-not (Test-Path $skills)) { return }
    Get-ChildItem $skills -Directory | ForEach-Object {
        $target = Join-Path $Dest $_.Name
        if ((Test-Path $target) -and -not $Force) { $script:skipped++; return }
        Copy-Item $_.FullName $target -Recurse -Force
        $script:copied++
    }
}
Write-Host "Copiadas: $copied. Omitidas (ya existían): $skipped. Destino: $Dest"
