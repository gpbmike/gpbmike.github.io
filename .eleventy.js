const fs = require("fs");

module.exports = function (eleventyConfig) {
  // clean output directory
  if (fs.existsSync("_site")) {
    fs.rmSync("_site", { recursive: true });
  }

  eleventyConfig.setTemplateFormats(["njk", "png", "md", "svg"]);
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("CNAME");

  return {
    dir: {
      input: "src",
    },
  };
};
