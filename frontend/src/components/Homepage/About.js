import React, { Fragment, useEffect, useState } from "react";
import Skills from "./Skills";

import { getLineDelineated } from "../util/CosmicFunctions.js";
// const Article = forwardRef(({ onBackClick }, ref) => {
//   return (
//     <article>
//       <h1 ref={ref}>A React article for Latin readers</h1>
//       // Rest of the article's content...
//       <button onClick={onBackClick}>Back to the top</button>
//     </article>
//   );
// });

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
  // console.log(data);
  return data ? (
    <Fragment>
      <section className="about flex" id="homepage-about">
        <div className="section-title-container flex">
          <h2 className="section-title">{title}</h2>
          <div className="header-underline" />
        </div>
        <div className="content flex-row">
          <div className="flex about-me" style={{ width: "50%" }}>
            <div className="profile-pic-container flex">
              <img
                src="https://imgix.cosmicjs.com/1c8757a0-e259-11ea-ad85-b3e5c5f45697-seattleprofilepic.circle.png"
                className="profile-pic"
              />
            </div>
            <div className="message">
              {/* <div className="h4 bold">A bit about me...</div> */}
              {getLineDelineated(meta.description_lines)}
            </div>
          </div>
          <div className="flex" style={{ width: "50%", height: "100%" }}>
            <Skills bucket={props.bucket} />
          </div>
        </div>
      </section>
    </Fragment>
  ) : (
    <div />
  );
}

export default About;
