import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Panel from "../components/Panel"
import Sidebar from "../components/Sidebar"


function HomePage() {
  return (
    <div className=" flex flex-col h-screen bg-primary">
      {/* NAVBAR */}
      <div className="mx-5">

        <Navbar/>
      </div>

      
        <Hero/>
      
      
      
    {/* <Panel/> */}  
    


      

      
    </div >
  )
}

export default HomePage
