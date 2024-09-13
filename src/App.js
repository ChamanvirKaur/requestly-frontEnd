import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Components/landing-page/Landing';
import Header from './Components/header/Header';
import Signup from './Components/signup/Signup';
import Login from './Components/login/Login';
import Dashpage from './Components/dashboard-page/Dashpage';
import MakeRequest from './Components/makeRequest/MakeRequest';
import Footer from './Components/footer/Footer';
import { multiStepContext } from './StepContext';
import { useContext } from 'react';
import PrivateRoute from './Components/privateRoute/PrivateRoute';
import PublicRoute from './Components/publicRoute/PublicRoute';
function App() {
  const { currentStep, finalData } = useContext(multiStepContext);

  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Signup" element={<PublicRoute element={Signup} />} />
          <Route path="/Login" element={<PublicRoute element={Login} />} />
          <Route path="/Dashboard" element={<PrivateRoute element={Dashpage} />} />
          <Route path="/makeRequest" element={<MakeRequest />}/>
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
