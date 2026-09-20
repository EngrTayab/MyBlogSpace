import Card from "./blogcard";

export default function BlogList({blogs}){
    return(
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog)=>{
                return(
                    <Card
                    key={blog.id}
                    title={blog.title}
                    description={blog.description} 
                    link={blog.link}
                    category={blog.category}
                    
                    />  
                )
            
            })}
        </div>    
    )
}