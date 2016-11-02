var page = require('webpage').create(),
  system = require('system'),
  url, filename, size;

url = system.args[1];
filename = system.args[2];
page.viewportSize = { width: 1024, height: 768 };
page.clipRect = { top: 0, left: 0, width: 1024, height: 768 };

page.open(url, function (status) {
  if ( status !== 'success')
  {
    console.log("FAILED to load the address",  url);
    phantom.exit();
  }
  window.setTimeout(function ()
  {
    page.render(filename);
    console.log("Rendered", filename, "from", url);
    phantom.exit();
  }, 2000);
});
