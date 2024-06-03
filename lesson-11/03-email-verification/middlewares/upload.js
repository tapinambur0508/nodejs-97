import path from "node:path";
import crypto from "node:crypto";

import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve("tmp"));
  },
  filename: function (req, file, cb) {
    // file.originalname = TrevorPhilips-GTAV.png
    const extname = path.extname(file.originalname); // .png
    console.log({ extname });
    const basename = path.basename(file.originalname, extname); // TrevorPhilips-GTAV
    console.log({ basename });
    const suffix = crypto.randomUUID();

    const filename = `${basename}--${suffix}${extname}`;

    cb(null, filename);
  },
});

export default multer({ storage });
