import React from "react";
import Image from "./Image";
import Loading from "./Loading";

const Gallery = (props) => {
  const { urls } = props;
  if (urls == null) {
    return <Loading />;
  }
  return (
    <div className="columns is-vcentered is-multiline">
      {urls.map((url) => {
          const id = url.id;
        return (
          <div key={id} className="column is-3">
            <Image id={id}/>
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
