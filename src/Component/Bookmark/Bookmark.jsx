import PropTypes from "prop-types";
const Bookmark = ({ bookmark }) => {
  console.log(bookmark);
  const { title } = bookmark;
  return (
    <div className="bg-slate-800 m-3">
      <h3 className="text-xl p-4 bg-red-200 mb-3 rounded-xl">{title}</h3>
    </div>
  );
};
Bookmark.propTypes = {
  bookmark: PropTypes.func,
};

export default Bookmark;
