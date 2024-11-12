import {Server} from 'http';
import app from './app';
import config from './config';

// function to initiate connection and error handle gracefully
async function main(){
  const server: Server = app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  })

  const exitHandler = () => {
    if(server){
      server.close(() => {
        console.log('Server closed');
      })
    }
    process.exit(1);
  }

  process.on('uncaughtException', (error) => {
    console.log(error);
    exitHandler();
  })
  
  process.on('unhandledRejection', (error) => {
    console.log(error);
    exitHandler();
  })
}

main();
