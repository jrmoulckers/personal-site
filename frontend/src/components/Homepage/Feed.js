import React, { useEffect, useState } from "react";
import FeedItem from "../misc/FeedItem";

function Skills(props) {
  const [data, updateData] = useState(null);

  useEffect(() => {
    props.bucket
      .getObjects({
        type: "feed-posts",
        props: "slug,metadata",
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

  const title = "Blog";
  const contactFields = "";
  return data ? (
    <section className="feed flex" id="homepage-feed">
      <div className="section-title-container flex">
        <h2 className="section-title">{title}</h2>
        <div className="header-underline" />
      </div>
      <div className="content">
        <div className="feed-list flex-row">
          {data?.map((d) => (
            <FeedItem data={d} />
          ))}
          {contactFields}
        </div>
      </div>
    </section>
  ) : (
    <div />
  );
}

export default Skills;
