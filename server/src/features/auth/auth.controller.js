export default class AuthController {
  constructor(usecases) {
    this.usecases = usecases;
  }

  registerUser = async (req, res) => {
    const response = await this.usecases.registerUser.execute(req.body);
    res.status(response.statusCode).json(response);
  };

  login = (req, res) => {
    const response = this.usecases.login.execute(req.body);
    res.status(200).json(response);
  };
}
