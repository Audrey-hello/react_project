import '../styles/App.css'
import Banner2 from '../components/Banner2';
import Cards from '../components/Cards';
import Profile from '../components/Profile';
import Banner from '../components/Banner';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';




function Home () {
  return (
    <>
  <Topbar />
  <Banner/>
  <Cards />
  <Banner2 />
  <Profile />
  <Footer />
   </>
  );
}

export default Home;
