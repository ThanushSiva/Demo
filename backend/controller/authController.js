const jwt = require("jsonwebtoken");

const createToken = (email) => {
  return jwt.sign({ email }, "thanush", { expiresIn: "1d" });
};

exports.home = (req, res) => {
  res.status(201).json({
    message: "success",
  });
};

exports.loginUser = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      throw Error("All fields are needed");
    }

    const token = createToken(email);

    res.cookie("token", token, {
      expire: "1d",
      httpOnly: true,
      sameSite: "Lax",
    });

    res.status(200).json({ message: "login success" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.logoutUser = async (req, res) => {
  return res
    .clearCookie("token")
    .status(200)
    .json({ message: "successfully logged out" });
};
