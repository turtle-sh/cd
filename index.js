//var path = require('path');
define({
  "name": "cd",
  "tagLine": "Change working directory",
  "parse": function(arg) {
    return arg.replace(/^cd ?/,'');
  },
  "fn": function(pathArg) {
    this.chdir(pathArg);
    this.exit();
  }
});
