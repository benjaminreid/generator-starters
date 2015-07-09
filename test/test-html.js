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

  describe('custom options are passed', function() {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/html'))
        .withPrompts({ title: 'Test title', lang: 'de' })
        .on('end', done);
    });

    it('sets the <title>', function() {
      assert.fileContent('public/index.html', /Test\stitle/);
    });

    it('sets the lang', function() {
      assert.fileContent('public/index.html', /lang=\"de\"/);
    });
  });
});
