import React from "react";
import { useState } from "react";
import { gql } from "@apollo/client";

export default function Form(props) {
  const [formData, setFormData] = useState({
    url: ""
  });

  function handleChange(evt) {
    console.log("form data", evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.client
      .query({
        query: gql`
          query Query {
            url
            slug
          }
        `
      })
      .then((result) => console.log(result));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="url"
        type="text"
        onChange={handleChange}
        value={formData.url}
      />
      <input type="submit" value="Shorten URL" />
      <br />
      <br />
      <label for="slug"> Shortened URL: </label>
      <span id="slug" />
    </form>
  );
}
