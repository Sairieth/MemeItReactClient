import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBarFrame from './components/navigationBars/NavigationBarFrame';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { userContext } from './context/UserProvider';




function App() {
  const { setUser } = useContext(userContext)

  function changeUser() {
    const userTypes = ['baseUser', 'moderator', 'default'];
    const userType = userTypes[Math.floor(Math.random() * 3)];
    console.log(userType);
    setUser({ role: userType })
  }

  return (
    <div className="App">
      <NavigationBarFrame />
      <Button onClick={changeUser}></Button>
    </div>
  );
}

export default App;
