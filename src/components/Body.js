import RestrauntCard from "./RestrauntCard";
import { restrauntList } from "../assets/config";
import { useState, useEffect } from "react"; 

function filterData (searchText, restraunts) {
    filterData = restraunts.filter((restraunt) => restraunt.Data.data.name.toLowerCase().includes(searchText.toLowerCase()));

    return filterData;
}

const Body = () => {
    
    const [restraunts, setRestraunts] = useState(restrauntList);
    const [searchText, setSearchText] = useState("");


    async function getRestraunts() {
        const response = await fetch("https://personal-api-5216c-default-rtdb.firebaseio.com/");
        const data = await response.json();
        // console.log(data);
        // setRestraunts(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(data.data.cards[3].card.card.gridElements.infoWithStyle.restaurants);
        console.log(data, 'data')
        // const restaurants = data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // console.log(restaurants)
        // const names = restaurants?.map((restaurant) => ({
        //     name: restaurant?.info?.name,
        //     area: restaurant?.info?.areaName,
        //     rating: restaurant?.info?.avgRating,
        //     imageId: restaurant?.info?.cloudinaryImageId,
        //     cuisines: restaurant?.info?.cuisines
        // }));
        // console.log(names, "names");

        // setRestraunts(names);
    }

    useEffect(() => {
        getRestraunts();
    }, []);

    return (
        <>
            <div className="search-body">
                <div className="search-container">
                    <input type="text" className="search-input" placeholder="Enter Restraunt Name or Cuisine" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className="search-btn" onClick={() => {
                        const data = filterData(searchText, restraunts);
                        setRestraunts(data);
                    }
                    }>
                        Search
                    </button>
                </div>
            </div>
            <div className="main-body">
                {
                    restraunts && restraunts?.map((restraunt) => {
                        return <RestrauntCard {...restraunt.Data.data} key={restraunt.Data.data.id} />
                    })
                }
            </div>
        </>
    ) 
}

export default Body;