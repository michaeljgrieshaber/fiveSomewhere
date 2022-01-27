import axios from "axios";
import { useEffect, useState } from "react";

const urlMyTime = "https://worldtimeapi.org/api/ip";

export function convert(time) {
  let unix_timestamp = time;
  let date = new Date(unix_timestamp * 1000);
  let hours = date.getHours();
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

export default function MyTime() {
  const [myTime, setmyTime] = useState([]);

  useEffect(() => {
    async function myInfo() {
      const res = await axios.get(urlMyTime);
      setmyTime(res.data);
    }
    myInfo();
  }, []);

  return (
    <div>
      <br />
      <div>My Timezone: {myTime.timezone}</div>
      <div>My Time: {convert(myTime.unixtime)}</div>
      <br />
    </div>
  );
}
