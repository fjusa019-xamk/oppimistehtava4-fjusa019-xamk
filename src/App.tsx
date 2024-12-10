import React, { useState } from 'react';
import './global.css';
import VerkkokauppaHeader from './components/VerkkokauppaHeader';
import VerkkokauppaFooter from './components/VerkkokauppaFooter';
import Tuotenostot from './components/Tuotenostot';
import Pikaostoskori from './components/Pikaostoskori';
import Kirjautuminen from './components/Kirjautuminen';

const App: React.FC = () : React.ReactElement => {
  const keskiosa: React.CSSProperties = {
    display: 'flex',
    marginTop: '10px',
    marginBottom: '10px',
  };

  const sivupalkki: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '25%',
    marginLeft: '10px',
  };

  const [ostoskori, setOstoskori] = useState<{ count: number, total: number }>({ count: 0, total: 0 });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const lisaaKoriin = (price: number) => {
    setOstoskori(nykyinenKori => ({
      count: nykyinenKori.count + 1,
      total: nykyinenKori.total + price,
    }));
  };

  return (
    <>
      <VerkkokauppaHeader />
      <div style={keskiosa}>
        <Tuotenostot lisaaKoriin={lisaaKoriin} isLoggedIn={isLoggedIn} />
        <div style={sivupalkki}>
          <Kirjautuminen setIsLoggedIn={setIsLoggedIn} />
          <Pikaostoskori ostoskori={ostoskori} isLoggedIn={isLoggedIn} />
        </div>
      </div>
      <VerkkokauppaFooter />
    </>
  );
};

export default App;
