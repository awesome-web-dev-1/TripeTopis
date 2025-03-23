import Button from "../common/Button";
import { Calendar, MessageCircle, Share2 } from "lucide-react";

const Card = ({ id, imgUrl, title, text, date, comment, share }) => {
  return (
    <li className="border">
      <div>
        <img src={imgUrl} alt={title} />
      </div>
      <div className="px-[25px] pb-6">
        <h4 className="text-[34px] font-medium mt-6 mb-4">{title}</h4>
        <p className="mb-6">{text}</p>
        <div className="border-t border-neutral-700/20 pt-5 flex justify-between items-center flex-wrap gap-5">
          <div className="flex flex-wrap gap-4">
            <span className="flex gap-3 items-center">
              <Calendar /> {date}
            </span>
            <span className="flex gap-3 items-center">
              <MessageCircle /> {comment}
            </span>
            <span className="flex gap-3 items-center">
              <Share2 /> {share}
            </span>
          </div>
          <Button label="Read More" className="btn-primary" path={`/blog/${id}`} />
        </div>
      </div>
    </li>
  );
};

export default Card;