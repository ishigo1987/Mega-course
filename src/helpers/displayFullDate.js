module.exports = ()=>{
    const fullDate = new Date();
    // const fullDateGetHour = fullDate.getHours();
    // const fullDateGetMin = fullDate.getMinutes();
    const dateFullJour = fullDate.getDate();
    const dateFullAnnee = fullDate.getFullYear();
    const jourFullSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const moisFullAnnee = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
    const js = jourFullSemaine[ fullDate.getDay() ];
    const ma = moisFullAnnee[ fullDate.getMonth() ];
    return `${js} ${dateFullJour} ${ma} ${dateFullAnnee}`;
};