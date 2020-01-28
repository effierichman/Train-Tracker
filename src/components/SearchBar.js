import React from 'react';
import MapboxAutocomplete from 'react-mapbox-autocomplete';

function SearchBar(props) {
  // function suggestionSelect(result, lat, lng, text) {
  //     console.log(result, lat, lng, text)
  //   }


  return (
    <form 
    style={{textAlign: 'center'}}>
      <input type="text" onChange={props.handleChange} />
      <button onClick={props.handleClick} type="button">
        Search
        </button>
      {/* <MapboxAutocomplete publicKey='pk.eyJ1IjoiZWZmaWVyaWNobWFuIiwiYSI6ImNrNXM4cXE1NzBsY24zZW5zc2s5cm1lbjgifQ.aBavEHtl3XOHtrKYGlMRDQ'
                          inputClass='form-control search'
                          onSuggestionSelect={suggestionSelect}
                          country='us'
                          resetSearch={false}/> */}
    </form>
  );
}

export default SearchBar;