import { useMemo } from 'react';
import Blur from 'react-blur';
import './DailyImage.css';

function DailyImage(props) {
    const resolutionSize = useMemo(() => {
        return [50, 30, 20, 15, 7, 3, 2];
    }, []);

    return (
        <div className='daily-question'>
            {
                props.dailyImageSrc ?
                    <div>
                        <div className='resolution-marker'>
                            <span>{`${resolutionSize[props.answers.length]} X ${resolutionSize[props.answers.length]}`}</span>
                        </div>
                        <Blur img={props.dailyImageSrc} blurRadius={resolutionSize[props.answers.length]} className='img-canvas' />

                        <br></br>
                        {props.children}
                    </div>
                    :
                    null
            }
        </div>
    );
}

export default DailyImage;