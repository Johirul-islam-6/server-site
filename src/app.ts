import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

//<------------------ All Router Import-------------->

import { globalErrorHandeler } from './apps/middlewares/globalErrorHandelar';
import httpStatus from 'http-status';
import router from './apps/routes';

// import { ApiError } from './errors/ApiError'

// cors use
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('server is runing');
});
//global Error Handelar
app.use(globalErrorHandeler);

// app.use('/', (req: Request, res: Response, next: NextFunction)=>{
//   res.status(httpStatus.FOUND).json({
//     success: true,
//     message: 'server started',
//     errorMessages: [
//       {
//         path: req.originalUrl,
//         message: 'server started',
//       },
//     ],
//   });
//   next();
// })

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app;
