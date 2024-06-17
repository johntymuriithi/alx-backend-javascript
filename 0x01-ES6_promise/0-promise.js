export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello Wolrd');
    }, 1000);
  });
}
