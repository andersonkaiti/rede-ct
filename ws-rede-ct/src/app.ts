import express, { type Application } from "express";
import { indexRoutes } from "./routes/index-routes.ts";
import { AuthRouter } from "./routes/auth-routes.ts";
import cors, { type CorsOptions } from "cors";

const app: Application = express();

const corsOptions: CorsOptions = {
  methods: ["GET", "POST", "PUT", "DELETE"],
  origin: ["http://localhost:3000", "https://rede-ct.vercel.app"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRoutes);
app.use("/auth", AuthRouter) 

export { app };
