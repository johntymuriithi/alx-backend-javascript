/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  return promise
    .then((_d) => ({ status: 200, body: 'success' }))
    .catch((_err) => new Error())
    .finally(() => console.log('Got a response from the API'));
}
