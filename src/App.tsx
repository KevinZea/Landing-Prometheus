import './App.css'
import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Landing from "./components/Landing.tsx";
import '@splidejs/splide/dist/css/splide.min.css';
import theme from "./theme.tsx";

function App() {

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Landing />}/>
              </Route>
          </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
