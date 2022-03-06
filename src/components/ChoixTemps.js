import { affichageTemps } from "../scripts/conjuguer";

function ChoixTemps({ temps, tempsAffichés, updateTempsAffichés }) {
  const updateTemps = () => {
    let tempsAffichésMAJ = {};
    for (const key in tempsAffichés) {
      if (Object.hasOwnProperty.call(tempsAffichés, key)) {
        const element = tempsAffichés[key];
        if (key === temps) {
          tempsAffichésMAJ[key] = !element;
        } else {
          tempsAffichésMAJ[key] = element;
        }
      }
    }
    updateTempsAffichés(tempsAffichésMAJ);
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={tempsAffichés[temps]}
        onChange={updateTemps}
      />
      {affichageTemps(temps)}
    </label>
  );
}

export default ChoixTemps;
