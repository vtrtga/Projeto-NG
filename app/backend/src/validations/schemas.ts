import * as Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const createUserSchema = Joi.object({
  username: Joi.string().min(3).required,
  password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i).min(8).required,
});

export { loginSchema, createUserSchema };
