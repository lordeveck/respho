import { useEffect, useState } from 'react';
import './GameStatsModal.css';

function GameStatsModal(props) {
    const [remainingNewDay, setRemainingNewDay] = useState('');

    useEffect(() => {
        let interval;

        timer();
        interval = setInterval(() => {
            timer();
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    const timer = () => {
        const date = new Date();

        let leftHour = 23 - date.getHours();
        let leftMinute = 59 - date.getMinutes();
        let leftSeconds = 59 - date.getSeconds();

        leftHour = leftHour < 10 ? `0${leftHour}` : leftHour;
        leftMinute = leftMinute < 10 ? `0${leftMinute}` : leftMinute;
        leftSeconds = leftSeconds < 10 ? `0${leftSeconds}` : leftSeconds;

        setRemainingNewDay(`${leftHour}:${leftMinute}:${leftSeconds}`);
    };

    return (
        <div className="modal-content">
            <div className="modal-title">
                <p>
                    <strong>Oyun Bitti!</strong>
                </p>
                <hr></hr>
            </div>
            <div className="description">
                <div style={{ width: "300px" }}>
                    <div>
                        <p>Doğru Cevap: {props.question.answers.join(" / ")}</p>
                        <img src={props.question.img} width="235px" height="350px" alt={props.question.answers[0]}></img>
                    </div>

                    <div>
                        <p>Yönetmen: {props.question.director}</p>

                        <p>Oyuncular: {props.question.topCast.join(", ")}</p>

                        <p>Fragman:
                            <a className='link' href={props.question.trailer}>YouTube</a>
                        </p>

                        <p>Resim Kaynağı:
                            <a className='link' href={props.question.imgFrom}>IMDB</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <div className='timer'>
                    <p>Sonraki Respho</p>
                    <p style={{ fontSize: '24px', marginTop: '0px' }}>{remainingNewDay}</p>
                </div>
                <div>
                    <button id="share" className="game-button">Paylaş</button>
                </div>
            </div >
        </div >
    );
}

export default GameStatsModal;
