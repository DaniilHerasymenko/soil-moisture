"use client";
import Image from "next/image";
import classes from './main.module.css';

export default function Main(){
    let lastTime: String = '2025-04-19';
    let moisture: number = 73;
    let color: String = 'rgb(4,9,114)';
    function chart(){
        alert("U clicked on the button!");
    }
    return(
        <div className={classes.wrapper}>
            <div className={classes.data}>
                <h1 className={classes.header}>Дані про рослину</h1>
                <p>Останнє значення вологості було виміряно {lastTime} і було рівне <b>{moisture}%</b>.</p>
            </div>
                <Image
                    src="./best.jpg"
                    width={420}
                    height={420}
                    style={{
                        borderRadius: '50%',
                        border: `4px solid ${color}`
                    }}
                    alt="Photo of plant"
                />
            <div className={classes.plantInfo}>
                <b><p>Все чудово/Рослину необхідно полити!</p></b>
            </div>
            <button onClick={chart} className={classes.chart}>Графік вологості рослини за останній час<br/>(Натисніть, щоб побачити)</button>
        </div>
    )
}