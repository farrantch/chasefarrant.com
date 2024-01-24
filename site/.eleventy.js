const faviconsPlugin = require("eleventy-plugin-gen-favicons");
const lazyImagesPlugin = require('eleventy-plugin-lazyimages');
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(faviconsPlugin, {});
    eleventyConfig.addPlugin(lazyImagesPlugin);
    eleventyConfig.addPassthroughCopy('**/*.webp')
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('js')
    eleventyConfig.addPassthroughCopy('fonts')
    eleventyConfig.addPassthroughCopy('*resume*')
    // Add folders to watch for changes
    eleventyConfig.addWatchTarget('blog')
    eleventyConfig.addWatchTarget('projects')

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
  