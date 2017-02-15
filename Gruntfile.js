module.exports = function (grunt) {
  grunt.initConfig({
    eslint: {
      options: {
        root: true
      },
      target: ['src/**/*.js']
    },

    watch: {
      js: {
        files: ['src/**/*.js'],
        tasks: ['eslint']
      }
    },
    nodemon: {
      dev: {
        script: 'src/server.js'
      }
    },
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['nodemon', 'watch']
    }

  })

  grunt.loadNpmTasks('grunt-eslint')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-nodemon')
  grunt.loadNpmTasks('grunt-concurrent')

  grunt.registerTask('default', ['concurrent'])
}
