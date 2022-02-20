import conjugation from "../datas/conjugation-fr.json"
import verbs from "../datas/verbs-fr.json"

function Conjug() {
  for (let index = 0; index < 10; index++) {
    // Affiche les données
    const [infinitif,modele] = [verbs["verbs-fr"].v[index].i,verbs["verbs-fr"].v[index].t]
    console.log(infinitif,modele)
    // Déterminer l'index où couper le verbe en suivant de modèle 
    // Par exemple aim:er 
    const indexDeCoupe = modele.length - modele.indexOf(":") - 1
    const radical = infinitif.slice(-infinitif.length,-indexDeCoupe)
    console.log(infinitif,radical)
    // todo : Rechercher le modèle dans "conjugation" en fonction du temps et appliquer les bonnes terminaisons
  }  

    return(
         "test"
         )
}

export default Conjug