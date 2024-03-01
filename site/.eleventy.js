const faviconsPlugin = require("eleventy-plugin-gen-favicons");
const lazyImagesPlugin = require('eleventy-plugin-lazyimages');
const { DateTime } = require("luxon");

const sharp = require('sharp');
const Image = require('@11ty/eleventy-img');

const GALLERY_IMAGE_WIDTH = 192;
const LANDSCAPE_LIGHTBOX_IMAGE_WIDTH = 2000;
const PORTRAIT_LIGHTBOX_IMAGE_WIDTH = 720;

function galleryShortcode(content, name) {
    return `
        <div>
            <div class="gallery" id="gallery-${name}">
                ${content}
            </div>
            <script type="module">
                import PhotoSwipeLightbox from '/js/photoswipe-lightbox.esm.min.js';
                import PhotoSwipe from '/js/photoswipe.esm.min.js';
                const lightbox = new PhotoSwipeLightbox({
                    gallery: '#gallery-${name}',
                    children: 'a',
                    pswpModule: PhotoSwipe,
                    preload: [1, 1]
                });
                lightbox.init();
            </script>
        </div>
    `.replace(/(\r\n|\n|\r)/gm, "");
}

async function galleryImageShortcode(src, alt) {
    let lightboxImageWidth = LANDSCAPE_LIGHTBOX_IMAGE_WIDTH;

    const metadata = await sharp(src).metadata();
    if (metadata.orientation > 1) {
        console.log('Rotated image detected:', src, metadata.orientation);
        await sharp(src).rotate().toFile(`correct/${src.split("/").pop()}`);
    }

    if(metadata.height > metadata.width) {
        lightboxImageWidth = PORTRAIT_LIGHTBOX_IMAGE_WIDTH;
    }

    const options = {
        formats: ['jpeg'],
        widths: [GALLERY_IMAGE_WIDTH, lightboxImageWidth],
        urlPath: "/gen/",
        outputDir: './_site/gen/'
    }

    const genMetadata = await Image(src, options);

    return `
        <a href="${genMetadata.jpeg[1].url}" 
        data-pswp-width="${genMetadata.jpeg[1].width}" 
        data-pswp-height="${genMetadata.jpeg[1].height}" 
        target="_blank">
            <img src="${genMetadata.jpeg[0].url}" alt="${alt}" />
        </a>
    `.replace(/(\r\n|\n|\r)/gm, "");;
}

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(faviconsPlugin, {});
    eleventyConfig.addPlugin(lazyImagesPlugin);
    eleventyConfig.addPassthroughCopy('blog/**/*.webp')
    eleventyConfig.addPassthroughCopy('projects/**/*.webp')
    eleventyConfig.addPassthroughCopy('blog/**/*.jpg')
    eleventyConfig.addPassthroughCopy('projects/**/*.jpg')
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('js')
    eleventyConfig.addPassthroughCopy('fonts')
    eleventyConfig.addPassthroughCopy('*resume*')
    // Add folders to watch for changes
    eleventyConfig.addWatchTarget('blog')
    eleventyConfig.addWatchTarget('projects')

    eleventyConfig.addFilter("asPostDate", (dateObj) => {
      return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
     });

    eleventyConfig.addFilter("bust", (url) => {
      const [urlPart, paramPart] = url.split("?");
      const params = new URLSearchParams(paramPart || "");
      params.set("v", DateTime.local().toFormat("X"));
      return `${urlPart}?${params}`;
    });

    // Image Gallery Viewerf
    eleventyConfig.addPairedLiquidShortcode('gallery', galleryShortcode)
    eleventyConfig.addLiquidShortcode('galleryImage', galleryImageShortcode)
    
    return {
      passthroughFileCopy: true
    }
}
