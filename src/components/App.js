import '../styles/App.css';
import Conjug from './Conjugator'
import { useState } from 'react'

function App() {
  const [verbe, updateVerbe] = useState('aimer')
  // tempsAffichés est un dictionnaire dont les clés sont les temps dispo. et les valeurs des booléens décidant de l'affichage
  const [tempsAffichés , updateTempsAffichés] = useState({'indicatif_present' : true,'indicatif_imparfait':false,'indicatif_futur':false,'indicatif_passe_simple':false,'conditionnel_present':false,'subjontif_present':false,'subjontif_imparfait':false,'imperatif_present':false})
  // const [temps, updateTemps] = useState('indicatif_present')

  return (
    <div className="App">
      <header className="App-header">
        <p>
        🏗️ Appli. de conjugaison en cours de construction 🏗️
        </p>
      </header>
      {Object.entries(tempsAffichés).map( ([cle,valeur]) => (<Conjug verbe={verbe} key={cle+':'+verbe} updateVerbe={updateVerbe} temps={cle} updateTempsAffichés = {updateTempsAffichés}/>) )}
      {/* <Conjug verbe="être"  updateVerbe={updateVerbe} temps={temps} updateTemps = {updateTemps}/> */}
    </div>
  );
}

export default App;
