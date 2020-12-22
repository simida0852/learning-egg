'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const RoleSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, unique: true, required: true },
    access: { type: String, required: true },
    extra: { type: String },
    createdAt: { type: String },
  });

  return mongoose.model('Role', RoleSchema);
};
