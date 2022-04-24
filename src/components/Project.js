import React from 'react';
import "../App.css";
import Data from "./data/data.json";
import Hospital from "./images/Hospital.png";
import Covid from "./images/Covid.png";
import Gym from "./images/gym.png";
import CMS from "./images/cms.png";


const Project = () => {
      return (

        <div classname="portfolio" id="portfolio">
        <h1>Works {Data[0].name}</h1>
        <div classname="projects">
          <div>
            <a>
              <img src={Hospital} alt="Hospital Building" width={300} height={200} />
              <div classname="caption">
                <h3>Hospital Project</h3>
                <p>Technologies Used: {Data[0].technologies}</p>
                <p>The group developer a full MVP
                  for a hospital. We included things like
                  patients, appointments, specializations etc.
                </p>
              </div>
            </a>
          </div>
          <div classname="thumbnail portfolio-item">
            <a>
              <img src={Covid} alt="Covid Country API" width={300} height={200}  />
              <div classname="caption">
                <h4>Covid-19 Country API</h4>
                <p>Technologies Used: {Data[1].technologies}</p>
                <p>
                  The project used 2 APIs and an open data source. Axios was used
                  to fetch the covid info for the country and the other api showed
                  country info like the flag and coat of arms.
                </p>

              </div>
            </a>
          </div>
          <div classname="thumbnail portfolio-item">
            <a>
              <img src={Gym} alt="Gym website" width={300} height={200}  />
              <div classname="caption">
                <h3>Gym website</h3>
                <p>Technologies Used: {Data[2].technologies} </p>
                <p>This project was used to test flexbox.
                The website is response so if you change the browser
                width the content is still clear.
                </p>
              </div>
            </a>
          </div>
          <div classname="thumbnail portfolio-item">
            <a>
              <img src={CMS} alt="CMS back-end" width={300} height={200}  />
              <div classname="caption">
                <h3>CMS back-end</h3>
                <p>Technologies Used: {Data[3].technologies} </p>
                <p>This is supposed to
                  be the back-end of our portfolio.
                  A database stores our info like projects skills etc.
                  and the CMS fetches the data.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      );
}
export default Project;