import { useRef } from 'react';

const AddItemForm = ({ addItem }) => {
  const itemInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!itemInput.current.value) return;
    addItem(itemInput.current.value);
    event.currentTarget.reset();
  };

  return (
    <form
      className="add-item-form"
      onSubmit={(event) => handleSubmit(event)}
    >
      <input
        type="text"
        ref={itemInput}
        placeholder="Enter an item's name"
      />
      <input type="submit" value="Add item" />
    </form>
  );
};

export default AddItemForm;
