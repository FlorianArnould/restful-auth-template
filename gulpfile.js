const gulp = require('gulp');
const sonarqubeScanner = require('sonarqube-scanner');

gulp.task('default', function(callback) {
  sonarqubeScanner({
    serverUrl : "https://sonarcloud.io",
    token : "45e125e22dd0cf6939d4467d69d474b00611a139",
    options : {
      "sonar.organization": "florianarnould-github"
    }
  }, callback);
});
