import RestrauntCard from "./RestrauntCard";
import { restrauntList } from "../assets/config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restraunts) {
    filterData = restraunts?.filter((restraunt) => restraunt?.Data?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase()));

    return filterData;
}

const Body = () => {
    const [allRestraunts, setAllRestraunts] = useState([]);
    const [filteredRestraunts, setFilterdRestraunts] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        getRestraunts();
    }, []);


    async function getRestraunts() {
        // const response = await fetch("https://personal-api-5216c-default-rtdb.firebaseio.com/hello.json");
        // const data = await response.json();
        // console.log(data);
        // setRestraunts(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(data.data.cards[3].card.card.gridElements.infoWithStyle.restaurants);
        // console.log(data, 'data')
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

        // const data = await response.json();
        // const key = "-NajhXoOdAXyg701_PdM";
        // console.log(data[key][0].Data.data.name);

        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.3532772&lng=85.8265977");

        const json = await response.json();

        console.log(json);

        console.log("data - ", json?.data?.cards?.[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards)
        setAllRestraunts(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterdRestraunts(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


        // setAllRestraunts(json?.data?.cards);
        // setFilterdRestraunts(json?.data?.cards);

    }

    return (allRestraunts?.length == 0) ? <Shimmer /> : (
        <>
            <div className="search-body">
                <div className="search-container">
                    <input type="text" className="search-input" placeholder="Enter Restraunt Name or Cuisine" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className="search-btn" onClick={() => {
                        const data = filterData(searchText, allRestraunts);
                       setFilterdRestraunts(data);
                    }
                    }>
                        Search
                    </button>
                </div>
            </div>
            <div className="main-body">
                {
                    filteredRestraunts?.map((restraunt) => {
                        return <RestrauntCard data={restraunt.info} key={restraunt.info.id} />
                    })
                }
            </div>
        </>
    )
}

export default Body;