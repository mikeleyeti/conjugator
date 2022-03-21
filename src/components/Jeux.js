import { useState } from 'react';
import '../styles/Jeux.css';
import gear from '../assets/gear-fill.svg'
import  Chrono  from "./Chrono";


function Jeux() {
    // Fonction qui suivant le mode choisi renvoit un composant "Jeux"
    // mode 1 : 1 temps => conjuguer un verbe à ce temps
    
    const [mode, updateMode] = useState(1)
    const [parametres, updateParametres] = useState(false)
    
    function handleClicEngrenage(event){
        !parametres ? updateParametres(true) :  updateParametres(false)
    }
    
    return (
    <div id='jeux'>  
        <Chrono tempsTotal="5" />
        <header id='choixMode'> <div onClick={() => handleClicEngrenage()} > <img  id='engrenage' src={gear} alt="Bootstrap" width="32" height="32"></img> </div> Boutons choix mode </header>
        <div id='question'> Question </div>
        <div id='reponse'> Réponse </div>
        {parametres ?<aside id='parametres'> Paramètres </aside> : null}
    </div>
        )
}

export default Jeux