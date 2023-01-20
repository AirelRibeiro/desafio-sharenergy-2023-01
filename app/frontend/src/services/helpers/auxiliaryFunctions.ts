
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
