import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {

  const inputRef = useRef();

  return (
    <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input
            autoFocus
            ref={inputRef}
            required
            id="addItem"
            type='text'
            placeholder="Add Item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />

        <button aria-label="Add item" 
          onClick={() => inputRef.current.focus()}
          type="submit">
          <FaPlus />
        </button>
    </form>
  )
}

export default AddItem