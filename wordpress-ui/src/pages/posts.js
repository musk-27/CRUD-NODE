import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/post")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.result);
      })  
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleAddPost = () => {
    navigate('/create-post');
  };

  const handleEditPost = (data) => {
    navigate('/create-post',{ 
      state: {
        blogData: data
      }}
    );
    
  };

  const handleDeletePost = (id) => {
    console.log("Delete post with ID:", id);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <button 
        onClick={handleAddPost} 
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add New Post
      </button>
      {posts.length > 0 ? (
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-200 p-2">ID</th>
              <th className="border border-gray-200 p-2">Blog Name</th>
              <th className="border border-gray-200 p-2">Blog Description</th>
              <th className="border border-gray-200 p-2">Blog Date</th>
              <th className="border border-gray-200 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td className="border border-gray-200 p-2">{post.blogid}</td>
                <td className="border border-gray-200 p-2">{post.blogname}</td>
                <td className="border border-gray-200 p-2">{post.blogdesc}</td>
                <td className="border border-gray-200 p-2">{post.blogdate}</td>
                <td className="border border-gray-200 p-2 flex space-x-2">
                  <button onClick={() => handleEditPost(post)}>
                    <FaEdit className="text-blue-500 hover:text-blue-700" />
                  </button>
                  <button onClick={() => handleDeletePost(post.id)}>
                    <FaTrash className="text-red-500 hover:text-red-700" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default Posts;
