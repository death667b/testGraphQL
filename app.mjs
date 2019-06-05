import express from 'express';
import schema, { graphql } from './schema';

const app = expesss();
const port =  3000;

app.get("/", (req, res) => {
  let query = `{ hello, person { name }, people { name, description }}`;
  graphql(schema, query).then(result => {
    res.json(result);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));