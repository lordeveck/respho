import './GameStatsModal.css';

function GameStatsModal(props) {

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
                    <p>Doğru Cevap: {props.question.answers.join(" / ")}</p>
                    <img src={props.question.img} width="235px" height="350px" alt={props.question.answers[0]}></img>
                    <p>Fragman: {props.question.trailer}</p>
                    <p>Yönetmen: {props.question.director}</p>
                    <p>Oyuncular: {props.question.topCast.join(", ")}</p>
                    <p>Resim Kaynağı: {props.question.imgFrom}</p>
                </div>
            </div>
        </div >
    );
}

export default GameStatsModal;
