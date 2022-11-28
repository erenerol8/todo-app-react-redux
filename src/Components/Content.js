import React from "react";
import ContentList from "./ContentList";

const Content = () => {
  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ContentList />
      </section>
    </>
  );
};

export default Content;
