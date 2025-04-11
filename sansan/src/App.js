
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Index from "./components/_Layout/index";


function App() {
    return (
        <div className="App">
            <Router>
                <Index />
            </Router>
        </div>
    );
}

export default App;

