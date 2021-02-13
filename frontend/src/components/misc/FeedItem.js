import React from "react";
import "./FeedItem.scss";

function FeedItem(props) {
  const slug = props.data.slug;
  const d = props.data.metadata;

  return d ? (
    <div className="feed-item-container flex" key={slug}>
      <a href={d.source}>
        <div className="feed-item-info flex">
          <h3 className="source-type">{d.source_type}</h3>
          <p className="description">{d.description}</p>
        </div>
        <img className="feed-image" src={d.images[0]}></img>
      </a>
    </div>
  ) : (
    <div />
  );
}

export default FeedItem;
