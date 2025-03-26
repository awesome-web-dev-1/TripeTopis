import { useState } from "react";
import { blogCardItems } from "../constant/data";
import Card from "../components/blog/Card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(blogCardItems.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const currentItems = blogCardItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="container py-12">
      {/* Blog Posts Grid */}
      <ul className="grid gap-10 md:gap-12">
        {currentItems.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-2 my-20">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous page"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex gap-2 mx-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                currentPage === i + 1
                  ? "bg-primaryClr text-white"
                  : "text-neutral-800 hover:bg-gray-100"
              }`}
              onClick={() => handlePageChange(i + 1)}
              aria-label={`Go to page ${i + 1}`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next page"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Blog;