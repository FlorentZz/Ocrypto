/* eslint-disable max-len */
import React from 'react';
import './profilStyles.scss';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ProfilLogo from '../../assets/images/profilLogo.png';
import Update from './Update/update';
import authService from '../LoginForm/auth.service';
// import heroku from '../../config/api/heroku';

function Profil() {
  const user = authService.getCurrentUser();

  // const [favorites, setFavorites] = useState([]);

  // const getFavorites = async () => {
  //   const response = await heroku.get(`/favoris/${user.user.id}/cryptos`);
  //   setFavorites(response.data);
  //   console.log(response.data);
  // };

  // useEffect(() => {
  //   getFavorites();
  // }, []);
  // console.log(favorites);

  const coin = JSON.parse(localStorage.getItem('favorites'));
  console.log(coin);

  return (
    <div className="profil-container">
      <div className="profil-title">
        <h2>Bienvenue {user.user.pseudo}</h2>
      </div>
      <div className="profil-header">
        <div className="profil-card">
          <Stack direction="row" spacing={2}>
            <Avatar
              sx={{ width: 180, height: 180 }}
              src={ProfilLogo}
            />
          </Stack>
          <div className="profil-card-username">
            <h3 className="profil-username">{user.user.pseudo}</h3>
          </div>
          <div className="profil-update-container">
            <Update />
          </div>
        </div>
        <div className="profil-score">
          <h3 className="profil-scoreState">Niveau : {user.user.level}</h3>
          <h3 className="profil-scoreState">Points : {user.user.reward}</h3>
        </div>
      </div>
      <div className="profil-favorites">
        <h1 className="profil-favorites-title">Mes favoris</h1>
        {coin === null ? (<h1 className="profil-favorites-title">Vous n'avez pas de favoris</h1>) : (

          <div className="coin-cointainer-profil">
            {coin.map((coins) => (
              <div key={coins.name} className="coin-row-profil">
                <div className="coin">
                  <p className="coin-rank">{coins.rank}</p>
                  <img src={coins.image} alt="crypto" />
                  <h1 className="coin-name">{coins.name}</h1>
                  <p className="coin-symbol">{coins.symbol}</p>
                </div>
                <div className="coin-data">
                  <p className="coin-price">{coins.price}€</p>
                  {coins.priceChange < 0 ? (<p className="coin-percent red">{coins.priceChange.toFixed(2)}%</p>
                  ) : (<p className="coin-percent green">{coins.priceChange.toFixed(2)}%</p>
                  )}
                  <p className="coin-marketcap">
                    {coins.marketcap.toLocaleString()}€
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default React.memo(Profil);
