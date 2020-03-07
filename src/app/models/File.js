const { DataTypes, Model } = require('sequelize');
const aws = require('aws-sdk');
const fs = require('fs');
const { resolve } = require('path');
const { promisify } = require('util');

const s3 = new aws.S3();

class File extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      key: DataTypes.STRING,
      mimetype: DataTypes.STRING,
      url: DataTypes.STRING,
    }, { sequelize });

    this.addHook('beforeDestroy', async (file) => {
      if (process.env.STORAGE_TYPE === 's3') { // Apaga o arquivo no S3
        await s3.deleteObject({
          Bucket: process.env.BUCKET_NAME,
          Key: file.key
        }).promise();
      } else { // Apaga o arquivo local
        await promisify(fs.unlink)(
          resolve(__dirname, '..', '..', '..', 'tmp', 'uploads', file.key)
        );
      }
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

module.exports = File;
