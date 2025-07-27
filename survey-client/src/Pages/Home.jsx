import React from "react";
import Banner from "../components/Header/Banner";
import Marquee from "react-fast-marquee";
import SharedHome_1 from "../components/SharedHome/SharedHome_1";
import SharedHome_2 from "../components/SharedHome/SharedHome_2";
import SharedHome_3 from "../components/SharedHome/SharedHome_3";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mt-4" >
        <Marquee pauseOnHover={false} speed={50} gradient={true} className="">
        {[
          { id: 1, name: "IBM", image_url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
          { id: 4, name: "MIT", image_url: "https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg" },
          { id: 6, name: "Google", image_url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
          { id: 7, name: "Microsoft", image_url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
          { id: 8, name: "Amazon", image_url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
          { id: 10, name: "Facebook", image_url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" },
          { id: 11, name: "Apple", image_url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
          { id: 12, name: "NVIDIA", image_url: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" },
          { id: 15, name: "Oracle", image_url: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
          { id: 19, name: "LinkedIn", image_url: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" },
          { id: 20, name: "Spotify", image_url: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
        ].map((logo) => (
          <div key={logo.id} className="flex items-center mx-8">
            <img
              src={logo.image_url}
              alt={logo.name}
              title={logo.name}
              className="  w-auto object-contain"
              style={{ maxWidth: 80 }}
            />
          </div>
        ))}
      </Marquee>
      </div>
        {/* Share Section */}
        <SharedHome_1></SharedHome_1>
        <SharedHome_2></SharedHome_2>
        <SharedHome_3></SharedHome_3>
      

    
     
      
    </div>
  );
};

export default Home;
