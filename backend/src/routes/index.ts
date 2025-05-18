import { Router } from "express";
import streamRoutes from "./stream.routes"
import watchRoutes from "./watch.routes"

const router = Router();

router.use("/stream", streamRoutes);
router.use("/watch", watchRoutes);

export default router