import React from "react";
import Image from 'next/image'
import styles from './card.module.css';
export default function card(props) {
    return (
        <main>
            <div className={styles.card}>
                <Image 
                    className={styles.image}
                    src={props.image}
                    alt={props.alt}
                    width={props.width}
                    height={props.height}
                />
                <h3>{props.title}</h3>
                <p>{props.summary}</p>
            </div>
        </main>
    )
};


