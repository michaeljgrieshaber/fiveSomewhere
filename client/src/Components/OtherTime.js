import { useEffect, useState } from "react";
import axios from "axios";

const URL =
  "http://api.timezonedb.com/v2.1/list-time-zone?key=BOIBS6ASBS1P&format=json";

function test(time) {
  let unix_timestamp = time;
  let date = new Date(unix_timestamp * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();
  let formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
  return formattedTime;
}

export default function OtherTime() {
  const [zones, setZones] = useState([]);

  useEffect(() => {
    async function allInfo() {
      const res = await axios.get(URL);
      setZones(res.data.zones);
    }
    allInfo();
  }, [setZones]);

  return (
    <div>
      <div>
        {zones.map((zone) => (
          <div key={zone.zoneName}>
            <div>{zone.zoneName}</div>
            <div>{test(zone.timestamp)}</div>
            <div>{test(zone.gmtOffset)}</div>
            <div>{test(zone.timestamp + zone.gmtOffset)}</div>

            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
