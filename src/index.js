import React from "react";
import { render } from "react-dom";
import Form from "../Form";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://ekqg4k.sse.codesandbox.io/",
  cache: new InMemoryCache()
});

function App() {
  return (
    <div>
      <Form client={client} />
    </div>
  );
}

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
