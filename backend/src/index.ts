import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { customersRouter } from "./routers/customers-router";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/health", (_req: Request, res: Response) => res.send("I am alive!"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is up and running on port ${port} 🚀`);
});
app.use("/customers", customersRouter);

export default app;
