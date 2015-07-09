'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Let\'s make you some HTML!'
    ));

    var prompts = [{
      type: 'input',
      name: 'location',
      message: 'Where would you like to put the file?',
      default: 'public'
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: function() {
    this.fs.copy(
      this.templatePath('_index.html'),
      this.destinationPath(this.props.location + '/index.html')
    );
  },

  install: function () {
  }
});
