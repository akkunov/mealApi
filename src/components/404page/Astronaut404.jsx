import React, { useEffect, useRef } from 'react';
import styles from './Astronaut404.module.css';
import {Link} from "react-router-dom";

const Astronaut404 = () => {
    const visorRef = useRef(null);
    const cordRef = useRef(null);

    useEffect(() => {
        // Drawing the visor
        const drawVisor = () => {
            const canvas = visorRef.current;
            const ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.moveTo(5, 45);
            ctx.bezierCurveTo(15, 64, 45, 64, 55, 45);
            ctx.lineTo(55, 20);
            ctx.bezierCurveTo(55, 15, 50, 10, 45, 10);
            ctx.lineTo(15, 10);
            ctx.bezierCurveTo(15, 10, 5, 10, 5, 20);
            ctx.lineTo(5, 45);
            ctx.fillStyle = '#2f3640';
            ctx.strokeStyle = '#f5f6fa';
            ctx.fill();
            ctx.stroke();
        };

        // Animating the cord
        const cordCanvas = cordRef.current;
        const ctx = cordCanvas.getContext('2d');
        let y1 = 160;
        let y2 = 100;
        let y3 = 100;
        let y1Forward = true;
        let y2Forward = false;
        let y3Forward = true;

        const animate = () => {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, cordCanvas.width, cordCanvas.height);
            ctx.beginPath();
            ctx.moveTo(130, 170);
            ctx.bezierCurveTo(250, y1, 345, y2, 400, y3);
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 8;
            ctx.stroke();
            if (y1 === 100) y1Forward = true;
            if (y1 === 300) y1Forward = false;
            if (y2 === 100) y2Forward = true;
            if (y2 === 310) y2Forward = false;
            if (y3 === 100) y3Forward = true;
            if (y3 === 317) y3Forward = false;
            y1Forward ? y1 += 1 : y1 -= 1;
            y2Forward ? y2 += 1 : y2 -= 1;
            y3Forward ? y3 += 1 : y3 -= 1;
        };

        drawVisor();
        animate();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.moon}></div>
            <div className={`${styles.moon__crater} ${styles.moon__crater1}`}></div>
            <div className={`${styles.moon__crater} ${styles.moon__crater2}`}></div>
            <div className={`${styles.moon__crater} ${styles.moon__crater3}`}></div>
            <div className={`${styles.star} ${styles.star1}`}></div>
            <div className={`${styles.star} ${styles.star2}`}></div>
            <div className={`${styles.star} ${styles.star3}`}></div>
            <div className={`${styles.star} ${styles.star4}`}></div>
            <div className={`${styles.star} ${styles.star5}`}></div>
            <div className={styles.error}>
                <div className={styles.error__title}>404</div>
                <div className={styles.error__subtitle}>Hmmm...</div>
                <div className={styles.error__description}>
                    It looks like one of the developers fell asleep
                </div>
                <button className={styles.error__button}>
                    <Link to={'/'}>
                        Back to main
                    </Link>

                </button>
            </div>
            <div className={styles.astronaut}>
                <div className={styles.astronaut__backpack}></div>
                <div className={styles.astronaut__body}></div>
                <div className={styles.astronaut__body__chest}></div>
                <div className={styles.astronaut__arm_left1}></div>
                <div className={styles.astronaut__arm_left2}></div>
                <div className={styles.astronaut__arm_right1}></div>
                <div className={styles.astronaut__arm_right2}></div>
                <div className={styles.astronaut__arm_thumb_left}></div>
                <div className={styles.astronaut__arm_thumb_right}></div>
                <div className={styles.astronaut__leg_left}></div>
                <div className={styles.astronaut__leg_right}></div>
                <div className={styles.astronaut__foot_left}></div>
                <div className={styles.astronaut__foot_right}></div>
                <div className={styles.astronaut__wrist_left}></div>
                <div className={styles.astronaut__wrist_right}></div>
                <div className={styles.astronaut__cord}>
                    <canvas ref={cordRef} height="500px" width="500px"></canvas>
                </div>
                <div className={styles.astronaut__head}>
                    <canvas ref={visorRef} width="60px" height="60px"></canvas>
                    <div className={styles.astronaut__head_visor_flare1}></div>
                    <div className={styles.astronaut__head_visor_flare2}></div>
                </div>
            </div>
        </div>
    );
};

export default Astronaut404;
