// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import { useState,useEffect } from 'react';

// const Posts = () => {
//   const [posts, setPosts] = useState([]);
//   const navigate = useNavigate(); // Initialize useNavigate

//   useEffect(() => {
//     fetch("http://localhost:3000/post")
//       .then((res) => res.json())
//       .then((data) => {
//         setPosts(data);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   const handleAddPost = () => {
//     navigate('/create-post'); // Navigate to CreatePost component
//   };

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
//       <button 
//         onClick={handleAddPost} 
//         className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Add New Post
//       </button>
//       {posts.length > 0 ? (
//         <table className="min-w-full border-collapse border border-gray-200">
//           <thead>
//             <tr>
//               <th className="border border-gray-200 p-2">ID</th>
//               <th className="border border-gray-200 p-2">Blog Name</th>
//               <th className="border border-gray-200 p-2">Blog Description</th>
//               <th className="border border-gray-200 p-2">Blog Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {posts.map((post) => (
//               <tr key={post.id}>
//                 <td className="border border-gray-200 p-2">{post.id}</td>
//                 <td className="border border-gray-200 p-2">{post.name}</td>
//                 <td className="border border-gray-200 p-2">{post.description}</td>
//                 <td className="border border-gray-200 p-2">{post.date}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No posts available.</p>
//       )}
//     </div>
//   );
// };

// export default Posts;


import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td className="border border-gray-200 p-2">{post.blogid}</td>
                <td className="border border-gray-200 p-2">{post.blogname}</td> {/* Update key here */}
                <td className="border border-gray-200 p-2">{post.blogdesc}</td>  {/* Update key here */}
                <td className="border border-gray-200 p-2">{post.blogdate}</td>  {/* Update key here */}
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
