import { BrowserRouter } from 'react-router-dom';
import MainPage from "./view/MainPage.jsx"


function App() {

  return (
    <>
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </>
  )
}

export default App;
