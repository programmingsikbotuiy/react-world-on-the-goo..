

import { Suspense } from 'react';
import './App.css'
import Countrys from './Components/Countrys/Countrys';


const fetchMessage = fetch("https://openapi.programming-hero.com/api/all")
.then(res =>res.json())

function App() {
  

  return (
    <>

    <Suspense fallback={<p>loading...</p>}>
      <Countrys fetchMessage={fetchMessage}></Countrys>
    </Suspense>
    </>
  
  )
}

export default App;
