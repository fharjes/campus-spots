import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/icon.png")} style={styles.logo} />
      <Text style={styles.title}>Campus Spots</Text>
      <Text style={styles.subtitle}>This is a changed subtitle by Fabian Harjes</Text>
      <View style={styles.card}>
        <Text style={{fontWeight: "bold"}}>Fabian Harjes</Text>
        <Text>I am from Germany and study Computer Science</Text>
        <Text>My favorite place back in Germany is home, that's where I feel most comfortable</Text>
      </View>
      <View style={styles.parent}>
        <View style={styles.box}></View>
        <View style={styles.middleBox}></View>
        <View style={styles.box}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f6f4",
  },
  logo: {
    width: 96,
    height: 96,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 16,
    color: "#666",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 32,
    padding: 16,
    // I decided to use a general margin instead of only marginTop, so that it actually looks like a card and not just a text box
    margin: 24,
  },
  parent: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "#4e98d9",
  },
  middleBox: {
    width: 100,
    height: 100,
    backgroundColor: "#4e98d9",
    flex: 1,
  }
});