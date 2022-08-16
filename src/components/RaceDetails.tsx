import React, {useEffect, useState} from 'react';
import {
  Alert,
  LayoutAnimation,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Provider, useSelector} from 'react-redux';
import {RootState} from '../redux/store';

const RaceDetails = ({item, list, key}) => {
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const [contentData, setContentData] = useState(list);

  const ExpandableView = ({item, onClick}) => {
    const [height, setHeight] = useState(0);
    useEffect(() => {
      if (item.isExpanded) {
        setHeight(null);
      } else {
        setHeight(0);
      }
    }, [item.isExpanded]);

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          onClick;
        }}>
        <Text style={styles.itemText}>{item.tracks[0]}</Text>
        <View style={{height: height, overflow: 'hidden'}}>
          {item.tracks.map((item, key) => (
            <TouchableOpacity key={key} style={styles.content}>
              <Text style={styles.text}>
                {key}. {item.betId}
              </Text>
              <View style={styles.separator} />
            </TouchableOpacity>
          ))}
        </View>
      </TouchableOpacity>
    );
  };

  const updateLayout = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...contentData];
    array.map((value, placeIndex) =>
      placeIndex === index
        ? (array[placeIndex]['isExpanded'] = !array[placeIndex]['isExpanded'])
        : (array[placeIndex]['isExpanded'] = false),
    );

    setContentData(array);
  };

  return (
    <ScrollView>
      <View style={{backgroundColor: 'red'}}>
        {list.map((item, key) => (
          <ExpandableView
            key={item.betId}
            item={item}
            onClick={() => {
              updateLayout(key);
            }}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'orange',
    padding: 20,
  },
  itemText: {
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
    padding: 10,
  },
  separator: {
    height: 0.5,
    backgroundColor: '#c8c8c8',
    width: '100%',
  },
});
/*  let currentGames = useSelector((state: RootState) => {
    return state.data.raceArrays;
  });
  let showModal = useSelector((state: RootState) => {
    return state.data.show;
  });
  const [showDtails, setShowDetails] = useState<boolean>(false); */
/*
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          // setModalVisible(!modalVisible);
          setShowDetails(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={[styles.mainText]}>{currentGames[0].raceName}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => console.log('someone pressed me')}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};
*/
/*
const styles = StyleSheet.create({
  wrap: {
    padding: 20,
    margin: 20,
    borderRadius: 8,
    backgroundColor: '#2D3953',
    shadowColor: '#40488F',
    shadowOffset: {
      width: 8.4,
      height: 8.4,
    },
    shadowOpacity: 0.7,
    shadowRadius: 30,
    elevation: 10,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainText: {
    fontSize: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
*/
export default RaceDetails;

//{
/* <View style={[styles.container, styles.center]}>
      <View style={[styles.wrap]}>
        <Text style={[styles.mainText]}>{currentGames[0].raceName}</Text>
      </View>
    </View> */
//}
