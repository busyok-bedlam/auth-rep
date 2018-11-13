const Joi = require('joi');


module.exports = {

  validateSchema: (schema) => (req,res,next) => {
    const result = Joi.validate(req.body, schema);

    if (result.error) {
      return res.status(400).json({
        error: result.error.details[0].message
      });
    }

    if (!req.value) {
      req.value = {};
    }

    req.value['body'] = result.value;

    next()
  },

  schemas: {
    showMessageSchema: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().optional()
    }),

    testMysqlGetSchema: Joi.object().keys({
      user_id: Joi.number().integer().min(1).required()
    }),

    testMysqlCreateSchema: Joi.object().keys({
      user_name: Joi.string().required(),
      user_age: Joi.number().integer().min(1).required()
    }),

    testMysqlUpdateSchema: Joi.object().keys({
      user_id: Joi.number().integer().min(1).required(),
      user_name: Joi.string().required(),
      user_age: Joi.number().integer().min(1).required()
    }),

    testMysqlDeleteSchema: Joi.object().keys({
      user_id: Joi.number().integer().min(1).required()
    })

  }




}
