import { FaGithub, FaLinkedin, FaUserCircle, } from 'react-icons/fa';
import { SiOpenai } from 'react-icons/si'
function Navbar() {
    return (
        <div className='flex md:flex-row h-20 w-full justify-between' >
            <div className='flex flex-row items-center justify-center ml-5 space-x-2  text-white'  >
                <div className='h-8 w-8'>
                    <SiOpenai className='h-8 w-8' />

                </div>
                <div>OpenAI</div>
            </div>

            <div className='flex flex-row items-center justify-center space-x-5 mr-5'>

                <div className='bg-secondary_brand text-primary_text font-bold  px-4 py-2 flex space-x-3 rounded'> <span>Github</span> <FaGithub className='font-bold text-sm h-6 w-6' /></div>
                <div className='bg-secondary_brand text-primary_text font-bold px-4 py-2 flex space-x-3 rounded'> <span>LinkedIn</span> <FaLinkedin className='font-bold text-sm h-6 w-6' /></div>
            </div>


        </div>
    )
}

export default Navbar
