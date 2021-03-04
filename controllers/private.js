const User = require('../models/User')

exports.getPrivateRoute = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.send(user);
  };
  