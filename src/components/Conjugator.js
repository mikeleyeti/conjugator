import conjugation from "../datas/conjugation-fr.json"
import verbs from "../datas/verbs-fr.json"

function Conjug() {

  function chercherTemplate(verbe) {
    // Renvoie l'index du modèle `verbe` dans le tableau de conjugation
    let v = ""
    let index = 0
    while (v !== verbe) {
      v = conjugation["conjugation-fr"].template[index]._name
      index++
    }
    return index-1
  }

  for (let index = 0; index < 10; index++) {
    
    
    // Affiche les données
    const [infinitif,modele] = [verbs["verbs-fr"].v[index].i,verbs["verbs-fr"].v[index].t]
    console.log(infinitif,modele)
     // Déterminer l'index où couper le verbe en suivant de modèle 
    // Par exemple aim:er 
    const indexDeCoupe = modele.length - modele.indexOf(":") - 1
    const radical = infinitif.slice(-infinitif.length,-indexDeCoupe)
    console.log(infinitif,radical)
    // Cherche le modèle de conjugaison
    let indexConjugation = chercherTemplate(modele)
    let tabConjug = conjugation["conjugation-fr"].template[indexConjugation].indicative.present.p
    for (let index = 0; index < tabConjug.length; index++) {
      const terminaison = tabConjug[index].i[0];
      console.log(radical + terminaison)

    }     
    // todo : Rechercher le modèle dans "conjugation" en fonction du temps et appliquer les bonnes terminaisons
  }  
  

  

  
    return(
         "test"
         )
}

export default Conjug