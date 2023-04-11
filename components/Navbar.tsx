import { FaGithub, FaLinkedin, FaUserCircle, } from 'react-icons/fa';
import {SiOpenai} from 'react-icons/si'
function Navbar() {
    return (
        <div className='flex md:flex-row h-20 w-full justify-between' >
            <div className='flex flex-row items-center justify-center ml-5 space-x-2  text-white'  >
                <div className='h-8 w-8'>
                    <SiOpenai className='h-8 w-8'/>

                </div>
                <div>OpenAI</div>
            </div>

            <div className='flex flex-row items-center justify-center space-x-10 mr-5'>

                <FaGithub className='text-white/40 h-6 w-6'/>
                <FaLinkedin className='text-white/40 h-6 w-6'/>
                <FaUserCircle className='text-white/40 h-6 w-6'/>
            </div>


        </div>
    )
}

export default Navbar
