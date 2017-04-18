// function getTempCallback(location,callback){
//   callback(undefined,78);
//   callback("City not Found");
// }
// getTempCallback('Philadelphia', function(err, temp){
//   if(err){
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location){
//   return new Promise(function(resolve,reject){
//       resolve(79);
//       reject('City Not Found');
//   })
// }
//
// getTempPromise('Philadelphia').then(function(temp){
//   console.log('promise success', temp);
// }, function(err){
//   console.log('promise error', err);
// })



// Challenge Area
function addPromise(a,b){
  return new Promise(function(resolve,reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    }else {
      reject('One or more of the arguments is not a number');
    }
  })


}

addPromise(4,3).then(function(sum){
  console.log('success', sum);
}, function(err){
  console.log('error', err);
});

addPromise(4,'b').then(function(sum){
  console.log('success', sum);
}, function(err){
  console.log('error', err);
});

addPromise(4).then(function(sum){
  console.log('success', sum);
}, function(err){
  console.log('error', err);
});
