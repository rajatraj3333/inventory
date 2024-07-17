import './style.css'
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import HeaderActions from './Components/HeaderActions';
import Table from './Components/Table';
import Headerimplementation from './Components/Headerimplementation';
function App() {
  return (
    <div className="App">
      <div className="wrap">
        <Header/>
        <div className="content-area">
       <Sidebar/>
       <main className="main-content">
         <Headerimplementation/>
        </main>
        </div>
      </div>
    </div>
  );
}

export default App;
