import logo from './logo.svg';
import Testimonie from './Components/Testimonies';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1>Esto es lo que dicen las personas que aprendieron React!</h1>
      </div>
      <Testimonie 
        name= 'Juancito Rodriguez'
        country= 'Argentina'
        image= 'placeHolder.jpg'
        role= 'Ingeniero de software'
        corporation= 'TurtleSoft'
        testimonie='Yo era un aventurero, iba de aqui aca, hasta que aprendi react, ahora soy un desarrollador util'
      />
      <Testimonie 
        name= 'Jasinta Monte Hermoso'
        country= 'Uruguay'
        image= 'placeHolder.jpg'
        role= 'Ingeniera de software'
        corporation= 'JoeSoft'
        testimonie='Yo era un aventurera, iba de aqui aca, hasta que aprendi react, ahora soy una desarrolladora, es genial!'
      />
      <Testimonie 
        name= 'Romina Che'
        country= 'Cuba'
        image= 'placeHolder.jpg'
        role= 'Programadora'
        corporation= 'CubaSoft'
        testimonie='Siempre fui desarrolladora, ahora con react puedo avanzar en mi trabajo.'
      />
    </div>
  );
}

export default App;
