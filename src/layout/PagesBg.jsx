import { Link, useLocation } from "react-router-dom";

const PagesBg = () => {
  const location = useLocation();
  const path = location.pathname;

  const paths = {
    "/blog": "Blog",
    "/destination": "Destination",
    "/faq": "FAQ",
    "/pricing": "Pricing",
    "/about": "About",
    "/contact": "Contact",
    "/teams&condition": "Teams & Condition",
    "/signup": "Sign Up",
    "/terms&condition": "Terms & condition",
  };

  let pageTitle = "Error";

  if (paths[path]) {
    pageTitle = paths[path];
  } else if (path.startsWith("/blog/")) {
    pageTitle = "Blog Details";
  } else if (path.startsWith("/destination/")) {
    pageTitle = "Destination Details";
  }

  return (
    <section className="bg-[url(/images/pages-bg.png)] bg-center bg-cover py-[150px] min-h-[450px]">
      <div className="container grid place-content-center text-white text-center pt-[50px]">
        <h2 className="text-white mb-2">{pageTitle}</h2>
        <p>
          <Link to="/" className="text-white">Home</Link>
          <span className="bg-primaryClr w-3 h-3 inline-block rounded-full mx-2"></span>
          <span className="text-primaryClr">{pageTitle}</span>
        </p>
      </div>
    </section>
  );
};

export default PagesBg;
