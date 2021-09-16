module.exports = function (grunt) {
  grunt.initConfig({
    cssmin: {
      options: {
        advanced: true,
        mergeAdjacent: true,
        removeDuplicates: true,
        shorthandCompacting: false,
      },
      files: {
        src: "./github-markdown.css",
        dest: "./github-markdown.min.css",
      },
    },
    postcss: {
      options: {
        processors: [
          require("autoprefixer")({
            browsers: ["last 2 versions", "Edge >= 12", "Explorer >= 9"],
          }),
          require("cssnano"),
        ],
        map: false,
      },
      files: {
        src: "./github-markdown.css",
        dest: "./github-markdown.min.css",
      },
    },
  });
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-postcss");
  grunt.registerTask("css", ["cssmin", "postcss"]);
};
