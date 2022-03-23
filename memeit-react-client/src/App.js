import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBarFrame from './components/navigationBars/NavigationBarFrame';
import { useState } from 'react';
import Footer from './components/Footer'
import MemesByTag from './body/MemesByTag';



function App() {
  const [tag,setTag] = useState('Funny')

  return (
    <div className="App">
      <NavigationBarFrame tagSetter={(tag)=> setTag(tag)} />
      <MemesByTag tag={tag} />
      <Footer/>
    </div>
  );
}

export default App;
