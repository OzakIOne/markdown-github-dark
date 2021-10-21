module.exports = function (grunt) {
  grunt.initConfig({
    copy: {
      main: {
        src: "node_modules/github-markdown-css/github-markdown-dark.css",
        dest: "github-markdown.css",
        options: {
          process: function (content) {
            return content.replace(/\.markdown-body/g, "body");
          },
        },
      },
    },
    cssmin: {
      options: {
        advanced: true,
        format: "beautify",
        mergeAdjacent: true,
        removeDuplicates: true,
        shorthandCompacting: false,
      },
      files: {
        src: "github-markdown.css",
        dest: "github-markdown.css",
      },
    },
    concat: {
      options: {
        separator: "\n\n",
        process: function(content, srcpath) {
          return `/* ${srcpath} */\n${content.trim()}`;
        },
      },
      dist: {
        src: [
          "base.css",
          "github-markdown.css",
          "node_modules/highlight.js/styles/github-dark.css"
        ],
        dest: "style.css",
      },
    },
    clean: [
      "base.css",
      "github-markdown.css"
    ],
  });
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.registerTask("default", ["copy", "cssmin", "concat"]);
};
