// src/app.ts
import express from "express";

// src/routes/index-routes.ts
import { Router } from "express";
var router = Router();
router.get("/", (_req, res) => {
  res.status(200).json({
    message: "Rede CT"
  });
});

// src/app.ts
import cors from "cors";
var app = express();
var corsOptions = {
  methods: ["GET", "POST", "PUT", "DELETE"],
  origin: ["http://localhost:3000", "https://rede-ct.vercel.app"],
  credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

export {
  app
};
