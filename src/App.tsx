import * as React from 'react';
import './App.css';

import SearchBar from './SearchBar';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
