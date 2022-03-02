import '../styles/App.css';
import Conjug from './Conjugator'
import { useState } from 'react'

function App() {
  const [verbe, updateVerbe] = useState('aimer')
  const [temps, updateTemps] = useState('indicatif_present')

  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
        🏗️ Appli. de conjugaison en cours de construction 🏗️
        </p>
      </header> */}
      <Conjug verbe={verbe} updateVerbe={updateVerbe} temps={temps} updateTemps = {updateTemps}/>
      <Conjug verbe="danser" updateVerbe={updateVerbe} temps={temps} updateTemps = {updateTemps}/>
    </div>
  );
}

export default App;
