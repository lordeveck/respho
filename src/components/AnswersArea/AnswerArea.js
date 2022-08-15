import './AnswerArea.css';

function AnswerArea(props) {
    return (
        <div className='answer-area'>
            {
                [0, 1, 2, 3, 4, 5].map((answerId) => {
                    return <div className='answer' key={answerId}>
                        <p>{props.answers[answerId]}</p>
                    </div>
                })
            }
        </div>
    );
}

export default AnswerArea;