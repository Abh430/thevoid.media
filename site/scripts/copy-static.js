const fs = require('fs');
const path = require('path');

// Copy static directory to public
const staticDir = path.join(__dirname, '../static');
const publicDir = path.join(__dirname, '../public');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Copy static to public
if (fs.existsSync(staticDir)) {
  console.log('Copying static files to public...');
  copyRecursiveSync(staticDir, publicDir);
  console.log('Static files copied successfully!');
} else {
  console.log('Static directory not found, skipping...');
}

// Copy src/images to public/images
const srcImagesDir = path.join(__dirname, '../src/images');
const publicImagesDir = path.join(publicDir, 'images');

if (fs.existsSync(srcImagesDir)) {
  console.log('Copying src/images to public/images...');
  if (!fs.existsSync(publicImagesDir)) {
    fs.mkdirSync(publicImagesDir, { recursive: true });
  }
  copyRecursiveSync(srcImagesDir, publicImagesDir);
  console.log('Images copied successfully!');
} else {
  console.log('src/images directory not found, skipping...');
}

console.log('All files copied!');
