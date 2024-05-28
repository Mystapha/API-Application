import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Userlist from './components/Userlist';

function App() {
  const [users, setusers] = useState([]);
  useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setusers(res.data));
  }, [])
  console.log(users);
  return (
    <div className="App">
      <div className="user">
     <Userlist users={users}/>
     </div>
    </div>
  );
}

export default App;
