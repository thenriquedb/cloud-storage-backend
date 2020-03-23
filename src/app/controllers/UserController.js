const User = require('../models/User');

class UserController {
  async show(req, res) {
    const { id } = req.params;
    const user = await User.findByPk(id, { attributes: ['id', 'name', 'email'] });

    if (!user) return res.json({ error: 'User not found' });

    return res.json({ user });
  }

  async store(req, res) {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ where: { email } });

    if (userExists) return res.json({ error: 'User already exists' });

    const user = await User.create({ name, email, password });
    const { id } = user;

    return res.json({ name, email, id });
  }

  async update(req, res) {
    const { user_id } = req;
    const { password, oldPassword, email } = req.body;
    const user = await User.findByPk(user_id);

    if (!user) return res.status(400).json({ error: 'User not found' });

    if (email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) return res.json({ error: 'User already exists' });
    }

    if (password && (!await (user.checkPassword(oldPassword)))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = await user.update(req.body);

    return res.json({ id, name, email });
  }

  async delete(req, res) {
    const { user_id } = req;
    const { password, confirmPassword } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    if (!await (user.checkPassword(password))) {
      return res.status('401').json({ error: 'Password does no match ' });
    }

    if (confirmPassword !== password) {
      return res.status('401').json({ error: 'Password does no match ' });
    }

    await user.destroy();

    return res.status(200).send();
  }
}

module.exports = new UserController();
