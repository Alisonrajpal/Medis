import { useState } from "react";

import {
  View,
  Text,
  ImageBackground,
  Button,
  TextInput,
  StyleSheet,
} from "react-native";

export default function App() {
  const [isModelVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "lightblue" }}>
      <ImageBackground
        style={styles.background}
        source={{
          uri: "https://img.freepik.com/premium-photo/group-doctors-standing-front-hospital-room_889227-23144.jpg",
        }}>
        <Text style={styles.inner}>
          <Text style={{ color: "red" }}>Welcome </Text>
          To Find A Doctor
        </Text>
        <View style={styles.btn}>
          <TextInput style={styles.searchBar} placeholder="Search doctors" />
          <Button
            title="Serach🔍🔍"
            onPress={() => setModalVisible(true)}
            color="midnightblue"
          />
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  background: {
    flex: 1,
    padding: 60,
    fontSize: "45px",
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  inner: { padding: 10, textAlign: "center", backgroundColor: "lightblue" },
  btn: {
    padding: 10,
    paddingBottom:100,
  },
});
