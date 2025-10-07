import styles from './description.module.css'
export const Description =()=>{
    return(
        <div className={styles.container}>
                <p className={styles.title}>Nous fournissons des services professionnels en développement logiciels</p>
                <p className={styles.description}>Nous sommes un groupe de développeurs talentueux et passionnés. Nous fabriquons à la main le code, validé par des tests et facile à maintenir, qui va au cœur de vos objectifs d’affaires, tout en respectant les délais.</p>
                <img className={styles.img} src="/lao.png"/>
        </div>
    )
}