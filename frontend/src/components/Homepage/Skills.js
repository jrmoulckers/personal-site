import React, { useEffect, useState } from "react";
import "./Homepage.scss";

function Skills(props) {
  const [data, updateData] = useState(null);

  useEffect(() => {
    props.bucket
      .getObjects({
        type: "skills",
        props: "slug, title, metadata",
      })
      .then((data) => {
        updateData(data.objects);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(data);

  return data ? (
    <section className="skills">
      <div className="content">
        <div className="skills-list">
          {data?.map((d) => (
            <div className="skill-container" key={d.slug}>
              <h3 className="Title">{d.title}:</h3>
              <p className="progress">{d.metadata.progress}%</p>
              <p className="description">{d.metadata.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  ) : (
    <div />
  );
}

export default Skills;
