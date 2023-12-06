import React from 'react';
import { FlatList, ScrollView, Text, View, StyleSheet } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

// import Todo from '../../components/TodosAppCpn/Todo';
import ServiceItemDetail from '../../components/KamiSpaAppCpn/ServiceItemDetail';
import { firebaseStore, FIRE_BASE_AUTH } from '../../firebase/firebaseConfig';
const userProfile = FIRE_BASE_AUTH;

function ServiceDetail() {
  const ref = firebaseStore.firestore().collection('KamiSpa-db'); //create a reference to the collection, which can be used throughout our component to query it.

  const [loading, setLoading] = React.useState(true); //We need a loading state to indicate to the user that the first connection (and initial data read) to Cloud Firestore has not yet completed.
  const [service, setService] = React.useState([]); //manng luu nhieu cong viec

  // ...
  //Đây là một hook trong React, cho phép bạn thực hiện các hiệu ứng phụ sau khi render.
  React.useEffect(() => {
    //Đây là hàm callback được gọi sau khi component render. Nó sẽ thiết lập một lắng nghe sự kiện từ Firestore.
    //Sử dụng phương thức onSnapshot của Firestore để lắng nghe thay đổi dữ liệu (thêm, xóa, cập nhật).
    //ref.onSnapshot((querySnapshot) => { ... }): Phương thức onSnapshot của Firestore cho phép bạn lắng nghe sự thay đổi dữ liệu từ Firestore. Khi có sự thay đổi, nó sẽ gọi hàm callback với querySnapshot là đối tượng chứa dữ liệu mới.
    return ref.onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        const { ServiceName, price, Creator, Time, FinalUpdate } = doc.data();
        list.push({
          id: doc.id,
          ServiceName,
          price,
          Creator,
          Time,
          FinalUpdate,
        });
      });

      setService(list);

      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  // ...

  return (
    <View style={styles.container}>
      <Appbar style={{ width: '100%', backgroundColor: 'rgb(239, 80, 107)' }}>
        <Appbar.Content title={userProfile?.currentUser?.displayName} color="rgb(255, 255, 255)" />
      </Appbar>
      <Text style={styles.txtHeader}>Chi tiết danh sách dịch vụ</Text>

      <FlatList
        style={styles.FlatList}
        data={service}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ServiceItemDetail {...item} />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'rgb(88, 210, 123)',
  },
  txtHeader: {
    marginVertical: 10,
    color: 'rgb(239, 80, 107)',
    fontWeight: 'bold',
    fontSize: 27,
  },
  groupTxtTitle: {
    // flexWrap:'wrap'
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'stretch',
    padding: 10,
    // alignContent: 'space-between',

    // backgroundColor: 'rgb(48, 98, 248)',
    // marginHorizontal,
  },
  txtTitle: {
    // backgroundColor: 'rgb(239, 80, 107)',

    color: 'rgb(0, 0, 0)',
    fontWeight: 'bold',
    fontSize: 20,
    // alignSelf: '',
  },
  Button: {
    // marginVertical: 20,
    // margin: 10,
    // alignSelf: 'flex-end',

    backgroundColor: 'rgb(239, 80, 107)',
    // borderRadius: 100,
  },
  FlatList: {
    flex: 1,
    alignSelf: 'stretch',
    // backgroundColor: 'rgb(201, 237, 40)',
  },
  TextInput: {
    width: '100%',
    backgroundColor: 'rgb(255, 255, 255)',
  },
});
export default ServiceDetail;
