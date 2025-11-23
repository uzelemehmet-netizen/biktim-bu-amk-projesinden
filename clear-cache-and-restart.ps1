# Cache temizleme ve sunucu restart scripti
Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "   CACHE TEMIZLEME VE YENIDEN BASLATMA" -ForegroundColor Cyan
Write-Host "===================================================" -ForegroundColor Cyan
Write-Host ""

# 1. Tüm node processlerini durdur
Write-Host "[1/6] Node processleri durduruluyor..." -ForegroundColor Yellow
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
Start-Sleep -Seconds 2
Write-Host "      OK Node processleri durduruldu" -ForegroundColor Green
Write-Host ""

# 2. Build klasörlerini sil
Write-Host "[2/6] Build cache'leri temizleniyor..." -ForegroundColor Yellow
Remove-Item -Path ".react-router" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "build" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path ".vite" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "dist" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "node_modules/.vite" -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "      OK Cache'ler temizlendi" -ForegroundColor Green
Write-Host ""

# 3. Doğru metni kontrol et
Write-Host "[3/6] Kaynak kod kontrol ediliyor..." -ForegroundColor Yellow
$content = Get-Content "src/app/hakkinda/page.jsx" -Raw
if ($content -match "özel tur paketleri") {
    Write-Host "      OK 'özel tur paketleri' kaynak kodda mevcut" -ForegroundColor Green
} else {
    Write-Host "      HATA: Metin kaynak kodda bulunamadi!" -ForegroundColor Red
}
Write-Host ""

# 4. Sunucuları başlat
Write-Host "[4/6] Sunucular baslatiliyor..." -ForegroundColor Yellow
.\start-servers.ps1
Write-Host ""

# 5. Kullanıcıya talimatlar
Write-Host "[5/6] TARAYICI CACHE TEMIZLEME TALIMATLARI:" -ForegroundColor Cyan
Write-Host "      1. Tarayicinizi TAMAMEN kapatin (tum sekmeler)" -ForegroundColor White
Write-Host "      2. Tarayiciyi tekrar acin" -ForegroundColor White
Write-Host "      3. F12 tusuna basin" -ForegroundColor White
Write-Host "      4. Network sekmesine gidin" -ForegroundColor White
Write-Host "      5. 'Disable cache' kutusunu isaretleyin" -ForegroundColor White
Write-Host "      6. F12'yi ACIK TUTUN" -ForegroundColor White
Write-Host "      7. Ctrl+Shift+R ile sayfayi yenileyin" -ForegroundColor White
Write-Host ""

Write-Host "[6/6] Alternatif: YENi TARAYICI PROFILI KULLANIN:" -ForegroundColor Cyan
Write-Host "      Chrome/Edge: Sag ust kosede profil ikonu > Add" -ForegroundColor White
Write-Host "      Firefox: Menu > Yeni Profil" -ForegroundColor White
Write-Host ""

Write-Host "===================================================" -ForegroundColor Green
Write-Host "   HAZIR! Simdi tarayiciyi temizleyin" -ForegroundColor Green
Write-Host "===================================================" -ForegroundColor Green
