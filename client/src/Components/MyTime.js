import axios from "axios";
import { useEffect, useState } from "react";

const urlMyTime = "https://worldtimeapi.org/api/ip";

export default function MyTime() {
  const [myTime, setmyTime] = useState("");
  const [myAbb, setmyAbb] = useState("");
  const [myTimezone, setmyTimezone] = useState("");

  useEffect(() => {
    async function myInfo() {
      const res = await axios.get(urlMyTime);
      setmyTime(res.data.datetime);
      setmyAbb(res.data.abbreviation);
      setmyTimezone(res.data.timezone);
    }
    myInfo();
  }, []);

  return (
    <div>
      <div>My Time: {myTime.substring(11, 19)}</div>
      <div>
        My Timezone: {myAbb} | {myTimezone}
      </div>
      <br />
    </div>
  );
}
