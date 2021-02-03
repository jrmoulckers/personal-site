import React, { useEffect, useState } from "react";
import "./Homepage.scss";

function Contact(props) {
  const [data, updateData] = useState(null);

  useEffect(() => {
    props.bucket
      .getObject({
        slug: "contact",
        props: "title, metadata",
      })
      .then((data) => {
        updateData(data.object.metadata);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(data);

  return (
    <section className="contact">
      <div className="content">
        <h1 className="message">{data?.description}</h1>
      </div>
    </section>
  );
}

export default Contact;
