import PropTypes from "prop-types";
import { RiBookmark3Fill } from "react-icons/ri";

const Blog = ({ blog, handleAddToBookmark, handleReadingTime }) => {
  const {
    title,
    cover_pic_link,
    author_name,
    author_profile_link,
    hashtags,
    submit_date,
    reading_time,
  } = blog;
  console.log(blog);
  return (
    <div className="">
      <img
        className="rounded"
        src={cover_pic_link}
        alt={`Cover Picture of the title ${title}`}
      />
      <div className="flex justify-between">
        <div className="flex">
          <img
            className="w-14 my-5 rounded-full"
            src={author_profile_link}
            alt=""
          />
          <div className="ml-6 p-5">
            <h4>{author_name}</h4>
            <h4>{submit_date}</h4>
          </div>
        </div>
        <div>
          <span>{reading_time}minute read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="m-2 text-3xl text-red-600"
          >
            <RiBookmark3Fill />
          </button>
        </div>
      </div>

      <h3 className="text-4xl text-left">{title}</h3>
      <h5 className="text-left text-blue-600">{hashtags}</h5>
      <button
        onClick={() => handleReadingTime(reading_time)}
        className="text-left text-blue-800 font-bold underline"
      >
        Mark as Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleReadingTime: PropTypes.func,
};

export default Blog;
