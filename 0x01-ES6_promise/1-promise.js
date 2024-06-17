import { uploadPhoto } from './utils';

export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve(uploadPhoto());
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
