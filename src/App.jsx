import { useState } from "react";
import "./App.css";
import Blogs from "./Component/Blogs/Blogs";
import Bookmarks from "./Component/Bookmarks/Bookmarks";
import Header from "./Component/Header/Header";

function App() {
  const [bokmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmark = [...bokmarks, blog];
    setBookmarks(newBookmark);
  };

  const handleReadingTime = (time) => {
    setReadingTime(readingTime + time);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleReadingTime={handleReadingTime}
        ></Blogs>
        <Bookmarks bokmarks={bokmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
