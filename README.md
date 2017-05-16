Official site for Computer Science Mentors

CSS: [Materialize](http://materializecss.com/), [Sass](http://sass-lang.com/guide), [Bourbon](http://bourbon.io/docs/)  
JS: [Angular](https://angularjs.org/), [jQuery](https://api.jquery.com/)  
Development tools: [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md), [Browser-sync](https://www.browsersync.io/docs/gulp)  

Credits to [this boilerplate](https://github.com/petr-lee/MaterializeBoilerplate)

## Setup
* Requirements: [Node](https://nodejs.org/en/), Global `gulp` cli: `npm install -g gulp-cli`
* Run `npm install` to get local packages

## Development
* Run `gulp serve` for hot code reload
* Add custom Sass files in the `sass/` folder, and import them at the bottom of `theme.scss`.

## Deployment
* The OCF doesn't allow for 1) redirects or 2) DNS configuration so push to [csmentors.berkeley.edu](https://csmentors.berkeley.edu/#/) by:
  1. SSH into our OCF account
  2. `cd` to `public_html`
  3. `git pull`
