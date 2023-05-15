import { useState } from 'react';

const AddBookmark = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert('Please add a title');
      return;
    }

    if (!url) {
      alert('Please add a URL');
      return;
    }

    onAdd({ title, url, description });

    setTitle('');
    setUrl('');
    setDescription('');
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add Title"
        />
      </div>
      <div className="form-control">
        <label>URL</label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Add URL"
        />
      </div>
      <div className="form-control">
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add Description"
        />
      </div>
      <input type="submit" value="Save Bookmark" className="btn btn-block" />
    </form>
  );
};

export default AddBookmark;
