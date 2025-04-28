const fs = require('fs');
const path = require('path');
const { glob } = require('glob');
const { JSDOM } = require('jsdom');

const svgFolder = path.resolve(__dirname, './');

glob(`${svgFolder}/**/*.svg`, (err, files) => {
  if (err) {
    console.error('Ошибка поиска SVG:', err);
    return;
  }

  files.forEach(file => {
    const svgContent = fs.readFileSync(file, 'utf-8');
    const dom = new JSDOM(svgContent);
    const svg = dom.window.document.querySelector('svg');

    if (!svg) {
      console.warn(`Файл ${file} не содержит <svg>`);
      return;
    }

    if (svg.hasAttribute('viewBox')) {
      console.log(`✅ ${path.basename(file)} уже содержит viewBox`);
      return;
    }

    const width = svg.getAttribute('width');
    const height = svg.getAttribute('height');

    if (!width || !height) {
      console.warn(`⚠️  Файл ${file} не имеет width/height для создания viewBox`);
      return;
    }

    const numericWidth = parseFloat(width);
    const numericHeight = parseFloat(height);

    if (isNaN(numericWidth) || isNaN(numericHeight)) {
      console.warn(`⚠️  Файл ${file} имеет некорректные width/height`);
      return;
    }

    svg.setAttribute('viewBox', `0 0 ${numericWidth} ${numericHeight}`);
    const updatedContent = dom.serialize();

    fs.writeFileSync(file, updatedContent, 'utf-8');
    console.log(`🛠️  Добавлен viewBox в ${path.basename(file)}`);
  });
});
