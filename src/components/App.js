import '../styles/App.css';
import Conjug from './Conjugator'
import ChoixTemps from "./ChoixTemps";
import { choix_1_verbe , listeVerbes } from "../scripts/conjuguer";
import { useState } from 'react'

function App() {  
  // tempsAffichés est un dictionnaire dont les clés sont les temps dispo. et les valeurs des booléens décidant de l'affichage
  const tempsParDefaut = {'indicatif_present' : true,'indicatif_imparfait':false,'indicatif_futur':false,'indicatif_passe_simple':false,'conditionnel_present':false,'subjontif_present':false,'subjontif_imparfait':false,'imperatif_present':false , 'passe_compose': false}
  const [tempsAffichés , updateTempsAffichés] = useState(tempsParDefaut)
  const [verbe, updateVerbe] = useState('aimer')
  const [modeApplication, updateModeApplication] = useState('Conjugueur')
  // const [temps, updateTemps] = useState('indicatif_present')
  const liste_des_verbes = listeVerbes()

  function handleVerbe(event) {
    // Verifie si le verbe est dans la liste des verbes sans tenir compte des espaces et majuscules
    let verbe = event.target.value.toLowerCase().trim()
    let index_verbe = liste_des_verbes.findIndex( (obj) => obj.infinitif === verbe )
    if (index_verbe !== -1) {
        updateVerbe(liste_des_verbes[index_verbe].infinitif)
    }
  }

  function handleModeApplication(event) {
    updateModeApplication(event.target.id)
  }

  return (    
    <div className="App">
      <header className="App-header">
        <p>
        🏗️ Appli. de conjugaison en cours de construction 🏗️
        </p>
        <div>
          <button id='Conjugueur' onClick={(event) => handleModeApplication(event)}> Conjugueur </button>
          <button id='Cours' onClick={(event) => handleModeApplication(event)}> Cours </button>
          <button id='Jeux' onClick={(event) => handleModeApplication(event)}> Jeux </button>
        </div>
      </header>
      {modeApplication === 'Conjugueur' ? 
      <div id='Conjugueur'>
        <div>      
          <button onClick={() => (updateVerbe(choix_1_verbe(listeVerbes()).infinitif))}  > Choisir un verbe aléatoire </button>
          <button onClick={() => (updateTempsAffichés({'indicatif_present' : true,'indicatif_imparfait':true,'indicatif_futur':true,'indicatif_passe_simple':true,'conditionnel_present':true,'subjontif_present':true,'subjontif_imparfait':true,'imperatif_present':true , 'passe_compose': true}))} > Tous </button>
          <input type="search" id="recherche-verbe" name="v" placeholder={verbe} onChange={(event) => handleVerbe(event)} />
        </div>
        {Object.entries(tempsAffichés).map( ([cle,valeur]) => ( <ChoixTemps temps={cle} tempsAffichés={tempsAffichés} updateTempsAffichés={updateTempsAffichés} key={cle}   />  ) )}        
        <div>
        {Object.entries(tempsAffichés).map( ([cle,valeur]) => (valeur ? <Conjug verbe={verbe} key={cle+':'+verbe} updateVerbe={updateVerbe} temps={cle} updateTempsAffichés = {updateTempsAffichés}/> : null ) )}
        </div> 
      </div>
      : null }
    </div>
  );
}

export default App;
