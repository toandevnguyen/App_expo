import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { List } from 'react-native-paper';

import { firebaseStore } from '../../firebase/firebaseConfig';

function ServiceItemList({ id, ServiceName, price }) {
  const [onPressItem, setOnPressItem] = React.useState(false);
  // async function toggleComplete() {
  //   await firebaseStore.firestore().collection('KamiSpa-db').doc(id).update({
  //     // complete: !complete,
  //   });
  // }

  return (
    <View style={styles.contactInfo}>
      <List.Item
        title={ServiceName}
        titleStyle={{ alignSelf: 'flex-start', color: 'rgb(0, 0, 0)' }}
        right={() => <Text style={{ alignSelf: 'flex-end' }}>{price}</Text>}
        // titleStyle={{ flex: 1 }}
        // right={() => <Text style={{ textAlign: 'right' }}>{price}</Text>}

        onPress={() => setOnPressItem(!onPressItem)}
        left={(props) => (
          <List.Icon
            {...props}
            icon={onPressItem ? 'checkbox-marked' : 'checkbox-blank-outline'}
            color="rgb(239, 80, 107)"
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
  },
  contactInfo: {
    flex: 1,

    // flexDirection: 'row',
    margin: 5,
    // alignItems: 'center',
    // paddingTop: 16,
    // paddingBottom: 16,
    // paddingRight: 24,
    // borderBottomColor: 'rgb(0, 0, 0)',
    // borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgb(99, 9, 9)',
    borderWidth: 1,
    borderRadius: 10,
    // backgroundColor: 'rgb(198, 125, 125)',
  },
  title: {
    flex: 1,
    textAlign: 'left',
  },

  right: {
    flex: 1,
    textAlign: 'right',
  },
});
export default React.memo(ServiceItemList);
