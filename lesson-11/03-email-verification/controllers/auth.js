import crypto from "node:crypto";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import mail from "../mail.js";
import User from "../models/user.js";

async function register(req, res, next) {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });

    if (user !== null) {
      return res.status(409).send({ message: "User already registered" });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomUUID();

    mail.sendMail({
      to: email,
      from: "vmudrij0508@gmail.com",
      subject: "Welcome to BookShelf",
      html: `To confirm you email please click on <a href="http://localhost:8080/api/users/verify/${verificationToken}">link</a>`,
      text: `To confirm you email please open the link http://localhost:8080/api/users/verify/${verificationToken}`,
    });

    await User.create({
      name,
      email,
      password: passwordHash,
      verificationToken,
    });

    res.status(201).send({ message: "Registration successfully!" });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user === null) {
      console.log("Email");
      return res
        .status(401)
        .send({ message: "Email or password is incorrect" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch === false) {
      console.log("Password");
      return res
        .status(401)
        .send({ message: "Email or password is incorrect" });
    }

    if (user.verified === false) {
      return res.status(401).send({ message: "Please verify your email" });
    }

    const token = jwt.sign(
      { id: user._id, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    await User.findByIdAndUpdate(user._id, { token }, { new: true });

    res.send({ token });
  } catch (error) {
    next(error);
  }
}

async function logout(req, res, next) {
  try {
    await User.findByIdAndUpdate(req.user.id, { token: null }, { new: true });

    res.status(204).end();
  } catch (error) {
    next(error);
  }
}

export default { register, login, logout };
