import * as Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const createUserSchema = Joi.object({
  username: Joi.string().min(3).required(),
  password: Joi.string().min(8).regex(/(?=.*[A-Z])(?=.*[0-9])/i).required()
    .messages({
      'any.required': 'Password should have at least 8 characters and one letter in uppercase',
    }),
});

export { loginSchema, createUserSchema };
