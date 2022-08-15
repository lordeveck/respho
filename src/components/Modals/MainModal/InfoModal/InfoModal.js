import './InfoModal.css';

function InfoModal(props) {

    const startGame = () => {
        props.onGameStart();
    };

    return (
        <div className="modal-content">
            <div className="modal-title">
                <p>
                    <strong>Hoş geldin!</strong>
                </p>
                <hr></hr>
            </div>
            <div className="description">
                <div>
                    <p>
                        <strong>Respho Nedir?</strong>
                    </p>
                    <p> Respho, çözünürlüğü ile oynanmış görselleri tahmin ettiğin bir oyundur.</p>
                    <hr></hr>
                </div>
                <div>
                    <p>
                        <strong>Nasıl Oynanır?</strong>
                    </p>
                    <p style={{ marginLeft: '15px' }}>
                        Her gün yenilenen görseller, düşük çözünürlük ile karşına gelir.
                    </p>
                    <p style={{ marginLeft: '15px' }}>
                        Yaptığın her yanlış tahminde veya netleştir butonuna basman ile birlikte görsel daha çok netleşecektir.
                    </p>
                    <p style={{ marginLeft: '15px' }}>
                        6 hakkını bitirmeden, en kısa zamanda doğru tahmini yapmaya çalış!
                    </p>
                    <hr></hr>
                </div>
            </div>
            <div className="modal-footer">
                <div className="game-buttons">
                    <button className="game-button" onClick={startGame}>Hemen Oyna!</button>
                </div>
            </div>
        </div >
    );
}

export default InfoModal;
