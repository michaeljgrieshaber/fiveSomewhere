import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

const allTimezones = "http://worldtimeapi.org/api/timezone/";
const urlMyTime = "http://worldtimeapi.org/api/ip";

function App() {
  const [myTime, setmyTime] = useState("");
  const [myAbb, setmyAbb] = useState("");
  const [myTimezone, setmyTimezone] = useState("");
  const [allTime, setAllTime] = useState("");

  //get my time
  useEffect(() => {
    async function myTime() {
      try {
        const res = await axios.get(urlMyTime);

        setmyTime(res.data.datetime);
        setmyAbb(res.data.abbreviation);
        setmyTimezone(res.data.timezone);
      } catch (error) {
        console.log(error);
      }
    }
    myTime();
  }, []);

  //get all timezone names
  useEffect(() => {
    async function allTime() {
      try {
        const res = await axios.get(allTimezones);
        setAllTime(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    allTime();
  }, []);

  useEffect(() => {
    
    for (let i = 0; i < allTime.length; i++) {
      let allZonesURL = allTimezones + allTime[i];

      async function timeTime() {
        try {
          const res = await axios.get(allZonesURL);
          let test = res.data;
          console.log(test);
        } catch (error) {
          console.log(error);
        }
      }
      timeTime();
    }
  }, []);

  return (
    <div className="App">
      <div>my time is: {myTime.substring(11, 19)}</div>
      <div>
        my timezone is: {myAbb} | {myTimezone}
      </div>
    </div>
  );
}

export default App;
