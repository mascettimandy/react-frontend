import React from "react";
import { render } from "react-dom";
import Form from "../Form";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://ekqg4k.sse.codesandbox.io/",
  cache: new InMemoryCache()
});

function makeSlug(url) {
  var random_string =
    Math.random().toString(32).substring(2, 5) +
    Math.random().toString(32).substring(2, 5);
  console.log("result:", random_string);
  return random_string;
}

console.log(makeSlug(4));

function App() {
  return (
    <div>
      <Form client={client} makeSlug={makeSlug} />
    </div>
  );
}

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
