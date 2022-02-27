import conjugation from "../datas/conjugation-fr.json"
import verbs from "../datas/verbs-fr.json"

function Conjug() {

  function listeVerbes() {
    // Renvoie la liste des verbes du fichier "verbs-fr.json"
    // Chaque élément de la liste est un objet constitué des clés
    // infinitifs et modèles
    const nbVerbes = verbs["verbs-fr"].v.length
    // 7015 verbes au début du developpement
    let liste_verbes = []
    for (let index = 0; index < nbVerbes ; index++) {
            const infinitif = verbs["verbs-fr"].v[index].i ;
            const modele = verbs["verbs-fr"].v[index].t ;
            let verbe = {"infinitif":infinitif,"modele":modele};            
            liste_verbes.push(verbe)
              }
    return liste_verbes
  }


  function choix_1_verbe(liste_verbes) {
    return liste_verbes[Math.floor(Math.random()*liste_verbes.length)];
  }

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

  function conjuguer(verbe,temps) {
    // Renvoir la liste des verbes conjugués au temps passé en paramètre

    // Déterminer l'index où couper le verbe en suivant de modèle 
    // Par exemple aim:er 
    const indexDeCoupe = verbe.modele.length - verbe.modele.indexOf(":") - 1
    const radical = verbe.infinitif.slice(-verbe.infinitif.length,-indexDeCoupe)

  // Cherche le modèle de conjugaison
    let indexConjugation = chercherTemplate(verbe.modele)
    let tabConjug = conjugation["conjugation-fr"].template[indexConjugation].indicative.present.p
    let  verbe_conjugue = []
    for (let index = 0; index < tabConjug.length; index++) {
      const terminaison = tabConjug[index].i[0];
      verbe_conjugue.push(radical + terminaison)
    }    
    // Ajoute la premiere personne en double (présent de l'indicatif je = tu pour certains verbes)
    // return verbe_conjugue.length === 6 ?  verbe_conjugue : verbe_conjugue[0].concat(verbe_conjugue)
    return verbe_conjugue
  }



  function conjuguerAvecPronom(pronoms,verbe_conjugue) {
    const appostrophe = ['a','e','i','o','u','y','h','é','è','î','û','ô']
    let verbes_avec_pronoms = []
    appostrophe.includes(verbe_conjugue[0][0]) ? verbes_avec_pronoms.push("J'" + verbe_conjugue[0]) : verbes_avec_pronoms.push("Je" + ' ' + verbe_conjugue[0])
    for (let index = 1; index < pronoms.length; index++) {
      const element = pronoms[index] + ' ' + verbe_conjugue[index] ;
      verbes_avec_pronoms.push(element)
    }
    return verbes_avec_pronoms
  }

  const liste_verbes = listeVerbes();
  // console.log(liste_verbes)
  let verbe_alea = choix_1_verbe(liste_verbes)
  console.log(verbe_alea)
  const verbe_conjugue = conjuguer(verbe_alea,"present")  
  const pronoms = ['Je','Tu','Elle','Nous','Vous','Elles']
  const verbe_conjugue_avec_pronoms = conjuguerAvecPronom(pronoms,verbe_conjugue)
  console.log(verbe_conjugue_avec_pronoms)

  // todo : Rechercher le modèle dans "conjugation" en fonction du temps et appliquer les bonnes terminaisons
    return(
         "test"
         )
}

export default Conjug