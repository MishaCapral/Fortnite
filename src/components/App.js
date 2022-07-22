
import './App.css';
import BackdropLoad from './mainPage/backdrop';
//import GoodsListContainer from './mainPage/goodsListContainer';
import VerticalTabs from './mainPage/tabsType';


function App() {
  return (
    <div className="App">
      <BackdropLoad />
      <VerticalTabs />
      {/* <GoodsListContainer /> */}
      <p>Hello App</p>
    </div>
  );
}

export default App;
