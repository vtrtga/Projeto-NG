const validUser = {
  username: "Admin",
  password: "Secretadmin123"
};

const invalidPasswordUser = {
  username: "invalid",
  password: "invalidPawword",
}

const invalidUsername = {
  username: "fd",
  password: "Invalidusername123"
}

const userMock = {
  username: "Admin",
  password: "$2a$06$xuEl3rKavBwWec9zCcD1aeY72wgK55UNTkdPPgVu1mldIr8gA.h2y",
}

export { invalidPasswordUser, invalidUsername, validUser, userMock };
