import { useContext} from "react";
import { LocationContext } from "../context";
import { getLocationByName } from "../data/location-data";
import { useDebounce } from "../hooks";

function Search() 
    {

        const { setSelectedLocation } = useContext(LocationContext);

        const doSearch = useDebounce((trem) => {
            ( async () => 
                {
                    const fetchedLocation = await getLocationByName(trem);
                    setSelectedLocation(fetchedLocation);
                })();
        }, 500);

        function handleChange(e)
            {
                const value = e.target.value;
                doSearch(value);
            }

    

    return (
        <form action="#">
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input
                    className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search"
                    placeholder="Search Location"
                    onChange={handleChange}
                    required
                />
                <button type="submit">
                    <img src="/search.svg" alt="Search" />
                </button>
            </div>
        </form>
    );
}

export default Search;