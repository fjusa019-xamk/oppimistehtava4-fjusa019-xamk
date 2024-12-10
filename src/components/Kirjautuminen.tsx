import React, { useState } from 'react';

const Kirjautuminen: React.FC<{ setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedInState] = useState(false);

  const handleLogin = () => {
    if (username === 'testi' && password === 'testi') {
      setIsLoggedIn(true);
      setIsLoggedInState(true);
    } else {
      alert('Virheellinen käyttäjätunnus tai salasana');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsLoggedInState(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div style={{ padding: '10px', backgroundColor: 'lightblue', marginBottom: '20px' }}>
      {!isLoggedIn ? (
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Käyttäjätunnus"
            style={{ marginBottom: '10px' }}
          />
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Salasana"
            style={{ marginBottom: '10px' }}
          />
          <br />
          <button onClick={handleLogin} style={{ width: '140px', height: '30px' }}>
            Kirjaudu
          </button>
        </div>
      ) : (
        <div>
          <div>Olet kirjautunut sisään käyttäjänä testi</div>
          <button onClick={handleLogout} style={{ width: '140px', height: '30px', marginTop: '10px' }}>
            Kirjaudu ulos
          </button>
        </div>
      )}
    </div>
  );
};

export default Kirjautuminen;
