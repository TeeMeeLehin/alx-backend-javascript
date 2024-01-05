import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise
    .all([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((values) => [{
      status: values[0],
      value: values[0],
    },
    {
      status: values[1],
      value: values[1],
    },
    ]);
}
