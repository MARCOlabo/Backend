import { createUser } from "../models/UserModel.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = await createUser(name, email, password);

    return res.status(201).json({
      success: true,
      message: "A new account has been created!",
      user: newUser,
    });

  } catch (error) {
    console.error("Controller Error:", error);

    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const token = await UserModel.login(email, password);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token: token
    });

  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message || "Login failed"
    });
  }
};

