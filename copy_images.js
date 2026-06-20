const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/VIVOBOOK/.gemini/antigravity-ide/brain/tempmediaStorage';
const destDir = 'c:/Users/VIVOBOOK/Videos/personal-portfolio-main/public/images';

try {
  const files = fs.readdirSync(srcDir);
  console.log('Files in tempmediaStorage:', files);
  
  files.forEach((file, index) => {
    if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.webp')) {
      const srcPath = path.join(srcDir, file);
      const destPath = path.join(destDir, `uploaded_${index}.jpg`);
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${file} to uploaded_${index}.jpg`);
    }
  });
} catch (err) {
  console.error('Error:', err);
}
