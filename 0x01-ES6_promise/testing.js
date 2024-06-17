function returnsPromise() {
  return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Done'), 1000);
  });
}

const response = returnsPromise();
console.log(response);
// if (response instanceof Promise) {
//   console.log('response is a Promise.');
//   response.then(result => console.log('Promise resolved with:', result));
// } else {
//   console.log('response is not a Promise.');
// }
