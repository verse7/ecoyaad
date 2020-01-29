import express from 'express';
import graphqlHTTP from 'express-graphql';
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
    return "Hello Worlds!";
  },
};

export class GQLServer {
  public app: express.Express;
  public port: number;

  constructor() {
    this.app = express();
    this.port = 3000;
    this.setupMiddleware();
    this.start();
  }

  private start(): void {
    this.app.listen(this.port, () => {
      console.log('Running a graphql server at http://localhost:3000/graphql');
    });
  }

  private setupMiddleware(): void {
    this.app.use('/graphql', graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true,
    }));
  }
}

export default new GQLServer().app;
