import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";


export default function(eleventyConfig){
    eleventyConfig.addPassthroughCopy("css")

    eleventyConfig.addPlugin(eleventyImageTransformPlugin);
    eleventyConfig.addPassthroughCopy("img");

    eleventyConfig.addShortcode("formatDate", () => {
        return new Date().toLocaleDateString('sv-SE')
    })

    return {
        markdownTemplateEngine: "njk",
    }
}
