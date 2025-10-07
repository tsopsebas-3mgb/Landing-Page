import styles from './tech.module.css'
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";

export const Technologies = () => {
    const [index,setIndex] = useState(0);
    const change = (tof) =>{
        tof? setIndex(prev => prev+1):setIndex(prev=>prev-1);
    }
    const swipeItems = [
        {
            title: "Locko ERA Album",
            description: "Discover & Purchase Locko's latest album.",
            link: "https://locko.link",
            backgroundImage: "/l.png",
            foregroundImage: "/l1.jpg"
        },
        {
            title: "Fret Logistique",
            description: "Online platform for parcel logistics.",
            link: "https://fretlogistique.com",
            backgroundImage: "/f.png",
            foregroundImage: "/f1.png"
        },
        {
            title: "Dingo",
            description: "Platform for buying and sending bulk SMS.",
            link: "https://dingo.cm",
            backgroundImage: "/o.png",
            foregroundImage: "/o1.png"
        },
        {
            title: "Planugo",
            description: "Social travel network for travel enthusiasts.",
            link: "https://planugo.com",
            backgroundImage: "/y.png",
            foregroundImage: "/y1.png"
        },
        {
            title: "Docta",
            description: "Online health platform.",
            link: "https://docta.cm",
            backgroundImage: "/w.png",
            foregroundImage: "/w1.png"
        },
        {
            title: "Viwanda",
            description: "Online sales management tool.",
            link: "https://viwanda.cm",
            backgroundImage: "/i.png",
            foregroundImage: "/i1.png"
        }
    ];
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <p className={styles.heading}>Des résultats incroyables de collaborations fantastiques</p>
            </div>
                <div className={styles.big}>
                    <img className={styles.imgb} src={swipeItems[index].backgroundImage}/>
                    <div className={styles.small} >
                        <p className={styles.h2}>{swipeItems[index].title}</p>
                        <img className={styles.imgs}  src={swipeItems[index].foregroundImage}/>
                        <p className={styles.p}>{swipeItems[index].description}</p>
                        <div className={styles.link}>
                            <a href={swipeItems[index].link}>Visitez</a><FontAwesomeIcon className={styles.i} icon={faArrowRight} style={{ color: "#fff", fontSize: "15px" }} />
                        </div>
                    </div>
            </div>
            <div className={styles.keys}>
                <div className={styles.key}>
                    <FontAwesomeIcon className={styles.icon} onClick={()=>change(0)}  icon={faArrowLeft} style={{ color: "rgb(86, 177, 166)", fontSize: "15px" }} />
                    <FontAwesomeIcon className={styles.icon} onClick={()=>change(1)}  icon={faArrowRight} style={{ color: "rgb(86, 177, 166)", fontSize: "15px" }} />
                </div>
                <div className={styles.navs}>
                    {swipeItems.map((obj, indexx) => (
                        <div key={indexx} className={`${styles.nav} ${indexx === index ? styles.blue : ""}`}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}