import React from "react";

function handleChange(evt) {
  console.log("new value", evt.target.value);
}

export default function Form() {
  return (
    <form>
      <input id="url" type="text" onChange={handleChange} />
      <input type="submit" value="Shorten URL" />
    </form>
  );
}
