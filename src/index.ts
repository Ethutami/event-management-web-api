import express from 'express';
import type { Application, Request, Response, NextFunction } from 'express';


const port = 8080;
const app: Application = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).json('Welcome to Event Management Api')
})

// ERROR HANDLING MIDDLEWARE
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({
    success: false,
    message: err.message,
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
