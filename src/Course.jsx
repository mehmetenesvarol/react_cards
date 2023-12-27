import React from "react";

export const Course = (props) => {
    const {title,description,imgUrl} = props
  return (
    <>
      <div className="card">
        <img src={imgUrl} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </>
  );
};
