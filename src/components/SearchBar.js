import React from 'react';
import MapboxAutocomplete from 'react-mapbox-autocomplete';

function SearchBar(props) {

                        
  return (
    <form 
    style={{textAlign: 'center'}}>
      <input type="text" onChange={props.handleChange} />
      <button onClick={props.handleClick} type="button">
        Search
        </button>
    
    </form>
  );
}

export default SearchBar;