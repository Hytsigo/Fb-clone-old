import './App.css';
import { Feed } from './Feed';
import { Header } from './Header';
import { Sidebar } from './Sidebar'

function App() {
  return (
    // BEM naming convention
    <div className="App">
      
      <Header />
      <div class="app__body">
      <Sidebar />
      <Feed />
      
      {/* Widgets */}
      </div>

    
    </div>
  );
}

export default App;
