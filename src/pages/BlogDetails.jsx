import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { blogDetailsItem } from "../constant/data";

const BlogDetails = () => {
  const { id } = useParams();
  const blogPost = blogDetailsItem.find((item) => item.id.toString() === id);

  // Comment form state
  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    message: "",
    saveInfo: false
  });
  const [commentStatus, setCommentStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  if (!blogPost) {
    return <h2 className="text-center text-red-500 py-20">Blog post not found</h2>;
  }

  const handleCommentChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCommentForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    setCommentStatus({ submitting: true, success: false, error: null });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form on success
      setCommentForm({
        name: "",
        email: "",
        message: "",
        saveInfo: false
      });
      setCommentStatus({ submitting: false, success: true, error: null });
    } catch (error) {
      setCommentStatus({ submitting: false, success: false, error: error.message });
    }
  };

  return (
    <section className="container py-10">
      {/* Blog Featured Image */}
      <div className="mb-10">
        <img 
          src={blogPost.imgUrl} 
          alt={blogPost.title} 
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      
      {/* Blog Content */}
      <div className="p-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{blogPost.title}</h2>
        <p className="text-lg text-neutral-600 mb-6">{blogPost.text1}</p>
        <p className="text-lg text-neutral-600 mb-6">{blogPost.text2}</p>
        
        <h3 className="text-2xl font-bold mt-8 mb-4">{blogPost.title2}</h3>
        <p className="text-lg text-neutral-600 mb-8">{blogPost.text3}</p>
        
        {/* Highlighted Quote */}
        <div className="my-8 border-l-4 border-primaryClr bg-neutral-50 px-6 py-4">
          <p className="text-lg italic mb-3">{blogPost.text4}</p>
          <p className="font-medium">{blogPost.name}</p>
        </div>
        
        <h3 className="text-2xl font-bold mt-8 mb-4">{blogPost.title3}</h3>
        <p className="text-lg text-neutral-600 mb-8">{blogPost.text5}</p>
        
        {/* Image Gallery */}
        <div className="flex flex-wrap gap-4 my-8">
          {[blogPost.imgUrl, blogPost.imgUrl2, blogPost.imgUrl3].map((src, index) => (
            <img 
              key={index} 
              src={src} 
              alt={`blog-${index}`} 
              className="w-full sm:w-[calc(33.333%-1rem)] h-48 object-cover rounded-lg"
            />
          ))}
        </div>
        
        <p className="text-lg text-neutral-600 my-8">{blogPost.text6}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 my-8">
          <span className="font-bold">TAGS:</span>
          {Object.values(blogPost.tags).map((tag, index) => (
            <Link 
              to='/' 
              key={index} 
              className="border border-neutral-300 px-3 py-1 rounded-md hover:bg-neutral-100 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>

        {/* Comments Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">2 Comments</h2>

          <ul className="grid gap-8">
            {[1, 2].map((commentNum) => (
              <li key={commentNum} className="flex flex-col sm:flex-row gap-5 p-6 bg-neutral-50 rounded-lg">
                <div className="flex-shrink-0">
                  <img 
                    src={blogPost[`commentImg${commentNum}`]} 
                    alt={blogPost[`commentName${commentNum}`]} 
                    className="rounded-full w-16 h-16 sm:w-20 sm:h-20 object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
                    <h4 className="text-lg font-medium">{blogPost[`commentName${commentNum}`]}</h4>
                    <div className="flex items-center gap-3">
                      <p className="text-sm text-neutral-600">{blogPost.commentDate}</p>
                      <Link 
                        to="" 
                        className="bg-secodaryClr text-white px-3 py-1 text-sm rounded-lg hover:bg-secodaryClr/90 transition-colors"
                      >
                        Reply
                      </Link>
                    </div>
                  </div>
                  <p className="text-neutral-700">
                    In this challenge, we invite you to unleash your imagination and create incredible webpages and website sections with the Scroll Speed Effect.
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Leave A Comment Form */}
        <div className="mt-16 bg-neutral-50 p-6 md:p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Leave A Comment</h2>
          <p className="mb-6 text-neutral-600">
            Sign in to post your comment or signup if you don't have any account.
          </p>
          
          <form onSubmit={handleCommentSubmit} className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border border-neutral-300 rounded-lg overflow-hidden focus-within:border-primaryClr transition-colors">
                <input
                  type="text"
                  name="name"
                  value={commentForm.name}
                  onChange={handleCommentChange}
                  placeholder="Your Name"
                  className="w-full p-3 outline-none bg-transparent"
                  required
                />
              </div>
              <div className="border border-neutral-300 rounded-lg overflow-hidden focus-within:border-primaryClr transition-colors">
                <input
                  type="email"
                  name="email"
                  value={commentForm.email}
                  onChange={handleCommentChange}
                  placeholder="example@gmail.com"
                  className="w-full p-3 outline-none bg-transparent"
                  required
                />
              </div>
            </div>
            
            <div className="border border-neutral-300 rounded-lg overflow-hidden focus-within:border-primaryClr transition-colors">
              <textarea
                name="message"
                value={commentForm.message}
                onChange={handleCommentChange}
                placeholder="Your comment..."
                className="w-full p-3 outline-none bg-transparent resize-none min-h-[120px]"
                required
              />
            </div>
            
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="saveInfo"
                name="saveInfo"
                checked={commentForm.saveInfo}
                onChange={handleCommentChange}
                className="w-4 h-4"
              />
              <label htmlFor="saveInfo" className="text-sm text-neutral-600">
                Save my name, email, and website in this browser for the next time.
              </label>
            </div>
            
            <button
              type="submit"
              disabled={commentStatus.submitting}
              className="bg-secodaryClr text-white py-3 px-6 mt-3 rounded-lg hover:bg-secodaryClr/90 transition-colors disabled:opacity-70 w-full sm:w-auto"
            >
              {commentStatus.submitting ? 'Posting...' : 'Post Comment'}
            </button>
            
            {commentStatus.error && (
              <p className="text-red-500 text-sm mt-2">{commentStatus.error}</p>
            )}
            {commentStatus.success && (
              <p className="text-green-500 text-sm mt-2">Comment posted successfully!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;