const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(err => {
      console.error('Error:', err);
      res.status(500).send({ error: 'Something went wrong' });
    });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      resolve();
    } else {
      reject(new Error('Something went wrong'));
    }
  });
}