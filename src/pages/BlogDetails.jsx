import { useParams } from "react-router-dom";
import { blogDetailsItem } from "../constant/data";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const blogPost = blogDetailsItem.find((item) => item.id.toString() === id);

  if (!blogPost) {
    return <h2 className="text-center text-red-500">Blog post not found</h2>;
  }

  return (
    <section className="container">
      <div>
        <img src={blogPost.imgUrl} alt={blogPost.title} />
      </div>
      <div className="p-6">
        <h2 className="text-[36px] font-semibold">{blogPost.title}</h2>
        <p className="mt-4 mb-6">{blogPost.text1}</p>
        <p>{blogPost.text2}</p>
        <h3 className="mt-6 mb-4 text-2xl font-medium">{blogPost.title2}</h3>
        <p className="mb-6">{blogPost.text3}</p>
        <div className="my-6 border-b-[8px] border-b-primaryClr px-8 py-6">
          <p className="mb-4">{blogPost.text4}</p>
          <p className="mb-3">{blogPost.name}</p>
        </div>
        <h3 className="text-2xl font-medium">{blogPost.title3}</h3>
        <p className="mt-4 mb-6">{blogPost.text5}</p>
        <div className="grid gap-[66px] grid-cols-3">
          {[blogPost.imgUrl, blogPost.imgUrl2, blogPost.imgUrl3].map((src, index) => (
            <img key={index} src={src} alt={`blog-${index}`} />
          ))}
        </div>
        <p className="my-6">{blogPost.text6}</p>
        <div className="flex flex-wrap gap-4">
          <h3 className="font-bold">TAGS:</h3>
          {Object.values(blogPost.tags).map((tag, index) => (
            <Link to='/' key={index} className="border border-neutral-700 px-4 py-[5px] rounded-[4px]">{tag}</Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
