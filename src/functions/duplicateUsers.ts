import { User, UsersListState } from "contexts/github-search-context.types";
import isEmpty from "functions/isEmpty";

// could be improved
export function duplicateUsers(
  users: User[],
  usersChecked: Pick<UsersListState, "usersChecked">["usersChecked"]
): User[] {
  if (isEmpty(users) || isEmpty(usersChecked)) return [];

  const duplicatedUsers = usersChecked.map((id) => {
    const user = users.filter(
      (user: User) => id === user.id || id === user?.duplicatedId
    );

    const duplicatedUser =
      "duplicatedId" in user[0]
        ? {
            ...user[0],
            duplicatedId: user[0].duplicatedId && user[0].duplicatedId + 1,
          }
        : { ...user[0], duplicatedId: user[0]?.id + 1 };

    return duplicatedUser;
  });

  return duplicatedUsers;
}
