import styles from './services.module.css'
import {Cards} from "../Cards/cards.jsx";
import {Domains} from "../Domains/domains.jsx";
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUniversity,
    faPlaneDeparture,
    faHeartbeat,
    faGraduationCap,
    faTruck,
    faVideo,
    faUsers,
    faEllipsisH,
    faGlobe,
    faMobileScreenButton,
    faVial,
    faPalette,
    faPuzzlePiece,
    faRocket,
    faPlug

} from '@fortawesome/free-solid-svg-icons';
export const Services = ()=>{
    const activities = [
        {
            name: "Banking",
            icon: <FontAwesomeIcon icon={faUniversity} style={{ color: "#ffffff" }} />,
            tagline: "+1"
        },
        {
            name: "Travel",
            icon: <FontAwesomeIcon icon={faPlaneDeparture} style={{ color: "#ffffff" }} />,
            tagline: "+2"
        },
        {
            name: "Health",
            icon: <FontAwesomeIcon icon={faHeartbeat} style={{ color: "#ffffff" }} />,
            tagline: "+3"
        },
        {
            name: "Education",
            icon: <FontAwesomeIcon icon={faGraduationCap} style={{ color: "#ffffff" }} />,
            tagline: "+4"
        },
        {
            name: "Logistics",
            icon: <FontAwesomeIcon icon={faTruck} style={{ color: "#ffffff" }} />,
            tagline: "+5"
        },
        {
            name: "Media",
            icon: <FontAwesomeIcon icon={faVideo} style={{ color: "#ffffff" }} />,
            tagline: "+6"
        },
        {
            name: "Human R",
            icon: <FontAwesomeIcon icon={faUsers} style={{ color: "#ffffff" }} />,
            tagline: "+7"
        },
        {
            name: "Others",
            icon: <FontAwesomeIcon icon={faEllipsisH} style={{ color: "#ffffff" }} />,
            tagline: "+8"
        }
    ];
    const laoServices = [
        {
            icon: <FontAwesomeIcon fontSize={25} icon={faGlobe} style={{ color: "#000" }} />,
            title: "Web Development",
            description: "Custom websites and web applications tailored to business needs, focusing on performance, scalability, and user experience."
        },
        {
            icon: <FontAwesomeIcon fontSize={25} icon={faMobileScreenButton} style={{ color: "#000" }} />,
            title: "Mobile Development",
            description: "Native and cross-platform mobile apps for Android and iOS, designed to be intuitive and responsive."
        },
        {
            icon: <FontAwesomeIcon fontSize={25} icon={faVial} style={{ color: "#000" }} />,
            title: "Software Testing",
            description: "Manual and automated testing services to ensure software reliability, security, and usability."
        },
        {
            icon: <FontAwesomeIcon fontSize={25} icon={faPalette} style={{ color: "#000" }} />,
            title: "UX/UI Design",
            description: "Designing user interfaces and experiences that are both functional and visually appealing, enhancing user engagement."
        },
        {
            icon: <FontAwesomeIcon fontSize={25} icon={faPuzzlePiece} style={{ color: "#000" }} />,
            title: "ERP Development",
            description: "Building enterprise resource planning systems to streamline operations, manage resources, and improve productivity."
        },
        {
            icon: <FontAwesomeIcon fontSize={25} icon={faRocket} style={{ color: "#000" }} />,
            title: "MVP Development",
            description: "Helping startups and innovators launch minimum viable products quickly to test market fit and gather feedback."
        },
        {
            icon: <FontAwesomeIcon fontSize={25} icon={faPlug} style={{ color: "#000" }} />,
            title: "API Integration",
            description: "Connecting applications with third-party services and platforms to extend functionality and improve interoperability."
        }
    ];
    const [index,setIndex]=useState(2)
    const [indexC,setIndexC]=useState(2)
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.heading}>
                    <div className={styles.bar}></div>
                    <p className={styles.p}>Que faisons-nous ?</p>
                    <p className={styles.h2}>Secteurs d’activités</p>
                </div>
                <div className={styles.description}>Nous aidons les entreprises dans différents secteurs à résoudre des problèmes complexes grâce à des solutions technologiques. Nous nous appuyons sur nos connaissances sectorielles pour élaborer des solutions sur mesure répondant aux besoins uniques de chaque client.</div>
            </div>
            <div className={styles.activities}>
                <Cards indexx={index} setIndex={setIndex} activities={activities} name={activities[index].name} logo={activities[index].icon} more={activities[index].tagline} />
            </div>
            <div className={styles.header}>
                <div className={styles.heading}>
                    <p className={styles.h2}>Nos Services</p>
                </div>
                <div className={styles.description}>Nous créons des solutions web et mobiles uniques pour les entreprises et les startups. Nous avons de l'expérience dans les médias , le divertissement, la médecine, le secteur public, la banque, et plus encore.</div>
            </div>
            <div className={styles.fields}>
                <div className={styles.effectifs}>
                    <div className={styles.effectif}>
                        <div className={styles.fig}>+10</div>
                        <div className={styles.fd}>ingenieurs</div>
                    </div>
                    <div className={styles.effectif}>
                        <div className={styles.fig}>+14</div>
                        <div className={styles.fd}>projets</div>
                    </div>
                </div>
                <div className={styles.domains}>
                    <Domains setIndexC={setIndexC} activities={laoServices} indexx={indexC} logo={laoServices[indexC].icon} more={laoServices[indexC].description} name={laoServices[indexC].title} />
                </div>
            </div>
            <div className={styles.footer}>
                <p>Nous vous accompagnons vers la croissance de votre entreprise ! Parlons-en!
                </p>
                <div className={styles.accroche}>DEVELOPEZ VOTRE ENTREPRISE</div>
            </div>
        </div>
    )
}