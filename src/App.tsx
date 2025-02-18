import './App.css'
import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Landing from "./components/Landing.tsx";
import SearchResults from "./components/SearchResults.tsx";
import '@splidejs/splide/dist/css/splide.min.css';
import theme from "./theme.tsx";

function App() {
    const hotelId: string = 'cm7agdu2t0006ne0w5rh1jc0s';

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Landing />}/>
                  <Route path="search" element={<SearchResults hotelId={hotelId}/>} />
              </Route>
          </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
