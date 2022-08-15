import './AnswerArea.css';

function AnswerArea(props) {
    return (
        <div className='answer-area'>
            {
                [0, 1, 2, 3, 4, 5].map((answerId) => {
                    return <div className={`answer ${props.answers[answerId]?.class}`} key={answerId} >
                        <p>{props.answers[answerId]?.value}</p>
                    </div>
                })
            }
        </div >
    );
}

export default AnswerArea;