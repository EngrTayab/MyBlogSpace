import { useState } from "react";
const emptyform = {
  id: "",
  title: "",
  description: "",
  category: "",
  link: "",
};
export default function AddBlog({ addblog }) {
  const [formData, setformData] = useState(emptyform);
  const [successMessage, setsuccessMessage] = useState("");
  function handlechange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setformData({
      ...formData,
      [name]: value,
    });
    setsuccessMessage("");
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.title||!formData.description||!formData.link){
        setsuccessMessage('Plese Fill all required Fields')
        return;    
    }
    const newblog = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      category: formData.category,
      link: formData.link,
    };
    addblog(newblog);
    setformData(emptyform);
    setsuccessMessage(
        "Blog Added successfulu Go to Blogs Page to See your blog!Thanks"
    );
    
  }

  return (
    <>
      <main className="px-6 py-10 ">
        <div className="max-w-3xl ">
          <h2 className="text-3xl font-bold text-center  ">Add new blogs</h2>
          <p className="text-gray-700 text-center">Fill the form below to add Blog</p>
          {successMessage &&(
            <p className={`rounded-lg  px-3 py-4 ${successMessage==='Plese Fill all required Fields'?"bg-red-500 text-red-200":"bg-green-500 text-green-200"}`}>{successMessage}</p>
          )}
          <form
            onSubmit={handleSubmit} className="rounded-lg shadow-md p-6 bg-white "
          >
            <div className="mb-8">
              <label
                htmlFor="title"
                id="title"
                className="mb-2 block font-medium text-gray-700"
              >
                Blog Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handlechange}
                placeholder="Enter Blog Title"
                className="rounded-lg border w-full border-gray-300 focus:border-blue-500 outline-none p-3"
              />
              <label htmlFor="category" id="category" className="mb-2 block font-medium text-gray-700">
                Category
              </label>
              <input
              type="text"
              id="text"
              name='category'
              value={formData.category}
              onChange={handlechange}
              placeholder="Enter Category Of Blog"
              className="rounded-lg border w-full border-gray-300 focus:border-blue-500 outline-none p-3"
              />
              
              <label htmlFor="link" id="link" className="mb-2 font-medium text-gray-700">
                Blog Link
              </label>
              <input
              type="text"
              id="link"
              name="link"
              value={formData.link}
              onChange={handlechange}
              placeholder="Paste URL Link Of Blog"
              className="rounded-lg border w-full border-gray-300 focus:border-blue-500 outline-none p-3"
              />

               <label htmlFor="category" id="category" className="mb-2 font-medium text-gray-700">
                Enter Description
               </label>
               <textarea name="description" id="description" value={formData.description} onChange={handlechange} className=" p-3 rounded-lg border w-full border-gray-300 focus:border-blue-500 outline-none" ></textarea>
               <button type="submit" onSubmit={handlechange} className="rounded px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white">Add Blog</button>

            </div>
          </form>
        </div>
      </main>
    </>
  );
}
