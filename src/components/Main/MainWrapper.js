import { useParams } from "react-router-dom";
import Main from "./Main";

const categories = ['movie', 'game', 'music', 'sport'];

function MainWrapper() {
    const { category } = useParams();

    if (!categories.includes(category)) {
        return <div className="main">
            <div className='main-area'>
                <p>Umarım bir gün böyle bir kategorimiz olur :&#40; Şimdilik mevcut <a style={{ color: 'white' }} href='/'>kategorilere</a> bakabilirsin...</p>
            </div>
        </div>
    }

    return <Main />;
}

export default MainWrapper;