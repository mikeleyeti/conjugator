import { listeVerbes,choix_1_verbe,conjuguer,conjuguerAvecPronom , pronoms} from "../scripts/conjuguer" 

function Conjug() {    

  const liste_verbes = listeVerbes();
  // console.log(liste_verbes)
  let verbe_alea = choix_1_verbe(liste_verbes)
  // console.log(verbe_alea)
  const verbe_conjugue = conjuguer(verbe_alea,"present")    
  const verbe_conjugue_avec_pronoms = conjuguerAvecPronom(pronoms,verbe_conjugue)

  // todo : Rechercher le modèle dans "conjugation" en fonction du temps et appliquer les bonnes terminaisons
    return(
         <div>
           <h2> Conjugaison de {verbe_alea.infinitif} </h2>
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