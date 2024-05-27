import * as fs from "node:fs/promises";
import path from "node:path";

import User from "../models/user.js";

async function changeAvatar(req, res, next) {
  try {
    const newPath = path.resolve("public", "avatars", req.file.filename);

    console.log({ newPath });

    await fs.rename(req.file.path, newPath);

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { avatar: req.file.filename },
      { new: true },
    );

    res.send(user);
  } catch (error) {
    next(error);
  }
}

export default {
  changeAvatar,
};
