import { useEffect, useState } from 'react';
import AnswerInputArea from '../AnswerInputArea/AnswerInputArea';
import AnswerArea from '../AnswersArea/AnswerArea';
import DailyImage from '../DailyImage/DailyImage';
import Header from '../Header/Header';
import './Main.css';
import questions from '../../constants/questions';
import MainModal from '../Modals/MainModal/MainModal';

function Main() {
    const [answers, setAnswers] = useState([]);
    const [question, setQuestion] = useState({});
    const [mainModal, setMainModal] = useState({ show: true, type: 'infoModal' });

    useEffect(() => {
        setQuestion(questions[2]);
    }, []);

    const openModal = (type = 'infoModal') => {
        setMainModal({
            show: true,
            type,
        });
    };

    const answerSubmit = (answer) => {
        if (question.answers.includes(answer)) {
            openModal('gameStatsModal');
            return;
        }

        if (answers.length < 6)
            setAnswers((prevAnswers) => [...prevAnswers, answer]);
        else
            openModal('gameStatsModal');
    };

    const startGame = () => {
        setMainModal({
            show: false,
            type: 'infoModal',
        });
    };

    const changeResolution = () => {
        console.log('talep');
        if (answers.length < 6)
            setAnswers((prevAnswers) => [...prevAnswers, 'NETLEŞTİR']);
    };

    return (
        <div className="main">
            {mainModal.show ?
                <MainModal onGameStart={startGame} modalType={mainModal.type} question={question}></MainModal>
                : null
            }
            <Header onModalOpened={openModal} />
            <div className='game-area'>
                <DailyImage answers={answers} dailyImageSrc={question.img}></DailyImage>
                <AnswerArea answers={answers}></AnswerArea>
                <AnswerInputArea onRequestChangeResolution={changeResolution} onSubmitAnswer={answerSubmit}></AnswerInputArea>
            </div>
        </div>
    );
}

export default Main;