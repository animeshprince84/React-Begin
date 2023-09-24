import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) =>{
    const {resData} = props

    const {name , cuisines ,avgRating ,costForTwo, sla, cloudinaryImageId } = resData.info
    return (
        <div className="res-card m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200">
            <img alt="res-logo" className="res-logo rounded-lg" src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} rating</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;