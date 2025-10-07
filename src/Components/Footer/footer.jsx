import  styles from './footer.module.css'
import {faGlobe,
    faMobileScreenButton,
    faAnglesUp} from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export const Footer = ()=>{
    return(
        <div className={styles.container}>
            <div className={`${styles.b} ${styles.b1}`}></div>
            <div className={`${styles.b} ${styles.b2}`}></div>
            <div className={`${styles.b} ${styles.b3}`}></div>
            <div className={`${styles.b} ${styles.b4}`}></div>
            <div className={`${styles.b} ${styles.b5}`}></div>
            <div className={styles.text}>
                <p className={styles.p1}>Apprenons à nous connaître ! Nous parlons quelques langues</p>
                <p className={styles.p2}>Quels que soient vos besoins, nous sommes impatients de vous entendre !</p>
            </div>
            <div className={styles.email}>CONTACTEZ-NOUS PAR EMAIL</div>

            <div className={styles.end}>
                <div className={styles.contact}>
                    <div className={styles.position}><FontAwesomeIcon className={styles.icon} fontSize={20} icon={faGlobe} style={{ color: "#fff" }} /><p>DOUALA-CAMEROUN</p></div>
                    <div className={styles.number}><FontAwesomeIcon className={styles.icon} fontSize={20} icon={faMobileScreenButton} style={{ color: "#fff" }} /><p>+237 655 590 559</p></div>
                </div>
                <FontAwesomeIcon icon={faLinkedinIn} className={styles.in} style={{ color: "#fff" }} fontSize={25} />
                <FontAwesomeIcon icon={faAnglesUp}  style={{"--fa-primary-color": "#ffffff", "--fa-secondary-color": "rgba(250,6,250,0.35)",}} fontSize={35} />            </div>
                <footer className={styles.footer}>
                    <p className={styles.footer1}>© 2020 - 2022 | LAO - ALL RIGHTS RESERVED</p>
                    <p className={styles.footer2}>LAO SARL - CAP SOC. 900.000 XAF I.V. - VAT N.: M052014445311D</p>
                </footer>
        </div>
    )
}