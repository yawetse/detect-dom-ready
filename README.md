# detect-dom-ready

Simple module to detect if the browser has fully loaded the DOM without jQuery, it's a simple alternative to jquery.ready() and more comprehensive than window.onload().

## Install
    $ npm install detect-dom-ready
    
## Usage
detect-dom-ready is intented to use in a CommonJS module environment, check out [Browserify](http://browserify.org/ "Browserify")

    var domready = require('detect-dom-ready');
    
    //fire after dom has loaded
    domready(callback); //executes after dom has loaded
    
    //anonymous example
    domready(function(){alert("dom is loaded!")}); //executes after dom has loaded
    
### Thanks
http://stackoverflow.com/questions/799981/document-ready-equivalent-without-jquery

### TO DO
- tests