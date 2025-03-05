import {HeroSection,Header,Features,Footer,Login,SignUp} from "./components/index.js"
import './App.css'

function App() {


  return (
    <>
    {/* <div className='text-3xl text-orange-500 bg-black p-4 ' >
      Hello DeepSake genus Software
    </div> */}
    <Header />
    <HeroSection />
    <Features />
    <Login />
    <SignUp />
    <Footer />
    </>
  )
}

export default App
