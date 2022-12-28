import './App.css';
import { AddPrograms, Home, Review, Catalog} from './components/index'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router> 
        <Routes> 
            <Route path="/" element ={<Home />} /> 
            <Route path='programs/add' element = {<AddPrograms />} />
            <Route path='review/:id' element={<Review />}/>
            <Route path="/catalogue" element ={<Catalog />} />
        </Routes>  
      </Router>
    </div>
  );
}

export default App;
