import { useEffect, useState } from "react";
import axios from "axios";
import { convert } from "./unix";
import "./OtherTime.css";

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

  function display(zone) {
    if (convert(zone.timestamp)) {
      return (
        <div className="otherTimes">
          <div>Country: {zone.countryName}</div>
          <div>Timezone: {zone.zoneName}</div>
          <div>Time: {convert(zone.timestamp)}</div>
          <br />
        </div>
      );
    }
  }

  return (
    <div>
      <div>All the places where it's 5 O'Clock!</div>
      <br />
      <div>
        {zones.map((zone) => (
          <div key={zone.zoneName}>
            <div>{display(zone)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
