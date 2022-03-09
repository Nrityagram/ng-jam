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
    imgSelector: "img", // custom image selector, IMP to keep img in last position
    // cacheFile: "", // don't cache results to a file
  });

  let markdownIt = require('markdown-it');
	let markdownItAnchor = require('markdown-it-anchor');
	let markdownIt_options = {
		html: true, //  Enable HTML tags in source
		// breaks: true, // newlines in paragraphs are rendered as <br>
		linkify: true, // Autoconvert URL-like text to links
		typographer: true, // (c) will show up as copyright symbol, etc.
	};
	let anchor_opts = {
		permalink: true,
		permalinkClass: 'direct-link',
		permalinkSymbol: '#',
	};

	eleventyConfig.setLibrary('md', markdownIt(markdownIt_options).use(markdownItAnchor, anchor_opts));

	eleventyConfig.addFilter('markdownify', function (value) {
		const md = new markdownIt(markdownIt_options);
		return md.render(value);
	});

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
