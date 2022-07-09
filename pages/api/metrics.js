export default async function handler(req, res) {
  const { fetchCity } = req.body;
  const WeatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${fetchCity}&units=metric&appid=${process.env.KEY}`);
  const data = await WeatherData.json()
  res.status(200).json(data)
  return {data};
}
