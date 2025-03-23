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
    }
  };

  const currentItems = blogCardItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="container">
      <ul className="grid gap-10">
        {currentItems.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </ul>

      <div className="flex gap-4 my-20 flex-wrap">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          <ChevronLeft />
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`w-10 h-10 grid place-content-center ${
              currentPage === i + 1 ? "bg-primaryClr text-white" : "text-neutral-800"
            }`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Blog;