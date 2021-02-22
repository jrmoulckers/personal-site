import React from "react";
import "./FeedItem.scss";

function FeedItem(props) {
  console.log(props.data)
  const slug = props.data.slug;
  const title = props.data.title;
  const d = props.data.metadata;

  return d ? (
    <div className="feed-item-container" key={slug}>
      <img className="feed-item-image" src={d.images[0]} alt="testing" />
      <div className="feed-item-info flex">
        <div className="feed-item-title-container">
          <div className="title">{title}</div>
          <h3 className="source-type">{d.source_type}</h3>
        </div>
        <div className="description">{d.description}</div>
        <a href={d.source}>
          <div className="button see-more">
            <div className="text">See More</div>
          </div>
        </a>
      </div>
    </div>
  ) : (
    <div />
  );
}

export default FeedItem;
