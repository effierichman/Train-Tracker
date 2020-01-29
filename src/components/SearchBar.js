import React from 'react';
import MapboxAutocomplete from 'react-mapbox-autocomplete';

function SearchBar(props) {
  // function suggestionSelect(result, lat, lng, text) {
  //     console.log(result, lat, lng, text)
  //   }

{/* <div>
                        const geocoder = new MapboxGeocoder({  
                            accessToken: mapboxgl.pk.eyJ1IjoiZWZmaWVyaWNobWFuIiwiYSI6ImNrNXM4cXE1NzBsY24zZW5zc2s5cm1lbjgifQ.aBavEHtl3XOHtrKYGlMRDQ, // Set the access token
                            mapboxgl: mapboxgl, // Set the mapbox-gl instance
                            marker: false, // Do not use the default marker style
                            placeholder: 'Search for places in New York City', // Placeholder text for the search bar
                            bbox: [-122.30937, 37.84214, -122.23715, 37.89838], // Boundary for Berkeley
                            proximity: {
                              longitude: -73.95806670661364
                              latitude: 40.800581558114956
                            } // Coordinates of UC Berkeley
                          });
                          </div> */}
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