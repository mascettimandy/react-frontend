import React from "react";
import { render } from "react-dom";
import Form from "../Form";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://ekqg4k.sse.codesandbox.io/",
  cache: new InMemoryCache()
});

// client
//   .query({
//     query: gql`
//       query Query {
//         name
//         book
//       }
//     `
//   })
//   .then((result) => console.log(result));

function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
