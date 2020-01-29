import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

// Construct a schema, using graphql schema language
const schema: any = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
const root: any = {
  hello: () => {
    return "Hello World!";
  },
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(3000);
console.log('Running a graphql API server at http://localhost:3000/graphql');
