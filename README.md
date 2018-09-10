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

## License

(The MIT License)

Copyright (c) 2013

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
