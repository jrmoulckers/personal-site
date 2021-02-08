import React, { Fragment, useEffect, useState } from "react";
import SkillBar from "../misc/SkillBar";

const NUM_VISIBLE_SKILLS = 13;

function Skills(props) {
  const [data, updateData] = useState(null);

  useEffect(() => {
    props.bucket
      .getObjects({
        type: "skills",
        props: "slug,title,metadata",
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
    <section
      className="skills flex"
      id="homepage-skills"
      style={{ width: "100%" }}
    >
      <div className="skills-list" style={{ width: "100%" }}>
        {data?.slice(0, NUM_VISIBLE_SKILLS).map((d) => (
          <SkillBar
            title={d.title}
            progress={d.metadata.progress}
            description={d.metadata.description}
            key={d.slug}
          />
        ))}
      </div>
    </section>
  ) : (
    <div />
  );
}

export default Skills;
