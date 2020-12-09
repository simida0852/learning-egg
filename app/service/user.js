'use strict';

const Service = require('egg').Service;


class User extends Service {
  // 创建用户
  async create(payload) {
    const { ctx, service } = this;
    const role = await service.role.show(payload.role);
    if (!role) {
      ctx.throw(404, '角色没有找到');
    }
    payload.password = await this.ctx.genHash(payload.password);
    return ctx.model.User.create(payload);
  }

  // 用户列表
  async index(payload) {
    const { currentPage, pageSize, isPaging, search } = payload;
    let res = [];
    let count = 0;
    const skip = ((Number(currentPage)) - 1) * Number(pageSize || 10);
    if (isPaging) {
      if (search) {
        res = await this.ctx.model.User.find({ mobile: { $regex: search } }).populate('role').skip(skip)
          .limit(Number(pageSize))
          .sort({ createdAt: -1 })
          .exec();
        count = res.length;
      } else {
        res = await this.ctx.model.User.find({}).populate('role').skip(skip)
          .limit(Number(pageSize))
          .sort({ createdAt: -1 })
          .exec();
        count = await this.ctx.model.User.countDocuments({}).exec();
      }
    } else {
      if (search) {
        res = await this.ctx.model.User.find({ mobile: { $regex: search } }).populate('role').sort({ createdAt: -1 })
          .exec();
        count = res.length;
      } else {
        res = await this.ctx.model.User.find({}).populate('role').sort({ createdAt: -1 })
          .exec();
        count = await this.ctx.model.User.countDocuments({}).exec();
      }
    }
    // 整理数据源 -> Ant Design Pro
    const data = res.map((e, i) => {
      const jsonObject = Object.assign({}, e._doc);
      jsonObject.id = e._id;
      jsonObject.key = i;
      jsonObject.password = 'Are you ok?';
      jsonObject.createdAt = this.ctx.helper.formatTime(e.createdAt);
      return jsonObject;
    });

    return { count, list: data, pageSize: Number(pageSize), currentPage: Number(currentPage) };
  }

  // 单个用户
  async show(_id) {
    const user = await this.ctx.service.user.find(_id);
    if (!user) {
      this.ctx.throw(404, '抱歉,没有找到用户');
    }
    return this.ctx.model.User.findById(_id).populate('role');
  }


  // 删除用户
  async delete(_id) {
    const { ctx, service } = this;
    const user = await ctx.service.user.find(_id);
    if (!user) {
      ctx.throw(404, '抱歉,没有找到用户');
    }
    return ctx.model.User.findByIdAndRemove(_id);
  }

  async update(_id, payload) {
    const { ctx, service } = this;
    const user = await ctx.service.user.find(_id);
    if (!user) {
      ctx.throw(404, '抱歉,没有找到用户');
    }
    return ctx.model.User.findByIdAndUpdate(_id, payload);
  }


  async findByAccount(account) {
    return this.ctx.model.User.findOne({ account });
  }


  async find(id) {
    return this.ctx.model.User.findById(id);
  }


  async findByIdAndUpdate(id, values) {
    return this.ctx.model.User.findByIdAndUpdate(id, values);
  }


}

module.exports = User;
