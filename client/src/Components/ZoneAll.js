import axios from "axios";
import { useEffect, useState } from "react";

export default function ZoneAll(props) {
  const { allTimeNames } = props;
  const { allTimezones } = props;

  const [zones, setZones] = useState([]);

  useEffect(() => {
    let all = [];
    for (let i = 0; i < allTimeNames.length; i++) {
      let allZonesURL = allTimezones + allTimeNames[i];

      async function timeTime() {
        const res = await axios.get(allZonesURL);
        let arrayZones = res.data;
        all.push(arrayZones);
      }
      timeTime();
    }
    setZones(all);
  }, [allTimeNames, allTimezones]);

  if (zones.length > 0) {
    console.log(zones);
  }

  return (
    <div>
      {zones.map((zone) => (
        <div key={zone.timezone}>
          <div>{zone.timezone}</div>
        </div>
      ))}
    </div>
  );
}
