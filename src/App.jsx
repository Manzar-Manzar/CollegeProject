// import React from 'react';
// import './App.css';
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
// import UserContextProvider from './context/UserContextProvider';


// Dark Theme on hold for now, will try later
// const App = () => {
//   const [themeMode, setThemeMode] = useState("light")

//   const lightMode = () => {
//     setThemeMode("light")
//   }

//   const darkMode = () => {
//     setThemeMode("dark")
//   }

//   useEffect(() => {
//     document.querySelector('html').classList.remove("light", "dark")
//     document.querySelector('html').classList.add(themeMode)
//   }, [themeMode])
//   return (
//     <ThemeProvider>
      
//     </ThemeProvider>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login'; // Adjust path as needed
import SignUp from './components/SignUp/SignUp'; // Adjust path as needed
import Home from './components/Home/Home'; // Adjust path as needed
// Import other components as needed

const App = () => {
  return (
    <Router>
      <div className='bg-gray-700'>
        <Header />
        <main className='min-h-[90vh] p-4'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/getStarted" element={<SignUp />} />
            {/* Define other routes as needed */}
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
