import React, { useEffect, useState } from "react";
import "./Homepage.scss";

function Skills(props) {
  const [data, updateData] = useState(null);

  useEffect(() => {
    props.bucket
      .getObjects({
        type: "feed-posts",
        props: "slug, title, metadata",
      })
      .then((data) => {
        updateData(data.objects);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(data);

  return (
    <section className="feed">
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
        </h1>
      </div>
    </section>
  );
}

export default Skills;
