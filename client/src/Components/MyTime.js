import axios from "axios";
import { useEffect, useState } from "react";

const urlMyTime = "http://worldtimeapi.org/api/ip";

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
      <div>my time is: {myTime.substring(11, 19)}</div>
      <div>
        my timezone is: {myAbb} | {myTimezone}
      </div>
      <br />
      <div>test</div>
    </div>
  );
}
