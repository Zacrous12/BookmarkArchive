import Header from "./components/Header";
import Bookmarks from "./components/Bookmarks";
import { useState } from 'react'
import AddBookmark from "./components/AddBookmark";
import Bookmark from "./components/Bookmark";

const App = () => {
  const [showAddBookmark, setShowAddBookmark] = useState(false)
  const [bookmarks, setBookmarks] = useState([
    {
        id: 1,
        title: 'Google',
        url: 'https://www.google.com',
        description: 'Search engine',
    },
    {
        id: 2,
        title: 'Hacker News',
        url: 'https://news.ycombinator.com/',
        description: 'Tech news site',
    },
    {
        id: 3,
        title: 'GitHub',
        url: 'https://www.github.com',
        description: 'Version control platform',
    }
  ])

  // Add
  const addBookmark = (bookmark) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newBookmark = { id, ...bookmark }
    setBookmarks([...bookmarks, newBookmark])
  }

  // Delete 
  const deleteBookmark = (id) => {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id))
  }

  return (
    <div className="container">
      <Header 
        onAdd={() => setShowAddBookmark(!showAddBookmark)} 
        showAdd={showAddBookmark} 
      />
      {showAddBookmark && <AddBookmark onAdd={addBookmark}/>}
      {bookmarks.length > 0 ? (
        <Bookmarks bookmarks={bookmarks} onDelete={deleteBookmark} />
      ) : (
        'No Bookmarks!'
      )}
    </div>
  );
}

export default App;
