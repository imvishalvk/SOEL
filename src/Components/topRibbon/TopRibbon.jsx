import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faSquareInstagram, faSquareLinkedin, faSquareXTwitter, faSquareYoutube } from "@fortawesome/free-brands-svg-icons";
import styles from "./TopRibbon.module.css";

function TopRibbon() {
    return (
        <div className={styles.topribbon}>
            <div className={styles.left}>
                <a href="info@soel.co.in">info@soel.co.in</a>
                <a href="tel:+917974010211">📞 +91 79740 10211</a>
            </div>
            <div className={styles.right}>
                <a href="https://www.facebook.com/soelglobal" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSquareFacebook} size="2x" />
                </a>
                <a href="https://www.instagram.com/soelglobal/">
                    <FontAwesomeIcon icon={faSquareInstagram} size='2x' />
                </a>
                <a href="https://www.linkedin.com/company/soelglobal" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSquareLinkedin} size="2x" />
                </a>
                <a href="https://x.com/SoELglobal" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSquareXTwitter} size="2x" />
                </a>
                <a href="https://www.youtube.com/@soelglobal" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSquareYoutube} size="2x" />
                </a>
            </div>
        </div>
    )
}

export default TopRibbon
