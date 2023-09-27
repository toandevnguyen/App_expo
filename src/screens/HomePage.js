import * as React from "react";
import { ScrollView, StyleSheet, View, SectionList } from "react-native";
import {
  BottomNavigation,
  Text,
  Button,
  TextInput,
  HelperText,
  List,
  MD3Colors,
} from "react-native-paper";

import HomeScreen from "./HomeScreen";

import { SafeAreaView } from "react-native-safe-area-context";
//import { SafeAreaProvider } from "react-native-safe-area-context";
//import { ScrollView } from "react-native-web";
// import Icon from '@mdi/react';
// import { mdiEarth } from '@mdi/js';

const Pj1HeloWorld = () => {
  return (
    // <SafeAreaView>
    <View style={styles.ViewStype}>
      <Text>Helloo world</Text>
    </View>
    // </SafeAreaView>
  );
};

const Pj2CapTaps = () => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.Button}
        icon="cursor-default-click"
        mode="contained-tonal"
        onPress={() => alert("Xin chao ")}
      >
        Click me!
      </Button>
    </View>
  );
};

const Pj3CusComs = () => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.Button}
        icon="hand-peace"
        mode="contained-tonal"
        onPress={() => alert("Hello!")}
      >
        Say Hello!
      </Button>

      <Button
        style={styles.Button}
        icon="hand-wave"
        mode="contained-tonal"
        onPress={() => alert("Goodbye")}
      >
        Say Goodbye!
      </Button>
    </View>
  );
};

const Pj4StateProps = () => {
  const [pressCount, setPressCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text style={{ alignSelf: "center" }}>
        Ban da nhan nut: {pressCount} lan
      </Text>
      <Button
        style={styles.Button}
        mode="contained-tonal"
        onPress={() => setPressCount(pressCount + 1)}
      >
        Bạn đã bấm tôi {pressCount} lần
      </Button>
    </View>
  );
};

const Pj5FlexBox = () => {
  const Square = ({ text, bgColor }) => (
    <View
      style={[
        styles.box,
        {
          backgroundColor: bgColor,
        },
      ]}
    >
      <Text>{text}</Text>
    </View>
  );

  return (
    <View style={styles.containerPj5}>
      <Square text="Square 1" bgColor={"yellow"} />
      <Square text="Square 3" bgColor="rgb(24, 188, 78)" />
      <Square text="Square 2" bgColor="rgb(218, 41, 41)" />
    </View>
  );
};

const Pj6ScrollView = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const Square = ({ text, bgColor = "rgb(196, 23, 130)" }) => (
    <SafeAreaView>
      <View
        style={[
          styles.box,
          {
            backgroundColor: bgColor,
          },
        ]}
      >
        <Text>{text}</Text>
      </View>
    </SafeAreaView>
  );

  return (
    <ScrollView>
      {/* <View style={styles.container}> */}
      {data.map((item, index) => (
        <Square key={item} text={`Square ${index + 1}`} />
      ))}
      {/* </View> */}
    </ScrollView>
  );
};

const Pj7TextInput = () => {
  const [userNameInput, setUserNameInput] = React.useState("");
  return (
    <View style={styles.containerPj7}>
      <Text style={styles.Text}>What is your name?</Text>
      <TextInput
        style={{ margin: 10 }}
        label={"Your Name"}
        placeholder="Vd: Nguyen Duy Toan"
        placeholderTextColor={"green"}
        textColor="green"
        value={userNameInput}
        onChangeText={(textInput) => setUserNameInput(textInput)}
      />

      <Button
        style={styles.Button}
        icon={"send"}
        mode="contained-tonal"
        onPress={() => {
          alert(`Hello, ${userNameInput}`);
        }}
      >
        Reply
      </Button>
    </View>
  );
};

const Pj8ScrollView = () => {
  const PEOPLE = [
    {
      name: {
        title: "Mr",
        first: "Nguyen Duy",
        last: "Toan",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Tran Van",
        last: "Huu",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Nguyen Van A",
        last: "A",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Maeva",
        last: "Scott",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Maeva",
        last: "Scott",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Maëlle",
        last: "Henry",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Mohamoud",
        last: "Faaij",
      },
    },
  ];
  const groupPeopleByLastName = (_data) => {
    const data = [..._data];
    const groupedData = data.reduce((accumulator, item) => {
      const group = item.name.last[0].toUpperCase();
      if (accumulator[group]) {
        accumulator[group].data.push(item);
      } else {
        accumulator[group] = {
          title: group,
          data: [item],
        };
      }
      return accumulator;
    }, {});
    const sections = Object.keys(groupedData).map((key) => {
      return groupedData[key];
    });
    return sections.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      }
      return -1;
    });
  };

  return (
    <SafeAreaView>
      <SectionList
        sections={groupPeopleByLastName(PEOPLE)}
        keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
        renderSectionHeader={({ section }) => {
          return (
            <View style={styles.sectionHeader}>
              <Text>{section.title}</Text>
            </View>
          );
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.name}>
                {item.name.first} {item.name.last}
              </Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

const Pj9Drawer = () => {
  return (
    <View style={styles.containerPj9}>
      <Text>abc</Text>
    </View>
  );
};

const Pj10HelperText = () => {
  const [text, setText] = React.useState("");
  const onChangeText = (text) => setText(text);
  const hasErrors = () => {
    return !text.includes("@");
  };

  return (
    <SafeAreaView>
      <View>
        <TextInput label="Email" value={text} onChangeText={onChangeText} />
        <HelperText type="error" visible={hasErrors()}>
          Email address is invalid!
        </HelperText>
      </View>
    </SafeAreaView>
  );
};



const HomePage = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "pj1",
      title: "1",
      focusedIcon: "earth",
      unfocusedIcon: "google-earth",
    },
    {
      key: "pj2",
      title: "2",
      focusedIcon: "bell-alert",
      unfocusedIcon: "bell-alert-outline",
    },
    {
      key: "pj3",
      title: "3",
      focusedIcon: "human-handsup",
      unfocusedIcon: "human-handsdown",
    },
    {
      key: "pj4",
      title: "4",
      focusedIcon: "numeric-9-plus",
      unfocusedIcon: "numeric-9-plus-box",
    },
    {
      key: "pj5",
      title: "5",
      focusedIcon: "numeric-9-plus",
      unfocusedIcon: "numeric-9-plus-box",
    },
    {
      key: "pj6",
      title: "6",
      focusedIcon: "numeric-9-plus",
      unfocusedIcon: "numeric-9-plus-box",
    },
    {
      key: "pj7",
      title: "7",
      focusedIcon: "numeric-9-plus",
      unfocusedIcon: "numeric-9-plus-box",
    },
    {
      key: "pj8",
      title: "8",
      focusedIcon: "numeric-9-plus",
      unfocusedIcon: "numeric-9-plus-box",
    },
    {
      key: "pj9",
      title: "9",
      focusedIcon: "numeric-9-plus",
      unfocusedIcon: "numeric-9-plus-box",
    },
    {
      key: "pj10",
      title: "10",
      focusedIcon: "numeric-9-plus",
      unfocusedIcon: "numeric-9-plus-box",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    pj1: Pj1HeloWorld,
    pj2: Pj2CapTaps,
    pj3: Pj3CusComs,
    pj4: Pj4StateProps,
    pj5: Pj5FlexBox,
    pj6: Pj6ScrollView,
    pj7: Pj7TextInput,
    pj8: Pj8ScrollView,
    pj9: HomeScreen,
    pj10: Pj10HelperText,

  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },

  containerPj5: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  // containerPj6: {
  //   //flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },

  containerPj7: {
    padding: 20,
    backgroundColor: "#fff",
    flex: 1,
    //alignItems: "center",
    //justifyContent: "center",
    marginVertical: 20,
  },

  ViewStype: {
    width: "50%",
    height: "50%",
    backgroundColor: "aqua",
    alignItems: "center",
    justifyContent: "center",
  },

  Button: {
    margin: 10,
    backgroundColor: "aqua",
    alignSelf: "center",
    justifyContent: "center",
  },

  Text: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },

  box: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },

  row: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  name: {
    fontSize: 16,
  },
  separator: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 1,
  },
  sectionHeader: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "rgb(170, 170, 170))",
  },
});

export default HomePage;
