import React from 'react';

//Every Native-  provided module  used need to be  explicitly imported
import {StyleSheet, View, Text, Image} from 'react-native';

const PRODUCTS_DATA = [
  {
    name: 'Sea Ray 500 Sundancer',
    description:
      'Contoured lines and dramatic styling reveal a refined, powerful presence that will take your breath away.',
    picture: require('./img/sea_ray.jpg'),
  },
  {
    name: 'Four Winns Horizon 180',
    description:
      'A sporty look and refined details truly set the Horizon 180 above all others.',
    picture: require('./img/four_winns.jpg'),
  },
  {
    name: 'Flipper 640 ST',
    description:
      'A modern take on the classic, traditional hardtop and perfect for a family picnic.',
    picture: require('./img/flipper.jpg'),
  },
  {
    name: 'Princess V48',
    description:
      'There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.',
    picture: require('./img/princess.jpg'),
  },
  {
    name: 'Bayliner 175 Bowrider',
    description:
      'Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.',
    picture: require('./img/bayliner.jpg'),
  },
  {
    name: 'Fairline Targa 47',
    description:
      'Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.',
    picture: require('./img/fairline.jpg'),
  },
];

export const BoatsList = () => {
  return PRODUCTS_DATA.map((data) => (
    <View style={styles.Container}>
      {/*red*/}
      <Text style={styles.bigRed}>
        {data.name}
        {'\n'}
      </Text>
      {/*blue*/}
      <Text style={styles.bigBlue}>
        {data.description}
        {'\n'}
      </Text>
      {/*<Image>:	a	built-in	component	for	displaying	different	types	of  images*/}
      <Image source={data.picture} style={styles.BorderClass} />
      <Text>{'\n'}</Text>
    </View>
  ));
};

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
