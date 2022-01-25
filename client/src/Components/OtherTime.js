import { useEffect, useState } from "react";
import axios from "axios";

// const someKey = process.env.REACT_APP_API_KEY;
const someKey = "BOIBS6ASBS1P";

const corsAnywhere = "https://fivesomewheres.herokuapp.com/";
const URL = `${corsAnywhere}https://api.timezonedb.com/v2.1/list-time-zone?key=${someKey}&format=json`;
// const URL = `https://api.timezonedb.com/v2.1/list-time-zone?key=${someKey}&format=json`;

export default function OtherTime() {
  const [zones, setZones] = useState([]);

  useEffect(() => {
    async function allInfo() {
      const res = await axios.get(URL);
      setZones(res.data.zones);
    }
    allInfo();
  }, [setZones]);

  function convert(time) {
    let unix_timestamp = time;
    let date = new Date(unix_timestamp * 1000);
    let hours = date.getUTCHours();
    let indicator = "";
    if (hours > 11) {
      indicator = "PM";
    } else {
      indicator = "AM";
    }
    if (hours > 12) {
      hours -= 12;
    }
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let formattedTime =
      hours +
      ":" +
      minutes.substr(-2) +
      ":" +
      seconds.substr(-2) +
      " " +
      indicator;
    return formattedTime;
  }

  return (
    <div>
      <div>
        {zones.map((zone) => (
          <div key={zone.zoneName}>
            <div>Country: {zone.countryName}</div>
            <div>Timezone: {zone.zoneName}</div>
            <div>Time: {convert(zone.timestamp)}</div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

// if (convert(zone.timestamp).substring(1,1) === 5 && convert(zone.timestamp).substring(8,11) === PM )
