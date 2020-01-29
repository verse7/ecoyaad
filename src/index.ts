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
    return "Hello Worlds!";
  },
};

export class GQLServer {
  public app: express.Express;
  public port: number;

  constructor() {
    this.app = express();
    this.port = this.getPort();
    this.setupMiddleware();
    this.start();
  }

  private start(): void {
    this.app.listen(this.port, () => {
      console.log('Running a graphql server at http://localhost:3000/graphql');
    });
  }

  private getPort(): number {
    return parseInt(process.env.PORT) || 3000;
  }

  private setupMiddleware(): void {
    this.app.use('/graphql', graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true,
    }));
  }
}

module.exports = new GQLServer().app;
