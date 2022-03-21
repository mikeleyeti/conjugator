import { useState, useEffect } from 'react';

function Chrono(tempsTotal) {
    // Génère un compte à rebour de durée `tempsTotal`
    // tempsTotal = parseInt(tempsTotal)
    tempsTotal = parseInt(tempsTotal.tempsTotal)
    const [counter, setCounter] = useState(tempsTotal);

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    useEffect(() => {
        counter === 0 && setCounter("Fin");
    }, [counter]);

    return (
        <div id='chrono'>
            <p> {counter} </p>
        </div>
    )
}

export default Chrono