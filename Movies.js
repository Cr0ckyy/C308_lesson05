// React is required  to be imported
import React from 'react';

// Import Statements
// Every Native-provided module  used need to be  explicitly imported
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native'; // React is required  to be imported

// Can contain many values
// Values are written as name:value pairs (name and value separated  by a colon)
// Use names to access its “members”.
const movie = {
  title: 'Doctor Sleep',
  year: '2019',
};

// Array Elements can be Objects
const MOVIE_DATA = [
  {
    title: 'Doctor Sleep',
    year: '2019',
    poster: require('./img/doctor-sleep.jpg'),
  },

  {
    title: 'Midway',
    year: '2019',
    poster: require('./img/midway.jpg'),
  },
];

const MovieList = () => {
  return MOVIE_DATA.map((data) => (
    // JSX is mandatory Components such as <View>
    // are the the basic building blocks in React Native
    <View style={styles.Container}>
      {/*red*/}
      {/* eslint-disable-next-line no-undef */}
      <Text style={styles.bigRed}>
        {data.title} {'\n'}
      </Text>

      {/*blue*/}
      {/* eslint-disable-next-line no-undef */}
      <Text style={[styles.bigBlue]}>
        {data.year} {'\n'}
      </Text>
      <Image
        source={data.poster}
        style={[styles.BorderClass, styles.Container]}
      />
    </View>
  ));
};

class Movie extends React.Component {
  render() {
    return (
      <Text>
        {movie.title} {'\n'} {movie.year}{' '}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  bigRed: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
  },
  BorderClass: {
    // Setting up image width.
    width: 300,

    // Setting up image height.
    height: 220,

    // Set border width.
    borderWidth: 5,

    // Set border color.
    borderColor: 'lime',
  },

  Container: {
    flex: 1,

    // Set content's vertical alignment.
    justifyContent: 'center',

    // Set content's horizontal alignment.
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

export {MovieList};
