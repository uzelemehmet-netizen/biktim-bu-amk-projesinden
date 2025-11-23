import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    
    if (!file) {
      return Response.json(
        { success: false, error: 'Dosya bulunamadı' },
        { status: 400 }
      );
    }

    // Dosya adını güvenli hale getir
    const filename = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const timestamp = Date.now();
    const newFilename = `${timestamp}-${filename}`;
    
    // Public images klasörüne kaydet
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    
    // Klasör yoksa oluştur
    try {
      await fs.access(uploadsDir);
    } catch {
      await fs.mkdir(uploadsDir, { recursive: true });
    }
    
    const filepath = path.join(uploadsDir, newFilename);
    
    // Dosyayı kaydet
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await fs.writeFile(filepath, buffer);
    
    // URL'i döndür
    const imageUrl = `/uploads/${newFilename}`;
    
    return Response.json({
      success: true,
      url: imageUrl,
      filename: newFilename
    });
    
  } catch (error) {
    return Response.json(
      { success: false, error: 'Dosya yüklenemedi: ' + error.message },
      { status: 500 }
    );
  }
}

// Yüklü görselleri listele
export async function GET() {
  try {
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    
    try {
      const files = await fs.readdir(uploadsDir);
      const images = files
        .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
        .map(file => ({
          filename: file,
          url: `/uploads/${file}`
        }));
      
      return Response.json({ success: true, images });
    } catch {
      return Response.json({ success: true, images: [] });
    }
    
  } catch (error) {
    return Response.json(
      { success: false, error: 'Görseller listelenemedi' },
      { status: 500 }
    );
  }
}
