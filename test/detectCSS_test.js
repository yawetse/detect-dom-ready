/*
 * detect-dom-ready
 * https://github.com/condenast
 *
 * Copyright (c) 2013 Condé Nast. All rights reserved.
 */

'use strict';

var should = require('chai').should();
var detect-dom-ready = require('../lib/detect-dom-ready');

describe('detect-dom-ready', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      should.equal(-1, [1,2,3].indexOf(5));
      should.equal(-1, [1,2,3].indexOf(0));
    });
  });
});
