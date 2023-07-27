import * as Joi from 'joi'

export const JoiValidationSchema = Joi.object({
    DB_NAME: Joi.required(),
    DB_PASSWORD: Joi.required(),
    DB_USERNAME: Joi.required(),
    APP_PORT: Joi.number().default(3300),
})