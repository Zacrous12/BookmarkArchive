import { FaTimes } from 'react-icons/fa'

const Bookmark = ({ bookmark, onDelete }) => {
    return (
        <div className={ bookmark } >
            <h3>{bookmark.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(bookmark.id)}
            /></h3>
            <p>{bookmark.url}</p>
            <p>{bookmark.description}</p>
        </div>
    );
}

export default Bookmark;