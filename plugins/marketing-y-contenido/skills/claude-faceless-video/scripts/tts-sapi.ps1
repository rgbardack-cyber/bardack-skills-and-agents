# Voz local (TTS) con Windows SAPI: sin cuentas, sin red, sin créditos.
# Uso:
#   powershell -File tts-sapi.ps1 -List
#   powershell -File tts-sapi.ps1 -Text "Hola mundo" -Out voz01.wav [-Voice "Microsoft Sabina Desktop"] [-Rate 0]
#   powershell -File tts-sapi.ps1 -TextFile guion01.txt -Out voz01.wav
# Rate: -10 (lento) .. 10 (rapido). Calidad = voz de escritorio de Windows (correcta, no premium).
param(
  [switch]$List,
  [string]$Text,
  [string]$TextFile,
  [string]$Out,
  [string]$Voice,
  [int]$Rate = 0
)
Add-Type -AssemblyName System.Speech
$s = New-Object System.Speech.Synthesis.SpeechSynthesizer
if ($List) { $s.GetInstalledVoices() | ForEach-Object { $i=$_.VoiceInfo; "{0} | {1} | {2}" -f $i.Name,$i.Culture,$i.Gender }; exit 0 }
if ($TextFile) { $Text = Get-Content -Raw -Encoding UTF8 $TextFile }
if (-not $Text -or -not $Out) { Write-Error "Faltan -Text/-TextFile y -Out"; exit 1 }
if ($Voice) { $s.SelectVoice($Voice) }
$s.Rate = $Rate
$s.SetOutputToWaveFile((Resolve-Path -LiteralPath (Split-Path -Parent (Join-Path (Get-Location) $Out))).Path + "\" + (Split-Path -Leaf $Out))
$s.Speak($Text)
$s.Dispose()
Write-Output "OK -> $Out"
