# Predix WebApp Starter

*NOTE:* This project was formerly known as the "Predix Seed." Code for old versions of this project can still be found in the old Github repository:  https://github.com/predixdev/predix-seed

## What is the Predix WebApp Starter?
The Predix WebApp Starter ("Starter") is a web application starter kit aimed to accelerate Predix application development.   It comes in the form of a simple web application, with code examples on features such as branding, theming, layout, navigation, responsiveness, organization of views, data presentation and micro-services integration, to name some.  These working code samples can be straightforwardly customized and adapted to specific application needs. Predix application projects can directly use, remove from or add to these features to achieve prototype or production state much faster than through building everything from scratch.  This speeds up application development, letting developers focus on functionality, instead of having to make boilerplate concerns work.

As its name indicates the Starter is built on [Polymer](http://www.polymer-project.org).  Based on the [Web Component API](https://developer.mozilla.org/en-US/docs/Web/Web_Components), Polymer is a component framework that prefers the browser's native capabilities over HTML and JavaScript enhancements, wherever possible.  And where there are differences in currently available features, polyfills are provided towards consistent cross-browser behavior.  By adopting the Polymer strategy the Starter ensures high consistency of application behavior across browsers, and the best chances of compatibility with future browser versions.

Most of the frontend components provided in the Starter are from [Predix UI Components](https://www.predix-ui.com), which are also built on Polymer.  These re-usable UI building blocks have been researched and designed to address the most common UI patterns.  Both built upon Polymer, the Starter and Px Components work together out-of-the-box.  Px Components can be used independently, or in combination with one another and with the Starter.  This achieves consistent behavior, look-and-feel, and high code re-use.

The backend of the Starter is implemented as a NodeJS/Express web server.  It presently includes a minimal set of public modules and a couple of Predix-specific modules (for session and proxy concerns, for example).  Similar to the frontend, it is also straightforwardly customizable, even replaceable by another server application, if so desired.  [NodeJS](http://nodejs.org) is a server-side application framework based on JavaScript.  It enjoys strong growth and huge adoption in the server applications community.

Many features offered by the Starter are from open-source component projects, many of which are actively discussed and contributed to.  This provides developers with available documentation and help in using such components for their projects.

## Getting Started

### Install tools
If you don't have them already, you'll need node, bower and gulp to be installed globally on your machine.  

1. Install [node](https://nodejs.org/en/download/).  This includes npm - the node package manager.  
2. Install [bower](https://bower.io/) globally `npm install bower -g`  
3. Install [gulp](http://gulpjs.com/) globally `npm install gulp-cli -g`  

### Install the dependencies
Change directory into the new project you just cloned, then install dependencies.
```
npm install
bower install
```

## Running the app locally
The default gulp task will start a local web server.  Just run this command:
```
gulp
```
Browse to http://localhost:5000.
Initially, the app will use mock data for the views service, asset service, and time series service.
Later you can connect your app to real instances of these services.

