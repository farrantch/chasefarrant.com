const faviconsPlugin = require("eleventy-plugin-gen-favicons");
const lazyImagesPlugin = require('eleventy-plugin-lazyimages');
const { DateTime } = require("luxon");

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
    
    return {
      passthroughFileCopy: true
    }
}
