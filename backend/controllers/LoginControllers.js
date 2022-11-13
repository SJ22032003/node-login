// @desc POST login user
// @route POST /api/login
// @access Public

// Be sure to change Postman file type to JSON <-- !important

const post_login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ error: "Please enter all fields" }).end();
    return;
  }
  res
    .status(200)
    .json({ message: "Login", email, password, status: 200 })
    .end();
  return;
};

module.exports = {
  post_login,
};
