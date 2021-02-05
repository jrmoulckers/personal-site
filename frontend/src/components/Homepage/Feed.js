import React, { useEffect, useState } from "react";
import "./Homepage.scss";

function Skills(props) {
  const [data, updateData] = useState(null);

  useEffect(() => {
    props.bucket
      .getObjects({
        type: "feed-posts",
        props: "slug, metadata",
      })
      .then((data) => {
        updateData(data.objects);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  const title = "Blog";
  const contactFields = "";
  return data ? (
    <section className="feed">
      <h1 className="homepage-title">{title}</h1>
      <div className="content">
        <h1 className="feed-list">
          {data?.map((d) => (
            <div className="feed-item-container" key={d.slug}>
              <p className="source-type">{d.metadata.source_type}</p>
              <p className="source">{d.metadata.source}</p>
              <p className="description">{d.metadata.description}</p>
              <p className="images">{d.metadata.images}</p>
            </div>
          ))}
          {contactFields}
        </h1>
      </div>
    </section>
  ) : (
    <div />
  );
}

export default Skills;
