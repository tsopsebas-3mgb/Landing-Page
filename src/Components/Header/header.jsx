import styles from './header.module.css'
export const Header =()=>{
    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 200">
                    <rect x="20" y="20" rx="40" ry="40" width="600" height="160" fill="#ffffff"/>
                    <text
                        x="50"
                        y="140"
                        fontFamily="Varela Round, sans-serif"
                        fontSize="120"
                        fill="#ffffff"
                        stroke="#1c1f4f"
                        strokeWidth="10"
                    >
                        G-TECH
                    </text>
                </svg>
            </div>
            <div className={styles.navKeys}>
                <svg className={styles.svg}
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 640 640"
                     aria-label="Menu"
                     role="img"
                >
                    <path
                        fill="#1c1f4f"
                        fill="#ffffff"
                        stroke="#1c1f4f"
                        strokeWidth="40"
                        d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"
                    />
                </svg>
            </div>
        </div>
    )
}