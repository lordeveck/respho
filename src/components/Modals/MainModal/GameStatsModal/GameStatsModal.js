import { useContext, useEffect, useState } from 'react';
import IsMobileContext from '../../../../context/IsMobile';
import getGameStatsText from '../../../../helpers/getGameStatsText';
import './GameStatsModal.css';
import toastr from 'toastr';
import { useNavigate } from 'react-router-dom';

function GameStatsModal(props) {
    const navigate = useNavigate();

    const { isMobile } = useContext(IsMobileContext);

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

    const shareGameStats = () => {
        const { gameStats, category } = props;

        const text = getGameStatsText(gameStats, category);

        if ((navigator.share) && isMobile) {
            navigator.share({
                title: 'Respho Sonuç',
                text,
            });
        } else {
            navigator.clipboard.writeText(text);
            toastr.info('Kopyalandı.')
        }
    };

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

    const goToHomePage = () => {
        navigate('/respho');
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
                <div className='game-stats-description'>
                    <div className='answer-img-div'>
                        <img className="answer-img" src={props.question.img} alt={props.question.answers[0]}></img>
                    </div>

                    <div className='daily-question-answer'>
                        <p>Cevap: {props.question.answers[0]}</p>

                        {
                            props.question.descriptions.map((desc, i) => {
                                if (desc.isLink) {
                                    return <p key={i}>{desc.name}:
                                        <a className='link' href={desc.value} target='_blank' rel="noreferrer">&nbsp; {desc.brand}</a>
                                    </p>
                                }

                                return <p key={i}>{desc.name}: {desc.value}</p>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <div className='timer'>
                    <span>Sonraki Respho</span>
                    <span style={{ fontSize: '24px', marginTop: '0px' }}>{remainingNewDay}</span>
                </div>
                <div className='share-area'>
                    <button id="share" className="game-button wide" onClick={shareGameStats}>PAYLAŞ</button>
                    <button id="share" className="game-button wide" style={{ backgroundColor: '#393939' }} onClick={goToHomePage}>ANA SAYFA</button>
                </div>
            </div >
        </div >
    );
}

export default GameStatsModal;
