const User = require('../models/User');

class UserController {
  async store(req, res) {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ where: { email } });

    if (userExists) return res.json({ error: 'User already exists' });

    const user = await User.create({ name, email, password });
    const { id } = user;

    return res.json({ name, email, id });
  }

  async update(req, res) {
    return res.json({ ok: true });
  }
}

module.exports = new UserController();
