const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="playlist-container">
        <h2>CREATE LIBRARY</h2>
        <h4>Create your first playlist</h4>
        <p>It's easy,we'll help you</p>
        <button className="sidebar-btn">Create playlist</button>
      </div>
      <div className="podcasts-container">
        <h4>Let's find some podcasts to follow</h4>
        <p>We'll keep you updated on new episodes</p>
        <button className="sidebar-btn">Browse podcasts</button>
      </div>
      <div>
        <ul className="sidebar-footer">
            <li>Legal</li>
            <li>Sfety & Privacy Center</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
            <li>About Ads</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
