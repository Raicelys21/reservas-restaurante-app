/* eslint-disable react/no-unknown-property */

const Home =()=>{
return(
    <>
     <section className="navigation">
      <a href="#" className="app-link">Travelers</a>
      <div className="navigation-links">
        <a href="#" className="nav-link">Destinations</a>
        <a href="#" className="nav-link active">Hotels</a>
        <a href="#" className="nav-link">Camping</a>
        <a href="#" className="nav-link">Car Rent</a>
      </div>
      <div className="nav-right-side">
        <button className="mode-switch">
          <svg className="sun" fill="none" stroke="#fbb046" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
          <svg className="moon" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        </button>
      </div>
    </section>
    </>
);
}

export default Home;