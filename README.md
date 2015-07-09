# Starters [![Build Status](https://secure.travis-ci.org/nouveller/generator-starters.png?branch=master)](https://travis-ci.org/nouveller/generator-starters)

Starters is a [Yeoman](http://yeoman.io) generator to remove some of the menial tasks you have to perform when setting up front-end projects. It's aim is to be as agnostic as possible.

## Getting Started

First, install the generator with `npm`.

```bash
npm install -g generator-starters
```

Create yourself a new project folder and `cd` into it.

```bash
mkdir new-project && cd new-project
```

Now you're ready to kick things off, this will guide you through setting up your project.

```bash
yo starters
```

## What does Starters provide?

Starters aims to remove the most common things you do at a start of a new project, for example:

* Setting up your favourite build tools (Gulp is the only one currently supported, more coming soon or please do make a PR!)
* Installing your commonly used components and tools through Bower and NPM (suggestions are welcome for any commonly used component you can think of)
* Creating projects files from a `README.md` to a `.gitignore`
* And some extra generators you can find below

Nothing will be forced upon you, you'll be making all the decisions. You won't have to go back and delete unnecessary files or change where your Sass gets placed. Please do make an issue though if you think something is not quite right.

## Extra goodies

Besides generating the basic files to start your project off with, there are also extra generators to help you out.

```bash
yo starters:html
```

This will generate you a fresh new `index.html` file, a bit like grabbing the latest one from the HTML5 Boilerplate.

## TL;DR
![Starters](http://media.giphy.com/media/haBeggedmenEA/giphy.gif)
