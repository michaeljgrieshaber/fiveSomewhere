import axios from "axios";
import { useEffect, useState } from "react";
import ZoneAll from "./ZoneAll";

const allTimezones = "http://worldtimeapi.org/api/timezone/";

export default function ZoneNames() {
  const [allTimeNames, setAllTimeNames] = useState("");

  useEffect(() => {
    async function allNames() {
      const res = await axios.get(allTimezones);
      setAllTimeNames(res.data);
    }
    allNames();
  }, []);

  return (
    <div>
      <ZoneAll
        allTimeNames={allTimeNames}
        allTimezones={allTimezones}
      ></ZoneAll>
    </div>
  );
}
