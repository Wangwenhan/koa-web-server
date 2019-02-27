const sequelize = require('./../config/db')
const User = sequelize.import('./../schema/user.js');
const Role = sequelize.import('./../schema/role.js');
const Token = sequelize.import('./../schema/token.js');

User.belongsTo(Role);
Role.hasMany(User);
User.sync({ force: false });
Role.sync({ force: false });
Token.sync({ force: false });

module.exports = class {
    // 根据参数查找用户信息
    static async findUserByParam(param) {
        return await User.findOne({
            where: {
                ...param
            }
        })
    }
    // 根据参数查找角色信息
    static async findRoleByParam(param) {
        return await Role.findOne({
            where: {
                ...param
            }
        })
    }
    // 创建登录令牌
    static async createLoginToken(token, expireAt, userId) {
        await this.deleteLoginToken(userId)
        return await Token.create({
            token,
            userId,
            expireAt
        })
    }
    static async deleteLoginToken(userId) {
        return await Token.destroy({
            where: {
                userId
            }
        })
    }
    // 根据参数查找令牌信息
    static async findTokenByParam(param) {
        return await Token.findOne({
            where: {
                ...param
            }
        })
    }
}