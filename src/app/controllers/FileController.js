const File = require('../models/File');

class FileController {
  async store(req, res) {
    const { key } = req.file;

    const {
      originalname: name,
      mimetype,
      location: url = `${process.env.APP_URL}/files/${key}`
    } = req.file;


    const { user_id = 2 } = req;

    const file = await File.create({
      mimetype,
      user_id,
      key,
      name,
      url
    });

    return res.json(file);
  }

  async index(req, res) {
    const { user_id } = req;

    const files = await File.findAll({ where: { user_id } });
    return res.json(files);
  }

  async delete(req, res) {
    const { id } = req.params;

    await File.destroy({ where: { id }, individualHooks: true });

    return res.status(200).send();
  }
}

module.exports = new FileController();
