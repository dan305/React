import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
const CarWidgetComponent = () =>{
    const iconStyles={
        fontSize: "20px",
        paddingRight: "10px",
        color: "blue"
    }
    return(
        <div>
            <FontAwesomeIcon style={iconStyles} icon={faCartShopping} />
            <span>10</span>
        </div>
    )
}

export default CarWidgetComponent;