param([int]$W = 2048, [int]$H = 1360, [string]$Out = ".impeccable/review/hero-repro.png", [string]$Url = "http://localhost:5173/", [int]$Chrome = 101)
# Headless Chrome's viewport is ~101px shorter than --window-size; capture taller, then crop to exactly W x H.
$chromeExe = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$dir = Split-Path $Out -Parent; if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force $dir | Out-Null }
$abs = Join-Path (Resolve-Path $dir).Path (Split-Path $Out -Leaf)
$tmp = "$abs.raw.png"
$winH = $H + $Chrome
& $chromeExe --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 "--window-size=$W,$winH" --run-all-compositor-stages-before-draw --virtual-time-budget=10000 --force-prefers-reduced-motion "--screenshot=$tmp" $Url 2>$null | Out-Null
npx --yes sharp-cli@5 -i $tmp -o $abs -f png extract 0 0 $W $H 2>$null | Out-Null
Remove-Item $tmp -ErrorAction SilentlyContinue
"captured $abs"
