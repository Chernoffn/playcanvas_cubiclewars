pc.scripts = {};
pc.script.on("created", function(a, b) {
  pc.scripts[a] = b;
});
