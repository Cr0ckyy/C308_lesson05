// React is required  to be imported
import React from 'react';

import {MovieList} from './Movies.js';
// import {BoatsList} from './Boats.js';

// Every Native-  provided module  used need to be  explicitly imported
import {View, Text, Image, ScrollView} from 'react-native';

const App: () => React$Node = () => {
  return (
    // <ScrollView>: A generic scrolling container that can host multiple  components and views.
    <ScrollView>
      {/*a built-in component for displaying text*/}
      <Text>Lesson 05 Exercise</Text>

      <Text>Get A Boat - For Sale</Text>
      {/*<BoatsList />*/}
      <MovieList />
    </ScrollView>
  );
};

export default App;
