module.exports =function(grunt){
     //Configure your tasks
     //matchdep reduces repetitive code by utilizing the package.json file to loadNpmTasks
     require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
     grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),//load properties from the package as a JSON object
      watch: {
        options:{
          livereload: true
        },
        js: {
          files:   ['src/scripts/*.js'],
          tasks:   ['copy']
        },
        css:{
          files:   ['src/styles/*.styl'],
          tasks:   ['stylus']
        },
        html:{
          files:   ['src/*.jade','src/inc/*'],
          tasks:   ['jade']
        }
      },
      copy: {
        main: {
          files: [
            {expand: true, cwd: 'src/images', src: '*', dest: 'build/img'},
            {expand: true, cwd: 'src/scripts', src: '*', dest: 'build/js'},
            {expand: true, cwd: 'src/lib/css', src: '*', dest: 'build/css'},
            {expand: true, cwd: 'src/lib/js', src: '*', dest: 'build/js'}
          ]
        },
      },
      stylus:{
        compile: {
          options:{
            import:['nib']
          },
          files: {
            'build/css/styles.css': ['src/styles/*.styl'] // compile and concat into single file
          }
        }
      },
      jade:{
        compile:{
          options: {pretty:true},
          files:[{
            expand: true,
            cwd:    'src/',
            src:    "*.jade",
            ext:    ".html",
            dest:   "build/"
          }]
        }
      },
      'gh-pages': {
        options: {
          base: 'build'
        },
        src: ['**']
      }
     });

     //Run the task
     grunt.registerTask('default', ['watch','stylus', 'jade', 'copy']);
     grunt.registerTask('build', ['stylus','jade', 'copy']);
     grunt.registerTask('pages', ['build','gh-pages']);

};
