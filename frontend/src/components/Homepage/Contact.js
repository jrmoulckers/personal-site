import React, { useEffect, useState } from "react";

function Contact(props) {
  const [data, updateData] = useState(null);

  useEffect(() => {
    props.bucket
      .getObject({
        slug: "contact",
        props: "title,metadata",
      })
      .then((data) => {
        updateData(data.object);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(data);

  const meta = data?.metadata;
  const title = data?.title;
  const contactFields = "";
  return data ? (
    <section className="contact flex">
      <h1 className="homepage-title">{title}</h1>
      <div className="content">
        <h1 className="message">{meta.description}</h1>
        {contactFields}
      </div>
    </section>
  ) : (
    <div />
  );
}

export default Contact;
