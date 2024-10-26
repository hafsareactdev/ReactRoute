import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <nav className=' py-5 bg-black'>
        <div className="container">
            <div className="menu_row flex justify-between items-center">
                <div className="menu_logo5 w-40"><img src="images/logo5.png" alt="logo" /></div>
                <div>
                    <ul className='flex gap-10'>
                        <li><Link className='text-black font-semibold bg-white px-6 py-3 rounded-sm hover:rounded-bl-3xl hover:rounded-tr-2xl transition- duration-500' to="/">Home</Link></li>
                        <li><Link className='text-black font-semibold bg-white px-6 py-3 rounded-sm hover:rounded-bl-3xl hover:rounded-tr-2xl transition- duration-500' to="about">About</Link></li>
                        <li><Link className='text-black font-semibold bg-white px-6 py-3 rounded-sm hover:rounded-bl-3xl hover:rounded-tr-2xl transition- duration-500' to="blog">Blog</Link></li>
                        <li><Link className='text-black font-semibold bg-white px-6 py-3 rounded-sm hover:rounded-bl-3xl hover:rounded-tr-2xl transition- duration-500' to="help">Help</Link></li>
                        <li><Link className='text-black font-semibold bg-white px-6 py-3 rounded-sm hover:rounded-bl-3xl hover:rounded-tr-2xl transition- duration-500' to="contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}
export default Navbar
