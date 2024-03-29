import classes from "./TempCard.module.css";
import Image from "next/image";

const TempCard = ({city, country, temp, feels_like, description, icon }) => {
    return(
        <div className={classes.card}>
            <div className={classes.name}>
                <h1>{city}, {country}</h1>
                <h2>{description}</h2>
            </div>
            <div>
                <Image
                    width="300"
                    height="300"
                    objectFit="cover"
                    src={`/icons/${icon}.svg`}
                    alt="Icon"
                />
            </div>
            <div className={classes.temp}>
                <div>{Math.round(Number(temp))} °C</div>
                <div>Feels like {Math.round(Number(feels_like))}°C</div>
            </div>
            
        </div>
    );
}

export default TempCard;