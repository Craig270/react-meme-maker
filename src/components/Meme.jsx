import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randNumb = Math.floor(Math.random() * memesArray.length);
    console.log(memesArray[randNumb].url);
    setMemeImage(memesArray[randNumb].url);
  }
  return (
    <main>
      <div className="menu_form">
        <input className="menu_input_top" placeholder="Top Text" type="text" />
        <input
          className="menu_input_bottom"
          placeholder="Bottom Text"
          type="text"
        />
        <button onClick={getMemeImage}>Get a new meme image 😹</button>
      </div>
      <img src={memeImage} />
    </main>
  );
}
