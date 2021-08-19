import './App.css'
import Projets from './Projets';
import Profile from './Profile';
import Footer from './Footer';
import Topbar from './Topbar';
import Banner from './Banner';


function Home() {
  return (
    <>
      <Topbar />
      <Banner />
      <Profile />
      <Projets/>
      <Footer />
    </>
  );
}

export default Home;
