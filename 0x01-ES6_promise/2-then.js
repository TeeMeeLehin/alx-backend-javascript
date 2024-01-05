export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      const successObject = {
        status: 200,
        body: 'success',
      };
      return successObject;
    })
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
