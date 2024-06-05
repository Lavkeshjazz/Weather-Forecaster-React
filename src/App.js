
import './App.css';
import ThreeMainCard from './Components/ThreeMainCards';
import Footer from './Components/Footer';
import Heading from './Components/Heading';
import Copyright from './Components/Copyright';

function App() {

  return (
    <div className="App">
      <div class="container">
      <main>
      <ThreeMainCard />
      <Heading cityName="Other Cities"/>
      <Footer />
      </main>
      </div>
      <Copyright />

    </div>
  );
}

export default App;


