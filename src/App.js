import './App.css';
import Header from './components/Header/index.jsx'
import styles from './App.module.scss'
import Teste from './components/Main/index.jsx'

function App() {
  return (
    <div className={styles.container}>
        <div>
          <Header />
        </div>
        <div>
          <Teste/>
        </div>
    </div>
  );
}

export default App;
