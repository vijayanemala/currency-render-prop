import React from 'react';
import Amount  from './components/Amount';
import Pound  from './components/Pound';
import Euro  from './components/Euro';

const App = () => (
  <Amount>
    {amount => (
      <div>
        <Pound amount={amount} />
        <Euro amount={amount} />
      </div>
    )}
  </Amount>
);
export default App;