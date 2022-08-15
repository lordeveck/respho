import GameStatsModal from './GameStatsModal/GameStatsModal';
import InfoModal from './InfoModal/InfoModal';
import './MainModal.css';

function MainModal(props) {

    const startGame = () => {
        props.onGameStart();
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                {
                    props.modalType === 'infoModal' ?
                        <InfoModal onGameStart={startGame} />
                        :
                        <GameStatsModal question={props.question} />
                }
            </div>
        </div >
    );
}

export default MainModal;
