import { useState } from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';

const Item = ({ id, name, removeItem, editItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const handleSaveEdit = () => {
    if (!editedName) return;
    editItem(id, editedName);
    setIsEditing(false);
  };

  return (
    <div className="item">
      {!isEditing && (
        <button
          className="remove-item"
          onClick={() => removeItem(id)}
        />
      )}
      {isEditing ? (
        <>
          <input
            className="edit-input"
            type="text"
            value={editedName}
            onChange={(event) => setEditedName(event.target.value)}
            onKeyDown={(event) =>
              event.key === 'Enter' && handleSaveEdit()
            }
            autoFocus
          />
          <button className="save-item" onClick={handleSaveEdit}>
            Save
          </button>
        </>
      ) : (
        <>
          <span className="item-name">{name}</span>
          <button
            className="edit-item"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </>
      )}

      <Counter />
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

export default Item;
