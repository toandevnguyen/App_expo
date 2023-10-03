import * as React from "react";
import { View } from "react-native";
import { Button, Menu, Divider, PaperProvider } from "react-native-paper";
import MenuItem from "./MenuItem";

const MenuBtn = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <PaperProvider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Show menu</Button>}
        >
          <MenuItem/>
        </Menu>
      </View>
    </PaperProvider>
  );
};

export default MenuBtn;
