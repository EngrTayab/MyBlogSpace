import { Link } from "react-router-dom"
export default function Header(){
    return(
        <>
        <header className=" bg-blue-600 text-white ">
            <div className="flex mx-auto container items-center justify-between px-4 py-7">
                <h2 className="text-3xl font-bold">My Blogs</h2>
                <nav className="flex gap-6 ">
                    <Link to='/'>Home</Link>
                    <Link to='/blog'>Blogs</Link>
                    <Link to='/add-blog'>Add Blogs</Link>
                    
                </nav>
            </div>
        </header>
        </>
    )
}