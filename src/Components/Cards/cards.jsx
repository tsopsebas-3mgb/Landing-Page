import styles from './cards.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState} from "react";
export const Cards = ({indexx,setIndex,name,logo,more,activities})=>{
    const [fade,setFade]=useState(null);
    const [isMob,setIsMob]=useState(window.innerWidth<600);
    useEffect(() => {
        const resize=()=>{
            setIsMob(window.innerWidth<750)
        }
        window.addEventListener("resize",resize);
        return () => {
            window.removeEventListener("resize",resize);
        };
    }, []);
    const solve = (arr,forward) => {

        setFade(true)
        setTimeout(() => {
            setIndex((prev) => {
                const last = arr.length - 1;
                if (forward) {
                    setFade(false)
                    return prev === last ? 0 : prev + 1;
                } else {
                    setFade(false)
                    return prev === 0 ? last : prev - 1;
                }
            });
        },0)

    };
     return isMob ? (
        <div className={styles.super}>
            <div className={`${styles.container} ${fade? styles.in:styles.out}`}>
                <div className={`${styles.company} ${fade? styles.in:styles.out}`}>
                    <div className={styles.logo}>{logo}</div>
                    <div className={styles.name}>{name}</div>
                </div>
                <div className={styles.count}>
                    <div className={styles.subCount}>{more}</div>
                </div>
            </div>
            <div className={styles.keys}>
                <div className={styles.key}>
                    <FontAwesomeIcon className={styles.icon} onClick={() => solve(activities,false)} icon={faArrowLeft} style={{ color: "#1c1f4f", fontSize: "15px" }} />
                    <FontAwesomeIcon className={styles.icon} onClick={() => solve(activities,true)} icon={faArrowRight} style={{ color: "#1c1f4f", fontSize: "15px" }} />
                </div>
                <div className={styles.navs}>
                    {activities.map((obj, index) => (
                        <div className={`${styles.nav} ${index === indexx ? styles.blue : ""}`}></div>
                    ))}
                </div>
            </div>
        </div>
    ):(<div className={styles.super}>
         <div className={styles.bop}>
         {activities.map((obj, index) => (
             <div key={index} className={`${styles.container} ${fade? styles.in:styles.out}`}>
                 <div className={`${styles.company} ${fade? styles.in:styles.out}`}>
                     <div className={styles.logo}>{obj.icon}</div>
                     <div className={styles.name}>{obj.name}</div>
                 </div>
                 <div className={styles.count}>
                     <div className={styles.subCount}>{obj.tagline}</div>
                 </div>

             </div>
         ))}
     </div>
     </div>)
}