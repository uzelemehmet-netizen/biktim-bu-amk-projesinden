# Endonezya Kasifi - Sunucu Baslatma Scripti
# Bu script hem email hem de dev sunucusunu otomatik baslatir

Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "   ENDONEZYA KASIFI - SUNUCU BASLATMA" -ForegroundColor Yellow
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""

# Calisma dizinini ayarla
$ProjectPath = ""
Set-Location $ProjectPath

# Eski node processlerini temizle
Write-Host "[1/4] Eski sunucular kontrol ediliyor..." -ForegroundColor Yellow
$oldProcesses = Get-Process node -ErrorAction SilentlyContinue
if ($oldProcesses) {
    Write-Host "      Eski node processleri temizleniyor..." -ForegroundColor Gray
    $oldProcesses | Stop-Process -Force
    Start-Sleep -Seconds 2
    Write-Host "      OK Temizlendi" -ForegroundColor Green
} else {
    Write-Host "      OK Temiz, devam ediliyor" -ForegroundColor Green
}

Write-Host ""
Write-Host "[2/4] Email Sunucusu baslatiliyor (Port 3001)..." -ForegroundColor Yellow

# Email sunucusunu ayri PowerShell penceresinde baslat
Start-Process powershell -ArgumentList "-NoExit","-Command","Set-Location '$ProjectPath'; Write-Host '========================================' -ForegroundColor Green; Write-Host '    EMAIL SUNUCU - PORT 3001' -ForegroundColor Green; Write-Host '========================================' -ForegroundColor Green; Write-Host ''; node ./src/sendEmail.js"

Start-Sleep -Seconds 3
Write-Host "      OK Email sunucusu baslatildi" -ForegroundColor Green

Write-Host ""
Write-Host "[3/4] Dev Sunucusu baslatiliyor (Port 4000)..." -ForegroundColor Yellow

# Dev sunucusunu ayri PowerShell penceresinde baslat
Start-Process powershell -ArgumentList "-NoExit","-Command","Set-Location '$ProjectPath'; Write-Host '========================================' -ForegroundColor Yellow; Write-Host '    DEV SUNUCU - PORT 4000' -ForegroundColor Yellow; Write-Host '========================================' -ForegroundColor Yellow; Write-Host ''; npm run dev"

Start-Sleep -Seconds 5

Write-Host "      OK Dev sunucusu baslatildi" -ForegroundColor Green

Write-Host ""
Write-Host "[4/4] Sunucu durumu kontrol ediliyor..." -ForegroundColor Yellow

# Port kontrolu
$emailPort = Get-NetTCPConnection -LocalPort 3001 -State Listen -ErrorAction SilentlyContinue
$devPort = Get-NetTCPConnection -LocalPort 4000 -State Listen -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "           SUNUCU DURUMU" -ForegroundColor White
Write-Host "==================================================" -ForegroundColor Cyan

if ($emailPort) {
    Write-Host "  OK Email Sunucu (3001)  : " -NoNewline -ForegroundColor White
    Write-Host "CALISIYOR" -ForegroundColor Green
} else {
    Write-Host "  X Email Sunucu (3001)  : " -NoNewline -ForegroundColor White
    Write-Host "BASARISIZ" -ForegroundColor Red
}

if ($devPort) {
    Write-Host "  OK Dev Sunucu (4000)    : " -NoNewline -ForegroundColor White
    Write-Host "CALISIYOR" -ForegroundColor Green
} else {
    Write-Host "  X Dev Sunucu (4000)    : " -NoNewline -ForegroundColor White
    Write-Host "BASARISIZ" -ForegroundColor Red
}

Write-Host ""
Write-Host "==================================================" -ForegroundColor Cyan

if ($emailPort -and $devPort) {
    Write-Host ""
    Write-Host "  TUM SUNUCULAR BASARILI!" -ForegroundColor Green
    Write-Host ""
    Write-Host "  Site Adresleri:" -ForegroundColor White
    Write-Host "  - http://localhost:4000/" -ForegroundColor Cyan
    Write-Host "  - http://192.168.1.103:4000/" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "  Formlar simdi email gonderebilir!" -ForegroundColor Yellow
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "  UYARI: Bazi sunucular baslatilamadi!" -ForegroundColor Red
    Write-Host "  Lutfen acilan PowerShell pencerelerindeki hatalari kontrol edin." -ForegroundColor Yellow
    Write-Host ""
}

Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Not: Sunuculari durdurmak icin acilan PowerShell" -ForegroundColor Gray
Write-Host "     pencerelerinde Ctrl+C tusuna basin." -ForegroundColor Gray
Write-Host ""

# 10 saniye sonra bu pencereyi kapat
Write-Host "Bu pencere 10 saniye sonra kapanacak..." -ForegroundColor DarkGray
Start-Sleep -Seconds 10
