
import Card from "../components/blogcard"
export default function Home(){
    return (
        <>
         
         <section className="bg-gray-200 px-16" >
            <div className="mx-auto container text-center py-20" >
                <h2 className="text-4xl font-bold mb-4 ">Welcome to my Blogs</h2>
                <p className="text-gray-600 "> Lets Learn and Explore React and make Projects with practical Examples</p>
            </div>

         </section>
         <main className="container mx-auto px-4 py-10">
            <div className="grid gap-6 md:grid-cols-3">
                <Card title={'Learning React'} description={'React MAkes User Interfacs Simple '} category={'Development'} />
                <Card title={'Understanding props'} description={'Props ALlow us to pass Data'} />
                <Card title={'Tailwind CSS' } description={'tailwind Css Helps Us to Make interface Interactive and viusalisable'} />

            </div>
         </main>
 
          
         
        </>
       
    )
}