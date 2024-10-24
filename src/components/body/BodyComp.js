import { useState } from "react";
import { mediaData } from "../../mockData/mediaData";
import { Link } from "react-router-dom";
import SongList from "../SongList";

const BodyComp = () => {
  const [showSinger, setShowSinger] = useState(false);
  const [showHero, setShowHero] = useState(false);
  const limit = 4;

  const singerData = mediaData[0].singersDetails;
  const heroData = mediaData[0].heroDetails;

  const handleShowSingers = () => {
    setShowSinger(!showSinger);
  };

  const handleShowHeros = () => {
    setShowHero(!showHero);
  };

  const displaySingerData = showSinger
    ? singerData
    : singerData.slice(0, limit);
  const displayHeroData = showHero ? heroData : heroData.slice(0, limit);

  return (
    <div className="mainBody-container">
      <div className="singer-header">
        <h2>POPULAR SINGERS</h2>
        {singerData.length > limit && (
          <button className="showAll-btn" onClick={handleShowSingers}>
            {showSinger ? "show less" : "show all"}
          </button>
        )}
      </div>
      <div className="artist-container">
        {displaySingerData.map((data) => (
          <Link className="singer-card-link" to={`/songs/${data.name}`}>
            <div className="singer-card" key={data.id}>
              <img
                className="singer-img"
                src={data.singerImage}
                alt="artist-img"
              />
              <h3>{data.name}</h3>
              <p>{data.profession}</p>
            </div>
            {data && <SongList singerDetails={data}/>}
          </Link>
        ))}
      </div>

      <div className="singer-header">
        <h2>POPULAR HERO's</h2>
        <button className="showAll-btn" onClick={handleShowHeros}>
          show all
        </button>
      </div>
      <div className="artist-container">
        {displayHeroData.map((data) => (
          <div className="singer-card" key={data.id}>
            <img className="singer-img" src={data.heroImage} alt="artist-img" />
            <h3>{data.name}</h3>
            <p>{data.profession}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyComp;
