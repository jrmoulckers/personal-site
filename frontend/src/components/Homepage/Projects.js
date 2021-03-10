import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import ProjectThumbnail from "../misc/ProjectThumbnail";

const NUM_VISIBLE_PROJECTS = 18;

function Projects(props) {
  const [data, updateData] = useState(null);

  useEffect(() => {
    props.bucket
      .getObjects({
        type: "projects",
        props: "slug,title,metadata",
      })
      .then((data) => {
        updateData(data.objects);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const meta = data?.metadata;
  const title = "Projects";
  return data ? (
    <section className="projects flex" id="homepage-projects">
      <div className="section-title-container flex">
        <h2 className="section-title">{title}</h2>
        <div className="header-underline" />
      </div>
      <Fade left>
        <div className="content">
          <div className="project-list grid">
            {data?.slice(0, NUM_VISIBLE_PROJECTS).map((d) => (
              <ProjectThumbnail
                title={d.title}
                tools={d.metadata.tools}
                img={d.metadata.splash?.imgix_url}
                description={d.metadata.description}
                blurb={d.metadata.blurb}
                slug={d.slug}
                key={d.slug}
              />
            ))}
          </div>
        </div>
      </Fade>
    </section>
  ) : (
    <div />
  );
}

export default Projects;
