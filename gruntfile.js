module.exports = function(grunt) {

  grunt
      .initConfig({
        pkg : grunt.file.readJSON('package.json'),
        jshint : {
          files : [ 'Gruntfile.js', 'assets/js/app/app.js' ],
          options : {
            globals : {
              jQuery : true,
              console : true,
              module : true,
              document : true
            }
          }
        },
        uglify : {
          dist : {
            files : {
              'assets/js/app/app.min.js' : [ 'assets/js/app/app.js' ],
            }
          }
        },
        less : {
          development : {
            files : {
              "bower_components/bootstrap/dist/css/bootstrap.min.css" : "bower_components/bootstrap/less/bootstrap.less",
              "assets/css/styles.min.css" : "assets/less/styles.less",
            }
          }
        },
        cssmin : {
          target : {
            files : {
            // 'bower_components/bootstrap/dist/css/bootstrap.min.css'
            // : [
            // 'bower_components/bootstrap/dist/css/bootstrap.min.css'
            // ],
            // 'assets/css/styles.min.css' : [
            // 'assets/css/styles.min.css' ],
            }
          }
        },
        copy : {
          main : {
            files : [
                {
                  src : 'bower_components/jquery/dist/jquery.min.js',
                  dest : 'assets/js/jquery/jquery.min.js'
                },
                {
                  src : 'bower_components/jquery-ui/jquery-ui.min.js',
                  dest : 'assets/js/jquery-ui/jquery-ui.min.js'
                },
                {
                  src : 'bower_components/bootstrap/dist/js/bootstrap.min.js',
                  dest : 'assets/js/bootstrap/bootstrap.min.js'
                },
                {
                  src : 'bower_components/bootstrap/dist/css/bootstrap.min.css',
                  dest : 'assets/css/bootstrap/css/bootstrap.min.css'
                },
                {
                  src : 'bower_components/owl.carousel/dist/owl.carousel.min.js',
                  dest : 'assets/js/owl.carousel/owl.carousel.min.js'
                },
                {
                  src : 'bower_components/owl.carousel/dist/assets/owl.carousel.min.css',
                  dest : 'assets/css/owl.carousel/css/owl.carousel.min.css'
                },
                {
                  expand : true,
                  cwd : 'bower_components/bootstrap/dist/fonts/',
                  src : '**',
                  dest : 'assets/css/bootstrap/fonts/'
                }, ]
          },
        },
        watch : {
          all : {
            files : [ 'assets/**/*.less', 'assets/**/*.js',
                'bower_components/bootstrap/less/**/*.less' ],
            tasks : [ 'default' ]
          }
        }
      });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', [ 'jshint', 'uglify', 'less', 'cssmin',
      'copy' ]);
  grunt.registerTask('defaultR', [ 'jshint', 'uglify', 'less', 'cssmin',
      'copy', 'watch' ]);
};
