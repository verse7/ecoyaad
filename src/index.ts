import { ApolloServer } from 'apollo-server';

import resolvers from './resolvers';
import typeDefs from './typedefs';


export class GQLServer {
  public server: ApolloServer;
  public port: number;

  constructor() {
    this.server = new ApolloServer({resolvers, typeDefs});
    this.port = 3000;
    this.listen();
  }

  private listen(): void {
    this.server.listen(this.port)
      .then(({ url }) => {
        console.log(`Graphql server available at ${url}`);
      });
  }
}

export default new GQLServer().server;
