import React from 'react';
import { List } from 'react-native-paper';

import { firebaseStore } from '../../firebase/firebaseConfig';

function Todo({ id, title, complete }) {
  async function toggleComplete() {
    await firebaseStore.firestore().collection('todos').doc(id).update({
      complete: !complete,
    });
  }

  return (
    <List.Item
      title={title}
      onPress={() => toggleComplete()}
      left={(props) => (
        <List.Icon
          {...props}
          // icon='folder'
          icon={complete ? 'checkbox-marked-outline' : 'cancel'}
          color={complete ? 'green' : 'red'}
        />
      )}
    />
  );
}

export default React.memo(Todo);
