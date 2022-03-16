import Navbar from "components/Navbar";
import Form from "components/pages/Form";
import Listing from "components/pages/Listing";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar title={"DSMovie"}/>
      <Routes>
        <Route path="/" element={<Listing/>}/>
        <Route path="/form">
          <Route path=":movieId" element={<Form/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;