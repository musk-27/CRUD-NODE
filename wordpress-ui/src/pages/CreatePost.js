import React, { useState,useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate

const CreatePost = () => {
  const [blogName, setBlogName] = useState('');
  const [blogDescription, setBlogDescription] = useState('');
  const [blogDate, setBlogDate] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      setBlogName(state.blogData.blogname || '');
      setBlogDescription(state.blogData.blogdesc || '');
      setBlogDate(state.blogData.blogdate || '');
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();


    if(state) {
      fetch("http://localhost:3000/editBlog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state.blogData)
      })
      .then(response => response.json())
      .then(data => {
        console.log("Post edited:", data);
        alert(data.result)
        // Navigate back to the posts page
        navigate('/posts');
      })
      .catch(error => console.error("Error adding post:", error));
    } else {
      const newPost = { name: blogName, desc: blogDescription, date: blogDate };

    // Send a POST request to your backend API
    fetch("http://localhost:3000/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Post added:", data);
        alert(data.result)
        // Navigate back to the posts page
        navigate('/posts');
      })
      .catch(error => console.error("Error adding post:", error));
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Blog Name</label>
          <input 
            type="text" 
            value={blogName} 
            onChange={(e) => setBlogName(e.target.value)} 
            className="border border-gray-300 p-2 w-full" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Blog Description</label>
          <textarea 
            value={blogDescription} 
            onChange={(e) => setBlogDescription(e.target.value)} 
            className="border border-gray-300 p-2 w-full" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Blog Date</label>
          <input 
            type="date" 
            value={blogDate} 
            onChange={(e) => setBlogDate(e.target.value)} 
            className="border border-gray-300 p-2 w-full" 
            required 
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
