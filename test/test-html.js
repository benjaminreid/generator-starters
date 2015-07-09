'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('starters:html', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/html'))
      .on('end', done);
  });

  it('creates an index.html file', function () {
    assert.file([
      'public/index.html',
    ]);
  });
});
