import React, { useEffect, useState } from "react";
import Imgix from "react-imgix";
import Skills from "./Skills";

import { getLineDelineated } from "../util/CosmicFunctions.js";

function About(props) {
  const [data, updateData] = useState(null);

  useEffect(() => {
    props.bucket
      .getObject({
        slug: "about",
        props: "title,metadata",
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
  console.log(data);
  return data ? (
    <section className="about flex">
      <h2 className="section-title">{title}</h2>
      <div className="header-underline" />
      <div className="content">
        <div className="flex-row">
          <div className="flex" style={{ width: "50%" }}>
            <div className="flex">
              <Imgix
                src="https://imgix.cosmicjs.com/23d44e20-e19e-11ea-88aa-0bae7ba3a376-Seattle-Profile-Pic.JPG"
                sizes="20vw"
                className="profile-pic"
              />
            </div>
            <div className="message">
              {getLineDelineated(meta.description_lines)}
            </div>
          </div>
          <div className="flex" style={{ width: "50%" }}>
            <Skills bucket={props.bucket} />
          </div>
        </div>
        {aboutFields}
      </div>
    </section>
  ) : (
    <div />
  );
}

export default About;
