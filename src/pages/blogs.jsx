
import BlogList from "../components/bloglist"

export default function Blogs({blogs}){
    return(
        <>
        
        <main className="bg-gray-50 min-h-screen">
            <section  className="max-w-6xl mx-auto px-6 py-14">
                <div className="mx-auto container text-center py-10">
                    <p className=" text-blue-600 font-semibold mb-2">Our Blogs</p>
                    <h2 className="text-3xl font-bold text-black mb-4">Latest Articles</h2>
                    <p className="text-gray-600">Read Beginner Friendly Articles About University Life Of Students</p>
                </div>
                <BlogList blogs={blogs}  />
            </section>
            
            
        </main>
       
       
        </>
    )
}