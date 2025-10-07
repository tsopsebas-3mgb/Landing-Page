import styles from './choose.module.css'
export const Choose = ()=>{
return(
    <div className={styles.container}>
        <p  className={styles.search}>Vous cherchez une equipe ?</p>
        <p className={styles.what}>Peu importe la taille du projet , nos équipes sont disponibles pour vous accompagner</p>
        <p className={styles.line}>Nous sommes une équipe de passionnés animés par un seul et même objectif : élaborer des solutions innovantes et obtenir des résultats inégalés.</p>
    </div>
)
}