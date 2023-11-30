import React from 'react';
import { FlatList, ScrollView, Text, View, StyleSheet } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

// import Todo from '../../components/TodosAppCpn/Todo';
import ServiceItemListDetail from '../../components/KamiSpaAppCpn/ServiceItemListDetail';
import { firebaseStore, FIRE_BASE_AUTH } from '../../firebase/firebaseConfig';
const userProfile = FIRE_BASE_AUTH;
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const hour = today.getHours();
const minute = today.getMinutes().toString().padStart(2, '0');
const second = today.getSeconds();

function ServiceDetail() {
  const [textInputTodo, setTextInputTodo] = React.useState(); //use the useState hook here, and update state every time the text changes via the onChangeText prop from the TextInput component.

  const ref = firebaseStore.firestore().collection('KamiSpa-db'); //create a reference to the collection, which can be used throughout our component to query it.

  const [loading, setLoading] = React.useState(true); //We need a loading state to indicate to the user that the first connection (and initial data read) to Cloud Firestore has not yet completed.
  const [todos, setTodos] = React.useState([]); //manng luu nhieu cong viec

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

      setTodos(list);

      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  // ...

  // Create a new function in our component called addTodo. This method will use our existing ref variable to add a new item to the Firestore database.
  async function addService() {
    // Kiểm tra xem ServiceName có tồn tại trong Firestore hay không
    const serviceExists = await firebaseStore
      .firestore()
      .collection('KamiSpa-db')
      .where('ServiceName', '==', textInputTodo)
      .get();

    // Nếu ServiceName đã tồn tại, thông báo cho người dùng và không thêm mới
    if (!serviceExists.empty || !textInputTodo.trim()) {
      alert('Chưa nhập ServiceName hoặc ServiceName đã tồn tại!');
      return;
    }
    await ref.add({
      ServiceName: textInputTodo,
      price: 1,
      Creator: 'Admin Toan',
      Time: `${day}/${month}/${year} ${hour}:${minute}:${second}`,
      FinalUpdate: `${day}/${month}/${year} ${hour}:${minute}:${second}`,
    });

    // Đặt giá trị của biến todo thành chuỗi rỗng.
    setTextInputTodo('');
  }

  if (loading) {
    return null; // or a spinner
  }

  return (
    <View style={styles.container}>
      <Appbar style={{ width: '100%', backgroundColor: 'rgb(239, 80, 107)' }}>
        <Appbar.Content title={userProfile?.currentUser?.displayName} color="rgb(255, 255, 255)" />
      </Appbar>
      <Text style={styles.txtHeader}>Chi tiết danh sách dịch vụ</Text>

      <FlatList
        style={styles.FlatList}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ServiceItemListDetail {...item} />}
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

// {/* <Button
//           mode="text"
//           style={styles.Button}
//           // icon="plus-circle"
//           fontSize="20"
//           onPress={addTodo}>
//           +
//         </Button> */}
