import React, { useEffect, useState } from "react";

function Projects(props) {
  const [data, updateData] = useState(null);

  useEffect(() => {
    props.bucket
      .getObject({
        slug: "projects",
        props: "title,metadata",
      })
      .then((data) => {
        updateData(data.object);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(data);
  const meta = data?.metadata;
  const title = "Projects";
  const contactFields = "";
  return data ? (
    <section className="projects flex">
      <div className="content">
        <h1 className="message">{data?.summary}</h1>
        <h1 className="message">{data?.description}</h1>
      </div>
    </section>
  ) : (
    <div />
  );
}

export default Projects;
