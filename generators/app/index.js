'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var pluginNames = require('./helpers/plugin-names');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the super-duper ' + chalk.red('Starters') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?',
      default: this.appname
    }, {
      type: 'input',
      name: 'description',
      message: 'Describe your project?',
      default: 'A simple yo generator'
    }, {
      type: 'checkbox',
      name: 'bowerDependencies',
      message: 'Would you like any of these dependencies?',
      choices: ['jquery', 'normalize.css']
    }, {
      type: 'confirm',
      name: 'gulp',
      message: 'Would you like to use Gulp?',
      default: false
    }, {
      type: 'checkbox',
      name: 'gulpPlugins',
      message: 'Would any of these Gulp plugins?',
      choices: [
        'gulp-sass',
        'gulp-autoprefixer'
      ],
      when: function(answers) {
        return answers.gulp;
      }
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: function() {
    this.fs.copy(
      this.templatePath('_package.json'),
      this.destinationPath('package.json')
    );

    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copyTpl(
      this.templatePath('_bower.json'),
      this.destinationPath('bower.json'),
      { name: this.props.name }
    );

    this.fs.copy(
      this.templatePath('bowerrc'),
      this.destinationPath('.bowerrc')
    );

    this.fs.copyTpl(
      this.templatePath('_README.md'),
      this.destinationPath('README.md'),
      {
        name: this.props.name,
        description: this.props.description
      }
    );

    if (this.props.gulp === true) {
      this.fs.copyTpl(
        this.templatePath('_gulpfile.js'),
        this.destinationPath('gulpfile.js'),
        { plugins: pluginNames(this.props.gulpPlugins) }
      );
    }
  },

  install: function () {
    this.bowerInstall(this.props.bowerDependencies, { save: true });

    if (this.props.gulp === true) {
      this.npmInstall(['gulp'], { saveDev: true });
      this.npmInstall(this.props.gulpPlugins, { saveDev: true });
    }
  }
});
