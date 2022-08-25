import { useEffect, useMemo, useState } from 'react';
import { ImagePixelated } from 'react-pixelate';
import { FadeLoader } from 'react-spinners';
import './DailyImage.css';

function DailyImage(props) {
    const resolutionSize = useMemo(() => {
        return [30, 25, 15, 10, 5, 3, 1];
    }, []);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!props.dailyImageSrc) return;

        const daily_image = new Image();

        daily_image.onload = () => {
            setIsLoading(false);
        };

        daily_image.src = props.dailyImageSrc;
    }, [props.dailyImageSrc, props.answers]);

    return (
        <div className='daily-question'>
            <FadeLoader color={"hsl(139deg 27% 49%)"} loading={isLoading}></FadeLoader>
            {
                !isLoading ?
                    <div>
                        <div className='resolution-marker'>
                            <span>{`${resolutionSize[props.answers.length]} X ${resolutionSize[props.answers.length]}`}</span>
                        </div>
                        <ImagePixelated src={props.dailyImageSrc} width={170} height={250} pixelSize={resolutionSize[props.answers.length]} fillTransparencyColor={"grey"} />
                        <br></br>
                        {props.children}
                    </div>
                    : null
            }
        </div>
    );
}

export default DailyImage;