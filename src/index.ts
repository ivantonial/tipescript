import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 8080;

app.get('/ping', (req: Request, res: Response) => {
  res.send('pong');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});