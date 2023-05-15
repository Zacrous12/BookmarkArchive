import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks, onDelete }) => {
  return (
    <>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark} onDelete={onDelete} />
      ))}
    </>
  );
}

export default Bookmarks;
