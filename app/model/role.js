'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const RoleSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    access: { type: String, required: true, default: 'user' },
    extra: { type: String },
    createdAt: { type: String },
  });

  return mongoose.model('Role', RoleSchema);
};
