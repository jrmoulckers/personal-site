import React, { Fragment, useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
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

  return data ? (
    <section
      className="skills flex"
      id="homepage-skills"
      style={{ width: "50%", height: "100%" }}
    >
      <Fade right>
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
      </Fade>
    </section>
  ) : (
    <div />
  );
}

export default Skills;
