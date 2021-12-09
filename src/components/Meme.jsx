import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "#",
    bottomText: "#",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randNumb = Math.floor(Math.random() * memesArray.length);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: memesArray[randNumb].url,
    }));
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
      <img src={meme.randomImage} />
    </main>
  );
}
