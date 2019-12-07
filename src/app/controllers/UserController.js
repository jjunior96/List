import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ erro: 'Usuario ja existe' });
    }

    const user = await User.create(req.body);

    return res.json(user);
  }

  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  }
}

export default new UserController();
