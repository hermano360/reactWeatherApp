// var names = ['Andy','Julie', 'Jen'];
// //
// // names.forEach(function(name){
// //   console.log('forEach',name);
// // })
// //
// // names.forEach((name) => {
// //   console.log('arrowFunc', name);
// // });
// //
// // names.forEach((name) => console.log(name));
//
// // var returnMe = (name) => name + '!';
// // console.log(returnMe('Herminio'));
//
//
// var person = {
//   name: 'Andrew',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();

function add(a,b){
  return a+b
}

var add1 = (a,b) => a+b;

var add2 = (a,b) => {
  return a + b;
}

console.log(add(1,3));
console.log(add1(9,5));
console.log(add2(7,2));
