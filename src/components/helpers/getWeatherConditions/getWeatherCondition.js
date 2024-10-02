import Sun_cloud from "../../icon/Sun_cloud.png";
import Sunny from "../../icon/Sunny.png";
import Drizzle from "../../icon/Drizzle.png";
import Foggy from "../../icon/Foggy.png";
import Rain from "../../icon/Rain.png";
import Snow from "../../icon/Snow.png";
import Thunderstorm from "../../icon/Thunderstorm.png";

const weatherMap = {
  0: ["Clear sky", `${Sunny}`],
  1: ["Mainly clear, partly cloudy, and overcast", `${Sun_cloud}`],
  2: ["Mainly clear, partly cloudy, and overcast", `${Sun_cloud}`],
  3: ["Mainly clear, partly cloudy, and overcast", `${Sun_cloud}`],
  45: ["Fog and depositing rime fog", `${Foggy}`],
  48: ["Fog and depositing rime fog", `${Foggy}`],
  51: ["Drizzle: Light, moderate, and dense intensity", `${Drizzle}`],
  53: ["Drizzle: Light, moderate, and dense intensity", `${Drizzle}`],
  55: ["Drizzle: Light, moderate, and dense intensity", `${Drizzle}`],
  56: ["Freezing Drizzle: Light and dense intensity", `${Drizzle}`],
  57: ["Freezing Drizzle: Light and dense intensity", `${Drizzle}`],
  61: ["Rain: Slight, moderate and heavy intensity", `${Rain}`],
  63: ["Rain: Slight, moderate and heavy intensity", `${Rain}`],
  65: ["Rain: Slight, moderate and heavy intensity", `${Rain}`],
  66: ["Freezing Rain: Light and heavy intensity", `${Rain}`],
  67: ["Freezing Rain: Light and heavy intensity", `${Rain}`],
  71: ["Snow fall: Slight, moderate, and heavy intensity", `${Snow}`],
  73: ["Snow fall: Slight, moderate, and heavy intensity", `${Snow}`],
  75: ["Snow fall: Slight, moderate, and heavy intensity", `${Snow}`],
  77: ["Snow grains", `${Snow}`],
  80: ["Rain showers: Slight, moderate, and violent", `${Rain}`],
  81: ["Rain showers: Slight, moderate, and violent", `${Rain}`],
  82: ["Rain showers: Slight, moderate, and violent", `${Rain}`],
  85: ["Snow showers slight and heavy", `${Snow}`],
  86: ["Snow showers slight and heavy", `${Snow}`],
  95: ["Thunderstorm: Slight or moderate", `${Thunderstorm}`],
  96: ["Thunderstorm with slight and heavy hail", `${Thunderstorm}`],
  99: ["Thunderstorm with slight and heavy hail", `${Thunderstorm}`],
};

const getWeatherCondition = (code) => {
  return weatherMap[code] || "Code NOT recognised";
};

export default getWeatherCondition;
