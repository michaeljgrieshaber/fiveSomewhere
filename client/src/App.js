import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

const allTimezones = "http://worldtimeapi.org/api/timezone/";
const urlMyTime = "http://worldtimeapi.org/api/ip";

let allArray = [];

function App() {
  const [myTime, setmyTime] = useState("");
  const [myAbb, setmyAbb] = useState("");
  const [myTimezone, setmyTimezone] = useState("");

  const [allTimeNames, setAllTimeNames] = useState("");
  const [everything, setEverything] = useState([]);

  //get my time
  useEffect(() => {
    async function myInfo() {
      try {
        const res = await axios.get(urlMyTime);

        setmyTime(res.data.datetime);
        setmyAbb(res.data.abbreviation);
        setmyTimezone(res.data.timezone);
      } catch (error) {
        console.log(error);
      }
    }
    myInfo();
  }, []);

  //get all timezone names
  useEffect(() => {
    async function allNames() {
      try {
        const res = await axios.get(allTimezones);
        setAllTimeNames(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    allNames();
  }, []);

  useEffect(() => {
    for (let i = 0; i < allTimeNames.length; i++) {
      let allZonesURL = allTimezones + allTimeNames[i];

      async function timeTime() {
        try {
          const res = await axios.get(allZonesURL);
          let test = res.data;
          allArray.push(test);
          // console.log(test);
          // setEverything(res.data.datetime);
        } catch (error) {
          console.log(error);
        }
      }
      timeTime();
    }
  }, [allTimeNames]);

  console.log(allArray);

  return (
    <div className="App">
      <div>my time is: {myTime.substring(11, 19)}</div>
      <div>
        my timezone is: {myAbb} | {myTimezone}
      </div>
      <br />
      <div>test</div>
    </div>
  );
}

export default App;
