import React, { useEffect, useState } from "react";
import "./Homepage.scss";

function About(props) {
  const [data, updateData] = useState(null);

  useEffect(() => {
    props.bucket
      .getObject({
        slug: "about",
        props: "title, metadata",
      })
      .then((data) => {
        updateData(data.object);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const meta = data?.metadata;
  const title = data?.title;
  const aboutFields = "";
  return data ? (
    <section className="about">
      <h1 className="homepage-title">{title}</h1>
      <div className="content">
        <h1 className="message">{meta.description}</h1>
        {aboutFields}
      </div>
    </section>
  ) : (
    <div />
  );
}

export default About;
