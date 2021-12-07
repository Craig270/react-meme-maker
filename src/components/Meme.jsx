import React from "react";

export default function Meme() {
  return (
    <main>
      <div className="menu_form">
        <input className="menu_input" placeholder="Top Text" type="text" />
        <input className="menu_input" placeholder="Bottom Text" type="text" />
        <button>Get a new meme image 😹</button>
      </div>
    </main>
  );
}
