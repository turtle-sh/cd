var path = require('path');
define({
  "expr": /^cd/,
  "fn": function(arg) {
    console.log(arg[1]);
    var newPath = path.resolve(this.cwd(), arg[1] );
    this.chdir(newPath);
    this.exit();
  }
});
