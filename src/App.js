import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/layout/Nav';
import Board from "./routes/Board";
import Stats from "./routes/Stats";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Nav />
        <Routes>
          <Route path="/stats" element={<Stats />} />
          <Route path="/board" element={<Board />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
