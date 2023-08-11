import { CaretLeft } from "phosphor-react-native";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Spotify from "../../assets/Spotify.svg";
import image2 from "../../assets/image2.png";
import union from "../../assets/Union.png";
import union2 from "../../assets/Union-1.png";

export function LogonScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerBackButton}
          onPress={() => navigation.pop()}
        >
          <CaretLeft size={24} color="#DDDDDD" />
        </TouchableOpacity>
      </View>
      <Image style={{ position: "absolute", top: 435 }} source={image2} />
      <Image style={{ position: "absolute", left: 220 }} source={union} />
      <Image
        style={{ position: "absolute", left: 230, bottom: -2 }}
        source={union2}
      />

      <View style={styles.content}>
        <Spotify width={235} height={71} />
        <Text style={styles.contentTextTitle}>Enjoy listening to music</Text>
        <Text style={styles.contentTextDescription}>
          Spotify is a proprietary Swedish audio streaming and media services
          provider
        </Text>
        <View style={styles.containerButtons}>
          <TouchableOpacity
            style={styles.buttonRegister}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.buttonText}>Sing in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1B1B",
  },
  header: {
    marginTop: 46,
    paddingHorizontal: 30,
  },
  headerBackButton: {
    width: 32,
    height: 32,
    backgroundColor: "rgba(255,255,255,0.03)",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "100%",
    marginTop: 111,
    alignItems: "center",
    paddingHorizontal: 40,
  },
  contentTextTitle: {
    color: "#F2F2F2",
    fontSize: 26,
    fontWeight: "700",
    lineHeight: 35,
    textTransform: "capitalize",
    marginTop: 50,
  },
  contentTextDescription: {
    color: "#A0A0A0",
    fontSize: 17,
    marginTop: 21,
    fontWeight: "400",
    lineHeight: 22,
    textAlign: "center",
    textTransform: "capitalize",
  },
  containerButtons: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 30,
  },
  buttonRegister: {
    width: 147,
    height: 73,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#42C83C",
    borderRadius: 30,
  },
  buttonLogin: {
    width: 147,
    height: 73,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 19,
    fontWeight: "700",
  },
});
