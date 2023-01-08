import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Card from './component/Card';
import data from './data/card-data';

function App() {
  const cards = data.map(e => <Card {...e} />);

  return (
    <div className="App">
      <Header />
      {cards}
      <Footer 
        year="2023" 
        authorLink="https://unsplash.com/@nightcoder" 
        author="Yuriy Kovalev" 
        imageLink="https://unsplash.com/photos/nN1HSDtKdlw" 
        website="Unsplash"
      />
    </div>
  );
}

export default App;
