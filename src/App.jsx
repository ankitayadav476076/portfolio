import Nav from "./Components/Nav/Nav"
import Home from "./Components/Nav/Home/Home"
import About from "./Components/About/About"
import Experience from "./Components/Experience/Experience"
import Projects from "./Components/Projects/Projects"
import Footer from "./Components/Footer/Footer"

function App() {
 return<div className="bg-[#171d32] h-auto w-full overflow-hidden">

<Nav/>
<Home/>
<About></About>
<Experience></Experience>
<Projects></Projects>
<Footer></Footer>
 </div>
 
}

export default App
