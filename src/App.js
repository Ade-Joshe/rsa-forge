import logo from './logo.svg';
import './App.css';
import { decryptData } from './encryptionTest';

function App() {
  const encryptedData = "gsPz+8Jc+uR1g6MKFN1jQbXZpgZjBnknispjf7yjeBrWc8Xxf9d9EcrbaA2htgXMNdSig05n4C0pGhgjWv3a2k9aDWMaX0EDR9Iy35UrFVuXALJ5XsUglcXHGdpz8jd+/ZFf4niNOpjClQ3Pfntm7JgA7xqsHhCMRvnBRQIw/4/OEGEchRUPtKkX1CXxOvmjPzAQ3uMmvZjAwKOMVhJZ7Ayu1s6HL5xfXv46HlzWu2Luflx9B0a7A/9c9XOCVS/D+G7jWrJICesaUMxAKtHj8op9FZKrOrICMRZUELd5yJ6yI5FGKjWGpID2wRAm8MHLgrTXkG1pbOVPS7vSTtQgPxzTYhzo7VSLo1GR8m8nfx8hCFpzKGKGT0NaHNv713+WuuBdoRlUzNqlRrPdK/4bnFhomzx8uQKpAJpnmI7qrZ61SiIUVJNZ894/dPstPpNHriBSzjJ30BsxaFvurRuNnkC0Lhx1bsRTqDKUGifMat4/eoNSDUgND/6+2mqZNjfM"

  const data = decryptData(encryptedData);

  console.log(encryptedData);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
