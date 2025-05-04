import { Router, type Request, type Response } from "express";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    message: "Rede CT",
  });
});

export { router as indexRoutes };
