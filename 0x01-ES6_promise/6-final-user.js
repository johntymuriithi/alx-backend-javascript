import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

// Define handleProfileSignup function
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call both functions and wait for them to settle using Promise.allSettled
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => results.map((result) => {
      if (result.status === 'fulfilled') {
        return { status: 'fulfilled', value: result.value };
      }
      return { status: 'rejected', value: result.reason };
    }));
}
