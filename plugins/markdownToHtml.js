const remark = require('remark');
const externalLinks = require('remark-external-links'); // Add _target and rel to external links
const images = require('remark-images'); // Improved image syntax
const unrwapImages = require('remark-unwrap-images'); // Removes <p> wrapper around images
const smartyPants = require('./remark-smartypants'); // Cleans up typography
const html = require('remark-html');

module.exports = {
  remarkPlugins: [
    externalLinks,
    images,
    unrwapImages,
    smartyPants,
  ],
  markdownToHtml,
};

async function markdownToHtml(markdown) {
  const result = await remark()
    .use(externalLinks)
    .use(images)
    .use(unrwapImages)
    .use(smartyPants)
    .use(html)
    .process(markdown);
  return result.toString();
}
