const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const AuthenticateController = require('./controller');
const { validateSchema, schemas } = require('./validator');


router.post('/',
  validateSchema(schemas.showMessageSchema),
  asyncHandler(AuthenticateController.showMessage())  
);


router.post('/get',
  validateSchema(schemas.testMysqlGetSchema),
  asyncHandler(AuthenticateController.testMysqlGet())
);

router.post('/create',
  validateSchema(schemas.testMysqlCreateSchema),
  asyncHandler(AuthenticateController.testMysqlCreate())
);

router.post('/update',
  validateSchema(schemas.testMysqlUpdateSchema),
  asyncHandler(AuthenticateController.testMysqlUpdate())
);

router.post('/delete',
  validateSchema(schemas.testMysqlDeleteSchema),
  asyncHandler(AuthenticateController.testMysqlDelete())
);

module.exports = router;
