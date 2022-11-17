const validUser = {
  username: "Admin",
  password: "Secretadmin123"
};

const invalidPasswordUser = {
  username: "Admin",
  password: "invalidPassword",
}

const invalidUsername = {
  username: "fd",
  password: "Secretadmin123"
}

const userMock = {
  username: "Admin",
  password: "$2a$06$xuEl3rKavBwWec9zCcD1aeY72wgK55UNTkdPPgVu1mldIr8gA.h2y",
}

export { invalidPasswordUser, invalidUsername, validUser, userMock };
