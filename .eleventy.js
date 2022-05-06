const fs = require("fs");

module.exports = function (eleventyConfig) {
  // clean output directory
  fs.rmSync("_site", { recursive: true });

  eleventyConfig.setTemplateFormats(["njk", "png", "md", "svg"]);
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("CNAME");

  return {
    dir: {
      input: "src",
    },
  };
};
