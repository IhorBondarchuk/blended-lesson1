import { Joi, Segments } from 'celebrate';

export const reisterUserSchema = {
  [Segments.BODY]: Joi.object({
    name: Joi.string().required().trim(),
    email: Joi.string().email().required().trim(),
    password: Joi.string().required().min(10),
  }),
};

export const loginUserSchema = {
  [Segments.BODY]: Joi.object({
    email: Joi.string().required().trim(),
    password: Joi.string().required().min(10),
  }),
};
