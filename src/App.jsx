import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

import TitleBanner from "./components/titleBanner";
import ImageWidget from "./components/imageWidget";
import ButtonInput from "./components/buttonInput";
import StoredImage from "./components/storedImage";
import { GlobalProvider } from './context/GlobalState';

function App(){
  const { storedImages } = useContext(GlobalContext);

  return (
    <GlobalProvider>
      <div className="counter-widget" style={{ padding: "20px 75px" }}>
        <TitleBanner />
        <ImageWidget />
         <ul className="list light l-flex l-flex--inline sa " 
            style={{ width: 400, background: 'whitesmoke' }}>
              {storedImages.map(storedimage => <StoredImage key={storedimage.key} storedimage={storedimage} />)}
          </ul>
          <ButtonInput />
        </div>
    </GlobalProvider>
  ) 
}

export default App;
