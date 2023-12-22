import React from 'react';
import { FlatList, ScrollView, Text, View, StyleSheet } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';

import Todo from '../../components/TodosAppCpn/Todo';
import { firebaseStore } from '../../firebase/firebaseConfig';

function Todos() {
  const [textInputTodo, setTextInputTodo] = React.useState(''); //use the useState hook here, and update state every time the text changes via the onChangeText prop from the TextInput component.

  const ref = firebaseStore.firestore().collection('todos'); //create a reference to the collection, which can be used throughout our component to query it.

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
        const { title, complete } = doc.data();
        list.push({
          id: doc.id,
          title,
          complete,
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
  async function addTodo() {
    // Sử dụng cú pháp async/await để thực hiện một tác vụ  bất đồng bộ. Tác vụ bất đồng bộ là tác vụ không thể hoàn thành ngay lập tức. Thay vào đó, nó sẽ được thực hiện trong nền và trả về kết quả sau khi hoàn thành.
    //await cho phép đợi cho đến khi tác vụ thêm mục mới vào danh sách công việc hoàn thành.
    await ref.add({
      // Thêm các thuộc tính cho todo mới.
      title: textInputTodo,
      complete: false,
    });

    // Đặt giá trị của biến todo thành chuỗi rỗng.
    setTextInputTodo('');
  }

  // ...

  if (loading) {
    return null; // or a spinner
  }

  return (
    <View style={styles.container}>
      <Appbar style={{ paddingTop: 30 }}>
        <Appbar.Content title="TODOs List" />
      </Appbar>
      {/* <ScrollView style={{flex: 1}}> */}
      <FlatList
        style={styles.FlatList}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Todo {...item} />}
      />
      {/* <Text>List of TODOs!</Text> */}
      {/* </ScrollView> */}
      <TextInput
        style={styles.TextInput}
        label="New Todo"
        value={textInputTodo}
        onChangeText={setTextInputTodo}
      />
      <Button
        mode="contained"
        style={styles.Button}
        // Update our button onPress to call this new addTodo method:
        onPress={addTodo}>
        Add TODO
      </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  FlatList: {
    flex: 1,
    alignSelf: 'flex-start',
    backgroundColor: 'white',
  },
  TextInput: {
    width: '100%',
  },
  Button: {
    marginVertical: 20,
  },
});
export default Todos;
