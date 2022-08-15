import { useRef, useState } from 'react';
import './AnswerInputArea.css';

function AnswerInputArea(props) {
    const answerInputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');

    const submitAnswer = (e, from) => {
        if (from === 'input' && e.key !== 'Enter') {
            return;
        }

        e.preventDefault();

        const answer = answerInputRef.current.value.trim().replaceAll('i', 'İ').toUpperCase();
        setInputValue('');

        props.onSubmitAnswer(answer);
    };

    const inputChange = (input) => {
        setInputValue(input.target.value.replaceAll('i', 'İ').toUpperCase());
    };

    const changeResolution = (e) => {
        console.log('test', e)
        props.onRequestChangeResolution();
    };

    return (
        <div className="answer-input-area">
            <input
                type="text"
                id="answer-input"
                className="answer-input"
                placeholder={'Cevabınızı yazınız.'}
                onKeyDown={(e) => submitAnswer(e, 'input')}
                value={inputValue}
                onChange={(input) => inputChange(input)}
                ref={answerInputRef}
            />
            <button
                id="answer-button"
                onClick={(e) => submitAnswer(e, 'button')}
                className="answer-button">
                GÖNDER
            </button>
            <button
                id="change-resolution"
                onClick={(e) => changeResolution(e)}
                className="answer-button change-resolutions">
                NETLEŞTİR
            </button>
        </div >
    );
}

export default AnswerInputArea;
