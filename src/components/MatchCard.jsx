import React from "react";

function MatchCard(props) {
  const { item, keyValue, style } = props;
  const { description = "", url = "", title = "" } = item;
  return (
    <a
      rel="noopener noreferrer"
      href={url}
      target="_blank"
      key={keyValue}
      style={style}
      className="a-no-style"
    >
      <div className="MatchCard">
        <div className="MatchCard_detail">
          <h5>{title}</h5>
          <div>{description}</div>
        </div>
      </div>
    </a>
  );
}

export default MatchCard;
