import React from 'react';

interface PikaostoskoriProps {
  ostoskori: { count: number; total: number };
  isLoggedIn: boolean;
}

const Pikaostoskori: React.FC<PikaostoskoriProps> = ({ ostoskori, isLoggedIn }) => {
  const style: React.CSSProperties = {
    backgroundColor: 'lightGreen',
    height: '125px',
    marginTop: '10px',
  };

  const otsikko = {
    margin: '5px',
  };

  const korinSisalto: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const handleOrderClick = () => {
    alert('Jatketaan tilaukseen...');
  };

  const total = isLoggedIn ? ostoskori.total * 0.8 : ostoskori.total;

  return (
    <div style={style}>
      <div style={otsikko}>Pikaostoskori</div>

      <div style={korinSisalto}>
        {ostoskori.count === 0
          ? 'Ostoskorissa ei tuotteita'
          : `Ostoskorissa ${ostoskori.count} tuotetta, yhteensä ${total.toFixed(2)} €`}
      </div>

      {ostoskori.count > 0 && (
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <button onClick={handleOrderClick} style={{ width: '140px', height: '30px' }}>
            Tilaa tuotteet
          </button>
        </div>
      )}
    </div>
  );
};

export default Pikaostoskori;
