import Panel from "../components/Panel"


function HomePage() {
  return (
    <div className=" flex flex-col items-center h-screen ">
      {/* NAVBAR */}
      <h1 className="text-7xl w-fit font-bold mt-40 mb-20 text-white ">ChatGPT</h1>

      <div className="h-1 rounded-full bg-gradient-to-r to-violet-600 from-pink-600 w-3/4"></div>
      
    <Panel/>
      

      
    </div >
  )
}

export default HomePage
