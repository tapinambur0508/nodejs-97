import Joi from "joi";

const bookSchema = Joi.object({
  title: Joi.string().required().min(5),
  author: Joi.string().required(),
  year: Joi.number().required(),
});

export default bookSchema;
