import React, { useEffect, useState } from "react";
import "./Homepage.scss";

function Projects(props) {
  const [data, updateData] = useState(null);

  useEffect(() => {
    props.bucket
      .getObject({
        slug: "projects",
        props: "title, metadata",
      })
      .then((data) => {
        updateData(data.object.metadata);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(data);

  return (
    <section className="projects">
      <div className="content">
        <h1 className="message">{data?.summary}</h1>
        <h1 className="message">{data?.description}</h1>
      </div>
    </section>
  );
}

export default Projects;
