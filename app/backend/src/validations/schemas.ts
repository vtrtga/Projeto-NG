import * as Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.string().required,
  password: Joi.string().required,
});

const createUserSchema = Joi.object({
  username: Joi.string().min(3).required(),
  password: Joi.string().min(8).required(),
});

export { loginSchema, createUserSchema };
