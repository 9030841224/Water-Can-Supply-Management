
import './App.css';
import './CustomersDetails'
import { useState } from "react";
import CustomersDetails from './CustomersDetails';


function App() {
  const [tableData, setTableData] = useState([])
  return (
    <div className="App" >
      <div>
        <h1 className='app'>
          Customer Details
        </h1>
      </div>
      <div>              
        <center>
          <CustomersDetails tableData={tableData}/>
        </center>                
      </div>      
    </div>
  );
}

export default App;
