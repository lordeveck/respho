import { useEffect, useState } from 'react';
import AnswerInputArea from '../AnswerInputArea/AnswerInputArea';
import AnswerArea from '../AnswersArea/AnswerArea';
import DailyImage from '../DailyImage/DailyImage';
import './Main.css';
import questions from '../../constants/questions';
import MainModal from '../Modals/MainModal/MainModal';
import { getFromLocalStorage, setToLocalStorage } from '../../helpers/localStorage';
import toastr from 'toastr';
import { useParams } from 'react-router-dom';
import useGaEventTracker from '../../helpers/useGaEventTracker';
import ReactGA from "react-ga";

const categoryString = {
    movie: 'Bu hangi film?',
    music: 'Bu albüm kimin?',
    game: 'Bu hangi oyun?',
    sport: 'Bu sporcu kim?',
};

function Main() {
    const { category } = useParams();
    ReactGA.pageview(`/${category}`);

    const gaEventTracker = useGaEventTracker(category);

    const [answers, setAnswers] = useState([]);
    const [question, setQuestion] = useState({});
    const [mainModal, setMainModal] = useState({ show: false, type: 'infoModal' });
    const [disableInputs, setDisableInputs] = useState({ value: false, useTimer: false });
    const [questionDay, setQuestionDay] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        if (!isCompleted) return;

        setTimeout(() => {
            setMainModal({
                show: true,
                type: 'gameStatsModal',
            });
        }, 1000)

        setDisableInputs({ value: true, useTimer: false });
        setToLocalStorage(category, {
            isCompleted: true,
        });
    }, [isCompleted, category]);

    useEffect(() => {
        const gameStartDate = new Date('08/16/2022');
        const initialDate = new Date('08/20/2022');
        const currentDate = new Date();
        const diffTime = Math.abs(currentDate - initialDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        const gameTime = Math.abs(currentDate - gameStartDate);
        const gameDays = Math.ceil(gameTime / (1000 * 60 * 60 * 24));

        setQuestionDay(gameDays);

        let question;
        if (questions[category][diffDays]) {
            question = questions[category][diffDays];
        } else {
            question = questions[category][questions[category].length - 1];
        }

        setQuestion(question);

        const { answers: answersFromStorage, isCompleted, questionDay } = getFromLocalStorage(category) || {};

        if (questionDay !== diffDays) {
            setToLocalStorage(category, {
                answers: [],
                isCompleted: false,
                questionDay: diffDays,
            });
        } else {
            if (answersFromStorage?.length) {
                setAnswers(answersFromStorage);
            }

            if (isCompleted) {
                setIsCompleted(true);
            }
        }
    }, [category]);

    const setAnswersVariable = (value, cssClass) => {
        setAnswers((prevAnswers) => {
            if (prevAnswers === 6) return prevAnswers;

            const newAnswers = [...prevAnswers, {
                value,
                class: cssClass,
            }];

            setToLocalStorage(category, {
                answers: newAnswers,
            });

            if (newAnswers.length === 6) {
                setIsCompleted(true);
            } else {
                setDisableInputs({ value: true, useTimer: true });
            }

            return newAnswers;
        });
    };

    const answerSubmit = (answer) => {
        gaEventTracker('Submit Answer');

        if (question.answers.includes(answer)) {
            setAnswersVariable(answer, 'success');
            setIsCompleted(true);

            toastr.success('Tebrikler!');

            gaEventTracker('Completed.');
            return;
        }

        setAnswersVariable(answer, 'wrong');
    };

    const changeResolution = () => {
        setAnswersVariable('NETLEŞTİR', 'pass');
    };

    const closeModal = () => {
        setMainModal((prevMainModal) => {
            return {
                show: false,
                type: prevMainModal.type,
            };
        });
    };

    return (
        <div className="main">
            {mainModal.show ?
                <MainModal onGameStart={closeModal} modalType={mainModal.type}
                    question={question} onCloseModal={closeModal}
                    gameStats={{ answers, questionDay }} category={category}></MainModal>
                : null
            }
            <div className='main-area'>
                <DailyImage answers={answers} dailyImageSrc={question.img}>
                    <span>{categoryString[category]}</span>
                </DailyImage>
                <AnswerArea answers={answers} />
                <AnswerInputArea onRequestChangeResolution={changeResolution} onSubmitAnswer={answerSubmit} disableInput={disableInputs} />
            </div>
        </div>
    );
}

export default Main;