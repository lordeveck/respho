import './Header.css';

function Header(props) {
    const openModal = () => {
        props.onModalOpened();
    }

    return (
        <div className="header">
            <div id="header-logo">
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