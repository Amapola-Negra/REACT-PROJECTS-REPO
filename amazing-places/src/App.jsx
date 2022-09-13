
import Navbar from "./Components/Navbar.jsx"
import Place from "./Components/Place.jsx"
import data from "./data.js"

import './App.css'

function App() {
  const places = data.map(item => {
    return (
        <Place
             key={item.id}
             item={item}
        />
    )
})
 console.log(places)
 return (
     <div>
         <Navbar />
         <section className="places-list">
             {places}
         </section>
         <footer><small>&copy; Mamen 2022</small></footer>
     </div>
 )
}

export default App
