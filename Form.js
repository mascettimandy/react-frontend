import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import gql from "graphql-tag";

const GET_SLUGS = gql`
  {
    Link {
      url
      slug
    }
  }
`;

const SEND_URLS = gql`
  mutation createUrl($url: String!, $slug: String!) {
    createUrl(input: { url: $url, slug: $slug }) {
      url
      slug
    }
  }
`;

export default function Form(props) {
  const { data } = useQuery(GET_SLUGS);
  const [createUrl] = useMutation(SEND_URLS);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createUrl({
      variables: {
        url: evt.target.value,
        slug: props.makeSlug(evt.target.value)
      }
    });
  };

  return data.slugs.map(({ url, slug }) => {
    let input;
    return (
      <form onSubmit={handleSubmit}>
        <input id="url" type="text" value={url} />
        <input type="submit" value="Shorten URL" />
        <br />
        <br />
        <label htmlFor="slug"> Shortened URL: </label>
        <span id="slug" value={slug} />
      </form>
    );
  });
}
