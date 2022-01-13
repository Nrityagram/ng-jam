const lazyImagesPlugin = require("eleventy-plugin-lazyimages");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/utils");
  // eleventyConfig.addPassthroughCopy("./src/fonts");

  eleventyConfig.addShortcode("youtube", (id) => {
    return `<div class="video-container"><iframe class="responsive-iframe" src="https://www.youtube.com/embed/${id}" frameborder="0" allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe></div>`;
  });
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addPlugin(lazyImagesPlugin, {
    imgSelector: "img", // custom image selector
    //cacheFile: "", // don't cache results to a file
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
