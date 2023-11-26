import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// utilizamos la libreria multer para el guardado de imagenes
// el archivo en el servidor y la ruta en la db
import multer from "multer";
import Images from "./imageModel.js";

const app = express();

app.use(express.json());
app.use(cors());

// habilitamos la carpeta images
app.use("/images", express.static("images"));

const mongoUrl = "mongodb://127.0.0.1:27017/images";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected...");
  })
  .catch((e) => console.log(e));

app.get("/images", async (req, res) => {
  try {
    Images.find().then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {
    res.json({ status: error });
  }
});

const storage = multer.diskStorage({
  // definimos la carpeta donde se guardaran las imagenes
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  // le damos un nuevo nombre a la imagen
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/images", upload.single("image"), async (req, res) => {
  console.log(req.body);

  const imageName = req.file.filename;

  try {
    await Images.create({ image: imageName });
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
});

app.listen(3000, () => {
  console.log("Server running...");
});
