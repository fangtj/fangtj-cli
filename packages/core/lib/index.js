'use strict';

module.exports = core;
let utils = require('@fangtj-cli/utils')
console.log(`在core中使用utils方法${utils()}`)

function core() {
  return 'Hello from core';
}
