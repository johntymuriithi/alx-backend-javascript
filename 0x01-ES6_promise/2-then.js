// 2-then.js
export default function handleResponseFromAPI(promise) {
    return promise
        .then(() => {
            // When the promise resolves
            return {
                status: 200,
                body: 'success',
            };
        })
        .catch(() => {
            // When the promise rejects
            return new Error();
        })
        .finally(() => {
            // For every resolution, log the message
            console.log('Got a response from the API');
        });
}
