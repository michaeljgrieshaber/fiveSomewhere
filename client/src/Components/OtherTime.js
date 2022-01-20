import { useEffect, useState } from "react";
import axios from "axios";

const URL =
  "http://api.timezonedb.com/v2.1/list-time-zone?key=BOIBS6ASBS1P&format=json";

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

  // zones.map((zone) => (
  //   <div key={zone.zoneName}>
  //     <div>Country: {zone.countryName}</div>
  //     <div>Timezone: {zone.zoneName}</div>
  //     <div>Time: {convert(zone.timestamp)}</div>
  //   </div>
  // ))

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

// if (convert(zone.timestamp)) starts with "5" and ends with "PM"{
//   <div>Country: {zone.countryName}</div>
//   <div>Timezone: {zone.zoneName}</div>
//   <div>Time: {convert(zone.timestamp)}</div>
// } else {
//   <div>nothing to see here</div>
// }
