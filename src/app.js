import express, { json, urlencoded }from "express";
import { countriesRouter } from "./routes/countriesRouter.js";
import dotenv from "dotenv"

const app = express();

dotenv.config();

app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api/countries',countriesRouter)



export const httpServer = app.listen(process.env.PORT, (req, res) =>
  console.log(`Server running on port ${process.env.PORT}`),
);
