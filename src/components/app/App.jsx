/* eslint-disable no-constant-condition */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-constructed-context-values */
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import authService from '../LoginForm/auth.service';
import darkmodelogo from '../../assets/images/darkmodelogo.png';
import logo from '../../assets/images/Logo.png';
import Header from '../header/header';
import Footer from '../footer/footer';
import HomePage from '../homePage/homePage';
import DashBoard from '../DashBoard/dashBoard';
import CoinPage from '../DashBoard/CoinPage/coinPage';
import LoginForm from '../LoginForm/loginForm';
import LearningJourney from '../LearningJourney/learningJourney';
import Challenge from '../LearningJourney/Challenge/challenge';
import Cours from '../LearningJourney/Cours/cours';
import FAQ from '../FAQ/FAQ';
import Profil from '../Profil/profil';
import Articles from '../Articles/articles';
import Article from '../Articles/Article/article';
import Lexicon from '../Lexicon/lexicon';
import About from '../About/about';
import OurTeam from '../OurTeam/ourTeam';
import PageNotFound from '../404/PageNotFound';

function App() {
  const isLogged = authService.getCurrentUser();
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className="App" id={theme}>
      <Header logoTheme={theme === 'light' ? logo : darkmodelogo} />
      <div className="theme-toggle">
        <button type="button" onClick={switchTheme}>{theme} theme</button>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {isLogged && (<Route path="/profile" element={<Profil />} />)}
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/coin/:id" element={<CoinPage />} />
        <Route path="/log-in" element={<LoginForm />} />
        <Route path="/learning" element={<LearningJourney />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/Cours" element={<Cours />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="challenge" element={<Challenge />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:name" element={<Article />} />
        <Route path="/lexicon" element={<Lexicon />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
