import Teacher from './Teacher';
import logo from './logo.svg';
import hashimImg from './Hashim.avif';
import abdImg from './abdullah.jpeg';
import luqmanImg from './luqman.jpeg';

function App(props) {
  const Style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'black',
    color: 'white',
    height: '100%',
    border: '2px solid red',
    paddingTop: '2%',
    height: '100vh',
  };

  return (
    <div style={Style}>
      <div>
        <Teacher img={luqmanImg} name="Luqman" age={40} experience="11 years" />
      </div>
      <div>
        <Teacher img={abdImg} name="Abdullah" age={43} experience="15 years" />
      </div>
      <div>
        <Teacher img={hashimImg} name="Hashim" age={42} experience="19 years" />
      </div>
    </div>
  );
}

export default App;
