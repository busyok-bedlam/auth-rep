const AuthenticateService = require('./service');

class AuthenticateController {

  static showMessage() {
    return async (req, res) => {
      const msg = AuthenticateService.getMessage('Vasya huilo');
      res.status(200).json({
        hello: 'Hello WORLD',
        msg
      })
    }
  }


  static testMysqlGet() {
    return async (req, res) => {
      const { user_id } = req.value.body;
      const userRow =  (await AuthenticateService.testGet(user_id))[0];

      res.status(200).json({
        user: userRow
      });

    };
  }

  static testMysqlCreate() {
    return async (req, res) => {
      // Get params from Joi
      const { user_name, user_age } = req.value.body;

      // Create User in database

      //последовательный запрос
      await AuthenticateService.testCreate(user_name, user_age);
      await AuthenticateService.testCreate(user_name, user_age);
      await AuthenticateService.testCreate(user_name, user_age);
      await AuthenticateService.testCreate(user_name, user_age);
      await AuthenticateService.testCreate(user_name, user_age);

      // paralelniy zapros
      // const req1 = AuthenticateService.testCreate(user_name, user_age);
      // const req2 = AuthenticateService.testCreate(user_name, user_age);
      // const req3 = AuthenticateService.testCreate(user_name, user_age);
      // const req4 = AuthenticateService.testCreate(user_name, user_age);
      // const req5 = AuthenticateService.testCreate(user_name, user_age);

      // await req1;
      // await req2;
      // await req3;
      // await req4;
      // await req5;



      // Return response
      res.status(200).json({
        userName: user_name,
        userAge: user_age
      });
    }
  }

  static testMysqlUpdate() {
    return async (req, res) => {

    }
  }

  static testMysqlDelete() {
    return async (req, res) => {

    }
  }

}

module.exports = AuthenticateController;
