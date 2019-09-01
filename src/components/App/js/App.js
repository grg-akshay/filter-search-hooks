import React, { useState, useEffect } from 'react';

import Input from '../../Input/js/Input';
import '../styles/App.scss';


function handleFetchErrors(resp) {
  if (!resp.ok) {
    throw Error(resp.statusText);
  }
  return resp;
}

function App() {
  const [value, setValue] = useState(''),
    [list, setList] = useState([]),
    [filteredList, setFilteredList] = useState([]),
    handleChange = (e) => {
      let text, newList=list;
      setValue(e.target.value);
      text = e.target.value.toLowerCase();
      

      // filter the list only if text present
      // this is essential when the user backspaces the filter value
      if (e.target.value.length > 0) {
        newList=list.filter((item) => {
          return item.toLowerCase().match(text);
        })
      }
      
      setFilteredList(newList);
    }

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/anonymous/1295788c7bff052a1e8a/raw/6e109604c7a7f3efe77c8048bb2fe2f3e1cdcb7b/gistfile1.json')
      .then(handleFetchErrors)
      .then((resp) => resp.json())
      .then((jsonResponse) => {
        const values=jsonResponse.Reggae;
        setList(values);
        setFilteredList(values);
      })
  }, []);
 
  return (
    <div className='app'>
      <header className='app__header'>
        Search filter using React hooks!
      </header>
      <hr />
      <Input value={value} onChange={handleChange}/>
      <div className='app__list'>
        {
          filteredList.map((item, index) => <p key={index}>{item}</p>)
        }
      </div>
    </div>
  );
}


export default App;
