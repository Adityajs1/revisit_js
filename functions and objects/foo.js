class Foo {
  bar() {}
}

// is literally just:

function Foo() {}
Foo.prototype.bar = function() {};