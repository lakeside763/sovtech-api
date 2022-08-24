import { app, port, server, shutdown } from './server';

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  app.listen({ port }, () => console.log(`Server ready at http://localhost:${port}`));
}

startApolloServer();


process.on('SIGINT', async () => {
  await shutdown(server);
});

process.on('SIGTERM', async () => {
  await shutdown(server);
});
