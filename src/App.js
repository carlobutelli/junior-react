import Counter from './Components/Counter';
import Footer from './Components/Footer';
import Header from './Components/Header/Header';
import HelloWorld from './Components/HelloWorld'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <HelloWorld name="Carlo"/>

        <Counter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
