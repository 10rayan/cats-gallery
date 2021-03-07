import React, { useEffect, useState} from "react";
import { fetchImages } from "../services/api/cataas";
import Form from "./Form";
import Gallery from "./Gallery";

const Main = () => {
  const [urls, setUrls] = useState(null);
  useEffect(() => {
    fetchImages(10).then((urls) => {
      setUrls(urls);
    });
  }, []);
  function reloadImages(num) {
    fetchImages(num).then((urls) => {
      setUrls(urls);
    });
  }
  return (
    <main>
      <section className="section">
        <div className="container">
          <Form onFormSubmit={reloadImages}/>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Gallery urls={urls} />
        </div>
      </section>
    </main>
  );
}
export default Main;
