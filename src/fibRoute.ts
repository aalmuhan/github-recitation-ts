// src/fibRoute.ts
import type { Request, Response } from "express";
import fibonacci from "./fib";   // use default import, since fib.ts exports default

export const fibRoute = (req: Request, res: Response): void => {
  const numStr = req.params.num;     // string
  const n = Number(numStr);          // number

  if (isNaN(n)) {
    res.status(400).send(`Invalid number: ${numStr}`);
    return;
  }

  const fibN = fibonacci(n);
  let result = `fibonacci(${n}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${n}) is undefined`;
  }

  res.send(result);
};
