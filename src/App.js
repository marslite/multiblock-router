import Navbar from './Nav/nav';
import Footer from './Footer/footer';
import HomePage from './Homepage/home';
import Focus from './Focus/focus';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div >
      <Navbar/>




      <div className="card text-bg-light mb-3" style={{"max-width": "18rem;"}}>
        <div className="card-header"><b>Multiblock Beta</b></div>
        <div className="card-body">
          <h5 className="card-title">Protect Your Network with Multiblock - Your Bulk Domain Blacklisting Solution</h5>
          <p className="card-text">Stay in control and maintain a safe browsing environment with Multiblock. Designed to seamlessly integrate with Pi-Hole, Multiblock empowers you to bulk blacklist multiple domains with ease. Whether you're guarding against malicious cyber threats, blocking access to adult content, or keeping gambling sites at bay, Multiblock offers a robust solution for individuals and organizations alike. Keep your network clean and your users protected with our intuitive, user-friendly interface that makes domain management straightforward and effective. Say goodbye to unwanted content and hello to peace of mind with Multiblock.</p>
        </div>
      </div>

      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/focus" element={<Focus/>} />
        </Routes>

      </HashRouter>

      <Footer/>

    </div>
  );
}

export default App;
