module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats(["njk", "png", "md", "svg"]);
  eleventyConfig.addPassthroughCopy("CNAME");
};