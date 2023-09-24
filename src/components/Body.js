import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () =>{

    const [listOfRestaurants,setListOfRestaurant] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);

    const [searchText,setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    
    useEffect( ()=>{
        fetchData();
    },[]);

    const fetchData = async ()=> {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

        const json = await data.json();

        setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus == false){
        return (<h1>Seems you are offline!! Please check your internet connection!!</h1>)
    }

    return listOfRestaurants.length == 0 ? <Shimmer/> :(
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-black border-solid" value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg hover:bg-green-200" onClick={()=>{

                        const filteredRestaurant = listOfRestaurants.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);

                    }}>Search</button>
                </div>
                <div className="mp-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200" 
                    onClick={()=>{
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setFilteredRestaurant(filteredList);
                    }}>
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurant.map((restaurant)=>(
                        <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}> 
                            {restaurant.info.isOpen ? <RestaurantCardPromoted resData={restaurant}/> : <RestaurantCard resData={restaurant}/>}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;