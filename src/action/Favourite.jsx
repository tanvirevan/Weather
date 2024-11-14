import { useState } from "react";
import FavouriteListModal from "./FavouriteListModal";

export default function Favourite()
 {
   const [location, setLocation] = useState(false);

   function handleFavouriteLocation()
    {
      setLocation(!location);


    }
   return (
    <>
      { location && <FavouriteListModal/>}
      <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
        onClick={handleFavouriteLocation}
      >
        <img src={location? "/heart-red.svg" : "/heart.svg"} alt="" />
        <span>Favourite Locations</span>
      </div>
    </>
   );
 };
