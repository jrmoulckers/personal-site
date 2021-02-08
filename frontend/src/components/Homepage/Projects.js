import React, { useEffect, useState } from "react";
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

  // console.log(data);
  const meta = data?.metadata;
  const title = "Projects";
  return data ? (
    <section className="projects flex" id="homepage-projects">
      <div className="section-title-container flex">
        <h2 className="section-title">{title}</h2>
        <div className="header-underline" />
      </div>
      <div className="content">
        <div className="projects-list grid">
          {data?.slice(0, NUM_VISIBLE_PROJECTS).map((d) => (
            <ProjectThumbnail
              title={d.title}
              img={d.metadata.splash?.imgix_url}
              tools={d.metadata.tools}
              blurb={d.metadata.blurb}
              slug={d.slug}
              key={d.slug}
            />
          ))}
        </div>
      </div>
    </section>
  ) : (
    <div />
  );
}

export default Projects;
