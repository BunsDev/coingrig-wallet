import {Platform, StyleSheet} from 'react-native';
import {Colors} from 'utils/colors';
import {SIZE} from 'utils/constants';

export const styles = StyleSheet.create({
  scrollview: {marginTop: 15, marginHorizontal: 0},
  scrollviewDetails: {marginTop: 0, marginHorizontal: 0},
  header: {
    backgroundColor: Colors.darker,
    minHeight: 20,
    marginBottom: 20,
  },
  collapse: {
    position: 'absolute',
    zIndex: 10,
    right: 5,
    backgroundColor: Colors.darker,
    padding: 5,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: Colors.lighter,
  },
  image: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: {
    color: Colors.foreground,
    fontSize: 22,
    fontWeight: 'bold',
  },
  desc: {
    color: Colors.lighter,
    fontSize: 12,
    marginTop: 4,
    lineHeight: 18,
  },
  cameracontainer: {
    height: SIZE.height / 1.7,
    margin: 10,
    backgroundColor: 'black',
  },
  fab: {
    position: 'absolute',
    zIndex: 2,
    bottom: Platform.OS === 'android' ? 20 : 40,
    width: 60,
    height: 60,
    left: SIZE.width / 2 - 30,
    justifyContent: 'center',
    backgroundColor: 'orange',
    padding: 5,
    borderRadius: 200,
    alignContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  fab2: {
    position: 'absolute',
    zIndex: 2,
    bottom: Platform.OS === 'android' ? 20 : 40,
    width: 140,
    height: 50,
    left: SIZE.width / 2 - 70,
    justifyContent: 'center',
    backgroundColor: 'orange',
    padding: 5,
    borderRadius: 200,
    alignContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
