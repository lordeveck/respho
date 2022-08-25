import { useEffect, useMemo, useRef } from 'react';
import './DailyImage.css';

function DailyImage(props) {
    const imgCanvas = useRef(null);
    const resolutionSize = useMemo(() => {
        return [0.03, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5];
    }, []);

    useEffect(() => {
        if (!props.dailyImageSrc) return;

        const context = imgCanvas.current.getContext('2d');

        context.clearRect(0, 0, imgCanvas.current.width, imgCanvas.current.height);

        const daily_image = new Image();

        daily_image.onload = () => {
            const w = imgCanvas.current.width * resolutionSize[props.answers.length];
            const h = imgCanvas.current.height * resolutionSize[props.answers.length];

            context.drawImage(daily_image, 0, 0, w, h)

            context.msImageSmoothingEnabled = false;
            context.mozImageSmoothingEnabled = false;
            context.webkitImageSmoothingEnabled = false;
            context.imageSmoothingEnabled = false;

            context.drawImage(imgCanvas.current, 0, 0, w, h, 0, 0, imgCanvas.current.width, imgCanvas.current.height);
        };

        daily_image.src = props.dailyImageSrc;
    }, [props.dailyImageSrc, props.answers, resolutionSize]);

    return (
        <div className='daily-question'>
            <div className='resolution-marker'>
                <span>{`${resolutionSize[props.answers.length]} X ${resolutionSize[props.answers.length]}`}</span>
            </div>
            <canvas ref={imgCanvas} id="viewport" className='img-canvas' width={170} height={250}></canvas>
            <br></br>
            {props.children}
        </div>
    );
}

export default DailyImage;