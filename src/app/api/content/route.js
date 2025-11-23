import { promises as fs } from 'fs';
import path from 'path';

const CONTENT_FILE = path.join(process.cwd(), 'src', 'data', 'content.json');

// İçeriği oku
export async function GET() {
  try {
    const fileContent = await fs.readFile(CONTENT_FILE, 'utf-8');
    const content = JSON.parse(fileContent);
    
    return Response.json({ success: true, content });
  } catch (error) {
    return Response.json(
      { success: false, error: 'İçerik okunamadı' },
      { status: 500 }
    );
  }
}

// İçeriği güncelle
export async function POST(request) {
  try {
    const { content } = await request.json();
    
    // JSON'u dosyaya yaz
    await fs.writeFile(
      CONTENT_FILE,
      JSON.stringify(content, null, 2),
      'utf-8'
    );
    
    return Response.json({ success: true, message: 'İçerik başarıyla kaydedildi' });
  } catch (error) {
    return Response.json(
      { success: false, error: 'İçerik kaydedilemedi: ' + error.message },
      { status: 500 }
    );
  }
}
