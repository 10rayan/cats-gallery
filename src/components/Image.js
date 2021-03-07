import React from "react";

const Image = (props) => {
  const id = props.id;
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={`https://cataas.com/cat/${id}`} alt="cute cat" />
        </figure>
      </div>
    </div>
  );
}
export default Image;
