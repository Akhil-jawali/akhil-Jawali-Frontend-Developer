import React,{useState} from "react";
import BodyPart from "./components/BodyPart";
import HeaderPart from "./components/HeaderPart";
import Mind from "./components/Mind";
import FilterPart from "./components/FilterPart";


const App = () => {
  const [selectedArea, setSelectedArea] = useState('indian');

  return (
    <div>
      <HeaderPart />
      <Mind />
      <FilterPart selectedArea={selectedArea} setSelectedArea={setSelectedArea} />
      <BodyPart selectedArea={selectedArea} />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
