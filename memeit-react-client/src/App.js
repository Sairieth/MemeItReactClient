import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBarFrame from './components/navigationBars/NavigationBarFrame';
import { useContext } from 'react';
import { userContext } from './context/UserProvider';
import Footer from './components/Footer'




function App() {
  const { user } = useContext(userContext);

  return (
    <div className="App">
      <NavigationBarFrame user={user} />
      <div className='tempBackground'>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
