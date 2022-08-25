import { useContext, useEffect, useRef, useState } from 'react';
import IsMobileContext from '../../context/IsMobile';
import './AnswerInputArea.css';

function AnswerInputArea(props) {
    const { isMobile } = useContext(IsMobileContext);

    const answerInputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');
    const [disableInput, setDisableInput] = useState(false);

    useEffect(() => {
        setDisableInput(props.disableInput.value);

        if (props.disableInput.useTimer) {
            setTimeout(() => {
                setDisableInput(false);
                if (!isMobile)
                    answerInputRef.current.focus();
            }, 500);
        }
    }, [props.disableInput, isMobile]);

    const submitAnswer = (e, from) => {
        if (from === 'input' && disableInput)
            return;

        if (from === 'input' && e.key !== 'Enter')
            return;

        e.preventDefault();

        const answer = answerInputRef.current.value.trim().replace(/İ/g, "I").toUpperCase();
        setInputValue('');

        props.onSubmitAnswer(answer);

        if (isMobile)
            answerInputRef.current.blur();
    };

    const inputChange = (input) => {
        setInputValue(input.target.value.replace(/İ/g, "I").toUpperCase());
    };

    const changeResolution = (e) => {
        props.onRequestChangeResolution();
    };

    const keyboardFocus = () => {

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
                onFocus={keyboardFocus}
            />
            <button
                id="answer-button"
                onClick={(e) => submitAnswer(e, 'button')}
                className="answer-button"
                disabled={disableInput}>
                Gönder
            </button>
            <button
                id="change-resolution"
                onClick={(e) => changeResolution(e)}
                className="answer-button change-resolutions"
                disabled={disableInput}>
                Netleştir
            </button>
        </div >
    );
}

export default AnswerInputArea;
