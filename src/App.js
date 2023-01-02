import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {InicioPages} from './pages/Inicio/InicioPages'
import {FormPage} from './pages/form/FormPage'
import {HeaderComponent} from './components/header/HeaderComponent'
import {ValidadorPage} from './pages/validador/ValidadorPage'
import {ApiFotosComponent} from './components/apiSimpons/ApiFotosComponent'
import {ApiSimponsMultiplePage} from './pages/apiSimponsMultiple/ApiSimponsMultiple'

function App() {
  return (
    <Router>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<InicioPages />} />
          <Route path='/form' element={<FormPage />} />
          <Route path='/validador' element={<ValidadorPage />} />
          <Route path='/apiSimpons' element={<ApiFotosComponent />}/>
          <Route path='/apiSimponsMultiple' element={<ApiSimponsMultiplePage />}/>
        </Routes>
    </Router>
  )
}

export default App;
