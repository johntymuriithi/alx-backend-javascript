import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then((data) => {
    const [profile, user] = data;
    console.log(`${profile.body} ${user.firstName} ${user.lastName}`);
  })
    .catch(() => console.log('Signup system offline'));
}
