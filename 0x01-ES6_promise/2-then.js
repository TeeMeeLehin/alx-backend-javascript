export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    promise
      .then(() => {
        console.log('Got a response from the API');
        const successObject = {
          status: 200,
          body: 'success',
        };
        resolve(successObject);
        return successObject;
      })
      .catch((error) => {
        console.error('Error:', error.message);
        reject(new Error()); // Return an empty Error object for rejection
      });
  });
}
