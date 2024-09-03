import React from "react";
import { View, Text, StyleSheet } from "react-native";

function DetailsScreen({ route }) {
  const { doctor } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Name: <Text style={styles.value}>{doctor.name}</Text>
      </Text>
      <Text style={styles.label}>
        Specialty: <Text style={styles.value}>{doctor.specialty}</Text>
      </Text>
      <Text style={styles.label}>
        Address: <Text style={styles.value}>{doctor.address}</Text>
      </Text>
      <Text style={styles.label}>
        Contact: <Text style={styles.value}>{doctor.contact}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  value: {
    fontWeight: "normal",
  },
});

export default DetailsScreen;
