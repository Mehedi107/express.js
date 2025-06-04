import app from './app';

const port = 3000;

let server;

const bootStrap = () => {
  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

bootStrap();
