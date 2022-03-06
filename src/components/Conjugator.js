import { listeVerbes,conjuguer,conjuguerAvecPronom } from "../scripts/conjuguer" 
import '../styles/Conjugator.css';

// Temps disponibles :
// const liste_temps = ['indicatif_present','indicatif_imparfait','indicatif_futur','indicatif_passe_simple','conditionnel_present','subjontif_present','subjontif_imparfait','imperatif_present' ]

function Conjug({verbe , updateVerbe , temps , updateTempsAffiché}) {    

  function affichageTemps(tempsBrut) {
    // Affichage en français du temps utilisé
    let affichage
    if (tempsBrut === "indicatif_present") {
      affichage = "Présent de l'indicatif"
    } else if (tempsBrut === "indicatif_imparfait") {
      affichage = "Imparfait de l'indicatif"
    } else if (tempsBrut === "indicatif_futur") {
      affichage = "Futur de l'indicatif"
    } else if (tempsBrut === "indicatif_passe_simple") {
      affichage = "Passé simple de l'indicatif"
    } else if (tempsBrut === "conditionnel_present") {
      affichage = "Présent du conditionnel"
    } else if (tempsBrut === "subjontif_present") {
      affichage = "Présent du subjonctif"
    } else if (tempsBrut === "subjontif_imparfait") {
      affichage = "Imparfait du subjonctif"
    } else if (tempsBrut === "imperatif_present") {
      affichage = "Présent de l'impératif"
    }
    return affichage  
  }

  const liste_verbes = listeVerbes();
  // Détermine l'index du verbe dans la liste des "objets" verbes
  let index_verbe = liste_verbes.findIndex( (obj) => obj.infinitif === verbe )
  verbe = liste_verbes[index_verbe]
  // let verbe_alea = choix_1_verbe(liste_verbes)
  // console.log(verbe_alea)
  const verbe_conjugue = conjuguer(verbe,temps)    
  const verbe_conjugue_avec_pronoms = conjuguerAvecPronom(verbe_conjugue)
  // todo : Rechercher le modèle dans "conjugation" en fonction du temps et appliquer les bonnes terminaisons
    return(
         <div className="Conjugator-bloc">
           <h2> {affichageTemps(temps)} </h2>
           <ul>
             {verbe_conjugue_avec_pronoms.map( (verbe) => (
              <li key={verbe}> { verbe } </li>
             )              
             )}
           </ul>
         </div>
         )
}

export default Conjug