import { IResult, IUsers } from '../interfaces';

export function formatsUsers(users: IResult[]) {
  return users.map(({ name, login, picture, email, dob }) => ({
    id: login.uuid,
    name: `${
      name.title === 'Mrs' ? 'Sra.' : name.title === 'Mr' ? 'Sr.' : 'Srta.'
    } ${name.first} ${name.last}`,
    username: login.username,
    email,
    age: dob.age,
    image: picture.thumbnail,
  }));
}

export function filterUsers(users: IUsers[], filter: string, functions: any) {
  const filteredUsers = [...users].filter((u) => {
    return (
      u.email.includes(filter) ||
      u.username.includes(filter) ||
      u.name.includes(filter)
    );
  });
  if (filterUsers.length) {
    functions.setUsersToDisplay(filteredUsers);
    functions.setPage(1);
  } else {
    functions.setNotFound(true);
  }
}
