import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header(props) {
    const navigate = useNavigate();

    const openModal = () => {
        props.onModalOpened();
    };


    const goToHomePage = () => {
        navigate('/respho');
    };

    return (
        <div className="header">
            <div className="header-logo" onClick={goToHomePage}>
                <p style={{ letterSpacing: "8px", fontSize: "24px" }}>Respho</p>
            </div>
            <div className="header-buttons">
                <i
                    id="mainModal"
                    className="fa fa-info-circle"
                    style={{ fontSize: "24px", marginRight: "4px" }}
                    onClick={openModal}
                ></i>
            </div>
        </div >
    );
}

export default Header;