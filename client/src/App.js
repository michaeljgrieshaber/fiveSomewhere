import './App.css';
import axios from 'axios'
import { useEffect,useState } from 'react'


const URL = 'http://worldtimeapi.org/api/ip'

function App() {
  const [yourTime, setYourTime] = useState('')
  const [yourAbb, setYourAbb] = useState('')
  const [yourTimezone, setYourTimezone] = useState('')

  
useEffect(() => {
  
  async function allTime() {
    try {
      const res = await axios.get(URL);
      setYourTime(res.data.datetime)
      setYourAbb(res.data.abbreviation)
      setYourTimezone(res.data.timezone)
      
      
    } catch (error) {
      console.log(error);
    }
  }
  allTime()
},[])



  return (
    <div className="App">
      <div>Hello</div>
      <div>Your time is: {yourTime.substring(11,19)}</div>
      <div>Your timezone is: {yourAbb} | {yourTimezone}</div>
      
    </div>
  );
}

export default App;
