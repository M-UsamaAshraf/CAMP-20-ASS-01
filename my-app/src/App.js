import './App.css';
import Dinner from './khana';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <Dinner dishName='NIHARI' sweetDish='KHEER' />
        <Dinner dishName='HALEEM' sweetDish='HALWA' />
        <Dinner dishName='BIRYANI' sweetDish='FALUDA' />
      </p>
      </header>
    </div>
  );
}

export default App;
