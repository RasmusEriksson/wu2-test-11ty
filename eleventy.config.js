export default function(eleventyConfig){
    eleventyConfig.addPassthroughCopy("css")

    eleventyConfig.addPassthroughCopy("img");

    eleventyConfig.addShortcode("formatDate", () => {
        return new Date().toLocaleDateString('sv-SE')
    })

    return {
        markdownTemplateEngine: "njk",
    }
}
