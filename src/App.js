import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import { useState, useEffect } from 'react';

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  // console.log('Before UseEffect')

  useEffect(() => {
    console.log('Inside UseEffect')
    localStorage.setItem('shoppinglist', JSON.stringify(items));
  }, [items]);

  // console.log('After UseEffect')

  const handleCheck = (id) => {
      const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item);
      setItems(listItems);
  }

  const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id);
      setItems(listItems);
  }

  const addItem = (itemName) => {
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const myNewItem = {id, checked: false, itemName};
      const listItems = [...items, myNewItem];
      setItems(listItems);
  }

  const handleSubmit = (e) => {
      e.preventDefault();

      if(!newItem) return;
      console.log(newItem);
      addItem(newItem);
      setNewItem('');
  }

  return (
    <div className="App">
      <Header title={"Groceries"} />
      <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
      />
      <SearchItem 
          search={search}
          setSearch={setSearch}
      />
      <Content 
          items={items.filter(item => ((item.itemName).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
      />
      <Footer 
        length={items.length}
      />
    </div>
  );
}

export default App;
