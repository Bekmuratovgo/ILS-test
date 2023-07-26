import React from 'react';
import Map from './components/Map';
import RouteList from './components/RouteList';

const App = () => {
  return (
    <div>
      <h1>Routes</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1', paddingRight: '20px' }}>
          <RouteList />
        </div>
        <div style={{ flex: '2' }}>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default App;
