import  express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import  cookieParser from 'cookie-parser';
import prisma from './app/shared/prisma';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import router from './app/routes';


const app: Application = express();

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  console.log('get route hit')
  res.send('Hello World!')
})

app.use("/api", router)

app.post("/api/books", async (req, res) => {
  try {
      const data = req.body;
    const res =  await prisma.book.create({data:data})
    console.log('res', res)
  } catch (error) {
    
  }
})



// app.use("/api/v1", router)

app.use(globalErrorHandler)

app.use((req: Request, res: Response, next: NextFunction)=>{
  res.status(404).json({
    success: false,
    message: 'Not Found',
    error: 
      {
        path: req.originalUrl,
        message: 'API Not Found'
      }
    
  })
})

export default app;

