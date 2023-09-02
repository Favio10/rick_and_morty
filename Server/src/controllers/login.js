const users = require("../utils/users");
const login = (req, res) => {
  // console.log(req.query) = {email: "favio@gmail.com", password: 'loquesea}

  const { email, password } = req.query;
  let access = false;
  users.forEach((user) => {
    if (user.email === email && user.password === password) {
      access = true;
    }
  });
  res.json({ access });
};

module.exports = login;
