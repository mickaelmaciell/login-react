
import "primereact/resources/themes/soho-dark/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import Paths from "./routes/Paths";
import { AuthContext } from "./contexts/AuthContext";
import { useState } from "react";
        
const App = () => {

  return (  
    <>
      <AuthContext>
       <Paths/>
      </AuthContext>
    </>
  );
}
 
export default App;