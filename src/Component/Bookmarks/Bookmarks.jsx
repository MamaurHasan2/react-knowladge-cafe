import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bokmarks, readingTime }) => {
  return (
    <>
      <div className="md:w-1/3 bg-slate-800 my-2 p-2">
        <h3 className="text-red-500 p-2 font-bold">
          Total Reading Time: {readingTime}
        </h3>
        <h2 className="text-3xl text-yellow-300">
          BookMarks:{bokmarks.length}
        </h2>

        {bokmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </>
  );
};

Bookmarks.propTypes = {
  bokmarks: PropTypes.object.isRequired,
  readingTime: PropTypes.number,
};

export default Bookmarks;
