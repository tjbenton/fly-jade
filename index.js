module.exports = function() {
  this.filter("jade", (data, options) => {
    options.filename = options.base ? `${options.base}/${options.filename}` : options.filename
    return {
      css: require("jade").render(data.toString(), options), 
      ext: ".html"
    }
  })
}
