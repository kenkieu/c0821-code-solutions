function ExampleConstructor() {

}
var exampleConstructorInstance = ExampleConstructor instanceof Object;
console.log('value of exampleConstructorInstance:', exampleConstructorInstance);
console.log('type of exampleConstructorInstance:', typeof exampleConstructorInstance);

var example1 = new ExampleConstructor()
;
console.log('value of example1:', example1);
var example1Instance = example1 instanceof ExampleConstructor;
console.log('value of example1Instance:', example1Instance);
