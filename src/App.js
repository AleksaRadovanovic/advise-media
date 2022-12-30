import './App.css';
import cover from './cover.jpg';
import title from './title.png';

function App() {
  return (
    <div className="App">
      <div style={{ height: '100vh', width: '100%'}}>
        <div style={{ zIndex: 999,background: 'linear-gradient(#000000c2, #00000000)', position: 'absolute', top:0, left: 0, width: '100%',height: "100%",display: "flex", justifyContent: "center", alignItems: 'center'}}>
        </div>
        <div className='img1' style={{ position: 'absolute', top:0, left: 0, width: '100%',height: "100%",display: "flex", justifyContent: "center", alignItems: 'center'}}>
          <img src={cover} style={{ width: '100%', height: "100vh"}}/>
        </div>
        <div className='background' style={{ visibility: 'hidden',position: 'absolute', top:0, left: 0, width: '100%',height: "100%",display: "flex", justifyContent: "center", alignItems: 'center'}}>
        </div> 
        <div style={{ zIndex: 10001,background: 'linear-gradient(#000000c2, #00000000)', position: 'absolute', top:0, left: 0, width: '100%',height: "100%",display: "flex", justifyContent: "center", alignItems: 'center'}}>
          <div style={{ zIndex: 1000,position: 'absolute', top:20, left: 0, width: '100%',display: "flex", justifyContent: "center", alignItems: 'center'}}>
            <div>
              <img src={title} />
            </div>
          </div>
          <div style={{ paddingLeft: 20, paddingRight: 20}}>
            <div style={{ paddingBottom: 5, borderBottom: '5px solid #fff'}}>
              <h1 style={{ color: "#fff", fontSize: 40}}>Die Werbeplattform</h1>
            </div>
            <div style={{ paddingBottom: 10,paddingLeft: 20, paddingRight: 20}}>
              <p style={{ color: "#fff", fontSize: 40}}>Befindet sich aktuell in der Entwicklung</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
