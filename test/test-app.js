'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('starters:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .on('end', done);
  });

  it('creates a basic set of files', function () {
    assert.file([
      'bower.json',
      'package.json',
      'README.md',
      '.bowerrc',
      '.gitignore',
    ]);
  });

  describe('gulp is enabled', function() {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/app'))
        .withOptions({ skipInstall: true })
        .withPrompts({ gulp: true })
        .on('end', done);
    });

    it ('creates a gulpfile', function() {
      assert.file([
        'gulpfile.js'
      ]);
    });
  });
});
