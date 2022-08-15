import { useEffect, useRef, useState } from 'react';
import './DailyImage.css';

function DailyImage(props) {
    const imgCanvas = useRef(null);
    const [resolutions, setResolutions] = useState({ p: 5, q: 5, w: 235, h: 350 });

    useEffect(() => {
        setResolutions((currentResolutions) => {
            const context = imgCanvas.current.getContext('2d');

            const daily_image = new Image();
            daily_image.src = props.dailyImageSrc;

            daily_image.onload = () => {
                const { p, q, w, h } = currentResolutions;
                console.log(p, q, w, h);
                imgCanvas.current.width = p;
                imgCanvas.current.height = q;

                context.drawImage(daily_image, 0, 0, p, q);

                imgCanvas.current.style.width = w + "px";
                imgCanvas.current.style.height = h + "px";
            }

            return {
                ...currentResolutions,
                p: currentResolutions.p * 1.5,
                q: currentResolutions.q * 1.5,
            };
        });
    }, [props.dailyImageSrc, props.answers]);

    return (
        <div className='daily-question'>
            <canvas ref={imgCanvas} id="viewport" className='img-canvas'></canvas>
            <p>{`Sıradaki çözünürlük -> ${Math.round(resolutions.q)} X ${Math.round(resolutions.p)}`}</p>
        </div>
    );
}

export default DailyImage;