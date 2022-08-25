import './HomePage.css';
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    const openCategory = (target) => {
        navigate(`/category/${target}`);
    };

    return (
        <div className="main">
            <div className='main-area'>

                <div className='title'>
                    <p> Kategori Seçiniz </p>
                </div>

                <div className='category movie' onClick={() => openCategory('movie')}>
                    <p>
                        Film
                    </p>
                </div>
                <div className='category music' onClick={() => openCategory('music')}>
                    <div>
                        <p>
                            Müzik
                        </p>
                    </div>
                    <div className='beta'>
                        <span>Beta</span>
                    </div>
                </div>

                <div className='category game' onClick={() => openCategory('game')}>
                    <div>
                        <p>
                            Oyun
                        </p>
                    </div>
                    <div className='beta'>
                        <span>Beta</span>
                    </div>
                </div>
                <div className='category sport' onClick={() => openCategory('sport')}>
                    <div>
                        <p>
                            Spor
                        </p>
                    </div>
                    <div className='beta'>
                        <span>Beta</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;