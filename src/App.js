import React, { useState } from 'react';
import Pictures from "./components/Pictures";
import './App.css';

function App() {
  let [backggroundSelectFlag, changeFlag] = useState(false);
  let [bgsFlag, changeBgsFlag] = useState(true);
  let [selected, changeSelected] = useState(-1);
  let [curBackground, changeBackground] = useState("");
  let [pictureLinks, changeLinks] = useState([
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=",
    "https://images.wallpaperscraft.com/image/forest_fog_trees_126479_1920x1080.jpg",
    "https://images.wallpaperscraft.com/image/pier_dock_sea_dusk_shore_118549_1920x1080.jpg",
    "https://images.wallpaperscraft.com/image/starry_sky_clouds_sunset_120716_1920x1080.jpg",
    "https://images.wallpaperscraft.com/image/tree_fog_nature_beautiful_84257_1920x1080.jpg",
    "https://images.wallpaperscraft.com/image/starry_sky_night_trees_night_landscape_118760_1920x1080.jpg",
    "https://images.wallpaperscraft.com/image/milky_way_august_sky_fir-trees_trees_night_45544_1920x1080.jpg",
    "https://images.wallpaperscraft.com/image/waterfall_grass_nature_shadow_92753_1920x1080.jpg",
    "https://images.wallpaperscraft.com/image/winter_snow_bench_tree_frost_track_cover_48029_1920x1080.jpg",
    "https://images.wallpaperscraft.com/image/sea_coast_rocks_underwater_world_vegetation_fish_53966_1920x1080.jpg",
    "https://images.wallpaperscraft.com/image/leaves_plant_green_118405_1920x1080.jpg",
    "https://images.wallpaperscraft.com/image/mountains_sky_fog_clouds_tops_84363_1920x1080.jpg",
    "http://www.photobackgroundhd.com/wp-content/uploads/2018/08/3D-Nature-Wallpapers.jpg",
    "https://images.wallpaperscraft.com/image/fern_leaf_plant_green_119970_1920x1080.jpg",
    "https://images.wallpaperscraft.com/image/ng_gate_sun_tree_leaves_earth_emptiness_60174_1920x1080.jpg",
    "http://getwallpapers.com/wallpaper/full/b/c/9/706048-new-wallpaper-hd-1080p-1920x1080-for-phones.jpg",
    "https://images.wallpaperscraft.com/image/mountains_sunset_lake_sky_snow_peaks_93192_1920x1080.jpg",
    "https://images.wallpaperscraft.com/image/switzerland_alps_mountains_night_beautiful_landscape_99817_1920x1080.jpg"
  ]);

  let changeBg = () => {
    changeFlag(false);
    changeBackground(pictureLinks[selected]);
  }
  return (
    <div className="App" style={{ backgroundImage: "url(" + curBackground + ")" }}>
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
