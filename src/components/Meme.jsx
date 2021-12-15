import React from "react";

export default function Meme() {
  //Setting up the starting image when the page loads
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes), []);
  });
  //Function used to get random image while including all prvious data from the old object, and changing the desired changes in the second parameter
  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randNumb = Math.floor(Math.random() * memesArray.length);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: memesArray[randNumb].url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }
  return (
    <main>
      <div className="menu_form">
        <input
          className="menu_input_top"
          placeholder="Top Text"
          type="text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className="menu_input_bottom"
          placeholder="Bottom Text"
          type="text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={getMemeImage}>Get a new meme image 😹</button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
