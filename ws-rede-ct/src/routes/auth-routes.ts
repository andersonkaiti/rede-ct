import { Router, type Request, type Response } from "express";

const router = Router();

router.get("/auth", (_req: Request, res: Response) => {
  res.status(200).json({
    message: "Auth User com Clark",
  });
});

export { router as AuthRouter };
