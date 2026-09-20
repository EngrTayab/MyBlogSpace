export default function Card({title,description,link="#" ,category='Informative'}){
    return(
        <>
        <div className="shadow rounded-lg p-5">
            <h2 className="mb-3 text-2xl font-bold text-gray-900">{title}</h2>
            <p className="mb-4 text-gray-600">{description}</p>
            <p className="mb-5 text-gray-600">Category:<span className="text-red-500 font-bold">{category}</span></p>
            <a href={link} target="_blank" rel="noopener noreferrer"  className="rounded px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white ">ReadMore</a>
            
            {/* <a
                href={link}
                target={link === "#" ? "_self" : "_blank"} // Open in same tab if no link
                rel={link === "#" ? "" : "noopener noreferrer"}
                className={`rounded px-4 py-2 ${
                    link === "#"
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                    } text-white`}
                >
                    Read More
            </a> */}
        </div>
        
        </>
    )
}