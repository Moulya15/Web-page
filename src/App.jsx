import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';  
const App = ()=>{
    return (
        <div >
        <div>
        <Navigation/>
         </div>
        <div className='background'><Hero/>
        </div>
        </div>
       
    );
}
export default App;