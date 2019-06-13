import React, { useState } from 'react';
import Pictures from "./components/Pictures";
import './App.css';

function App() {
  let [backggroundSelectFlag, changeFlag] = useState(false);
  let [bgsFlag, changeBgsFlag] = useState(true);
  let [selected, changeSelected] = useState(-1);
  let [curBackground, changeBackground] = useState("");
  let [pictureLinks, changeLinks] = useState([
    "https://i.pinimg.com/originals/d5/4b/48/d54b483ffbafca30d37ba0515b12b9d3.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjQDtHx6OXnefOHlNT-w0u473xuN8i8Pu_HH3D0FlzNQHg2Gwd",
    "http://www.photobackgroundhd.com/wp-content/uploads/2018/08/Nature-Amazing-Images.jpg",
    "https://i2.wp.com/sociallover.net/wp-content/uploads/2019/04/background-images-hd-1080p-free-download.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtlxAVeQ2DrwVFE6FA4-eoU1oOjX0cBJNMptiEFbzhRr8eFawVcw",
    "https://ak8.picdn.net/shutterstock/videos/5597768/thumb/9.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYPUuWwbnMbAzdG378YYBHHVnRJKAFOeZXhqZV34mNhrYgIYTX",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJdLAAUp2LcrTZZQslWRu63dsud7NdhWTxM2YHzHCX5EQ7db0M",
    "https://store-images.s-microsoft.com/image/apps.27382.13510798886980861.0b318a10-241a-457e-8cf2-d1233ab81c52.e1c0ce9b-522f-43fc-a864-59040c96d43d",
    "http://alena-vysotskaya.ru/images/300/DSC100304975.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuU8VaPulJD-52bs1DYfGR8LhHXwJYd567iI2naptdP8YuBR7M",
    "http://www.photobackgroundhd.com/wp-content/uploads/2018/08/3D-Nature-Wallpapers.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKuYDkRC1KIRnNGF06XNl973CVqrmB1Jw-kuuojrtfIhp2noUryw",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlm5VBONl8wQktOn37gvDI2HPKirStWqH4BuM1rfOvB6VQ6ZXzBQ",
    "http://getwallpapers.com/wallpaper/full/b/c/9/706048-new-wallpaper-hd-1080p-1920x1080-for-phones.jpg"
  ]);

  let changeBg = () => {
    changeFlag(false);
    changeBackground(pictureLinks[selected]);
  }
  return (
    <div className="App" style={{ backgroundImage: curBackground }}>
      <div className="Customize">
        <button className="CustomizeButton" onClick={() => changeFlag(true)}>Customize</button>
      </div>

      {backggroundSelectFlag && <div className="BackgroundSelector">
        <div className="backgroundSelectorHeader">
          Hello
        </div>
        <Pictures pictureLinks={pictureLinks} changeBgsFlag={changeBgsFlag} selected={selected} changeSelected={changeSelected} />
        <div className="backgroundSelectorFooter">
          <button className="backgroundSelectorButtonCancel" onClick={() => { changeFlag(false) }}>Cancel</button>
          <button className="backgroundSelectorButtonDone" onClick={changeBg} disabled={bgsFlag}>Done</button>
        </div>
      </div>}
    </div>
  );
}

export default App;
