import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer year="2023" authorLink="https://unsplash.com/@nightcoder" author="Yuriy Kovalev" imageLink="https://unsplash.com/photos/nN1HSDtKdlw" website="Unsplash"/>
    </div>
  );
}

export default App;
