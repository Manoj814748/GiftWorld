import SearchBar from './components/Searchbar'; // Adjust the path as necessary
import CartIcon from './components/Cart';
import MenuIcon from './components/Menu';
import './App.css';

const App = () => {
  return (
    <div className='header-container'>
    <div className='header1'>
    <h1></h1>
    <SearchBar />
    {/* Your content or list goes here */}
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
   <CartIcon />
   <MenuIcon/>
    </header>
    
  </div>
    </div>
  );
};

export default App;
