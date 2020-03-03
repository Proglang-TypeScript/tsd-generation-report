var greetLib = import ("greet-settings-module");

// from TypeScript documentation
greet({
  greeting: "hello world",
  duration: 4000
});

// another example that exercises the optional color attribute
greet({
  greeting: "hello world",
  color: "#00ff00"
});
