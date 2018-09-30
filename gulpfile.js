const gulp = require('gulp');
const sonarqubeScanner = require('sonarqube-scanner');

gulp.task('default', function(callback) {
  sonarqubeScanner({
    serverUrl : "https://sonarcloud.io",
    token : "b52032742e08d472c56f0f00d4fee871c1012c0a",
    options : {
      "sonar.organization": "florianarnould-github"
    }
  }, callback);
});
