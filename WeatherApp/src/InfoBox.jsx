import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import weatherimg from "./assets/weather.jpg";
import rain from "./assets/rain.jpg";
import cold from "./assets/cold.jpg";
import sun from "./assets/sun.jpg";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./InfoBox.css";
export default function InfoBox({info}) {

  return (
    <div className="InfoBox">

      <div className="card-container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 70 && info.temperature > 10 ? rain : info.temperature < 10 ? cold : sun}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {info.humidity > 70 ? <ThunderstormIcon /> : info.temperature < 10 ? <AcUnitIcon /> : <SunnyIcon />}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <div>Temperature: {info.temperature}°C</div>
              <div>Humidity: {info.humidity}%</div>
              <div>Min Temperature: {info.tempMin}°C</div>
              <div>Max Temperature: {info.tempMax}°C</div>
              <div>
                The weather can be described as: <i>{info.weather}</i> and Feels
                Like: {info.feelsLike}°C
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
