import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { IsMobileProvider } from "./context/IsMobile";
import MainWrapper from './components/Main/MainWrapper';
import { useEffect, useState } from 'react';
import { getFromLocalStorage, setToLocalStorage } from './helpers/localStorage';
import MainModal from './components/Modals/MainModal/MainModal';
import ReactGA from 'react-ga';

const TRACKING_ID = 'UA-238614966-1';
ReactGA.initialize(TRACKING_ID);

function App() {
  const [showModal, setShowModal] = useState(false);

  ReactGA.pageview('/');

  useEffect(() => {
    const { hideInfoModal } = getFromLocalStorage('gameStats') || {};

    if (!hideInfoModal) {
      setShowModal(true);
      setToLocalStorage('gameStats', { hideInfoModal: true });
    }
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <IsMobileProvider>
      <Router>
        <Header onModalOpened={openModal} />
        {showModal ?
          <MainModal onGameStart={closeModal} modalType='infoModal' onCloseModal={closeModal}></MainModal>
          : null
        }
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/category/:category" element={<MainWrapper />} />
          <Route exact path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </IsMobileProvider>
  );
}

export default App;
