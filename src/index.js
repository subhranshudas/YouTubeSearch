import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB_pLQ4gXZiLTh_Bfwppe85bP0MredCYCk';

const App = () => {
 return ( /* wrap multiline JSX into () */
   <div>
    <SearchBar/>
   </div>
  );
};

ReactDom.render(<App/>, document.querySelector('.container'));
