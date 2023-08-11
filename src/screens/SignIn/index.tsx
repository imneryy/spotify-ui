import {
  CaretLeft,
  DotsThreeVertical,
  EyeSlash,
  MagnifyingGlass,
} from "phosphor-react-native";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Spotify from "../../assets/Spotify.svg";
import { LinearGradient } from "expo-linear-gradient";
import GoogleLogo from "../../assets/GoogleLogo.svg";
import AppleLogo from "../../assets/AppleLogo.svg";

export default function SignIn({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerBackButton}
          onPress={() => navigation.pop()}
        >
          <CaretLeft size={25} color="#DDDDDD" />
        </TouchableOpacity>
        <Spotify width={108} height={33} />
        <View style={{ width: 32, height: 32 }} />
      </View>
      <View style={styles.contentheader}>
        <Text style={styles.contentheaderTitle}>Login</Text>
        <Text style={styles.contentheaderSubtitle}>
          Se precisar de algum suporte clique aqui
        </Text>
      </View>

      <View style={styles.contentInput}>
        <View style={styles.inputGroup}>
          <TextInput
            placeholderTextColor="#757575"
            placeholder="Insira Seu Usuário ou Email"
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput placeholderTextColor="#757575" placeholder="Senha" />
          <EyeSlash size={25} color="#757575" weight="light" />
        </View>
        <View style={styles.footerInput}>
          <Text style={styles.footerInputText}>Recuperar Senha</Text>
        </View>
      </View>
      <View style={styles.contentButtons}>
        <TouchableOpacity
          style={styles.singInButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.singInButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.contentDivision}>
          <LinearGradient
            colors={["rgba(91, 91, 91, 0)", "rgba(37, 37, 37, 1)"]}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={styles.traco}
          />
          <Text style={styles.textDivision}>Ou</Text>
          <LinearGradient
            colors={["rgba(91, 91, 91, 0)", "rgba(37, 37, 37, 1)"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.traco}
          />
        </View>
        <View style={styles.containerIconsLogin}>
          <GoogleLogo width={36} height={36} />
          <AppleLogo width={29} height={36} style={{ marginBottom: 2 }} />
        </View>
      </View>
      <View style={styles.contentFooterText}>
        <Text style={{ color: "#DBDBDB", fontSize: 14, fontWeight: "400" }}>
          Não Possui Conta ?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text
            style={{
              color: "#288CE9",
              fontSize: 14,
              fontWeight: "400",
              paddingLeft: 7,
            }}
          >
            Cadastre-se
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1B",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  headerBackButton: {
    width: 32,
    height: 32,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.03)",
  },
  contentheader: {
    width: "100%",
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
    paddingBottom: 38,
    gap: 22,
  },
  contentheaderTitle: {
    color: "#F2F2F2",
    fontSize: 30,
    lineHeight: 40,
    fontWeight: "700",
  },
  contentheaderSubtitle: {
    fontSize: 12,
    fontWeight: "400",
    color: "#E1E1E1",
  },
  contentInput: {
    width: "100%",
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  inputGroup: {
    flexDirection: "row",
    width: "100%",
    height: 80,
    borderWidth: 1,
    borderColor: "#757575",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  footerInput: {
    width: "100%",
    paddingHorizontal: 20,
  },
  footerInputText: {
    color: "#AEAEAE",
    fontSize: 14,
    fontWeight: "400",
  },
  contentButtons: {
    width: "100%",
    alignItems: "center",
  },
  singInButton: {
    backgroundColor: "#42C83C",
    width: 325,
    height: 80,
    borderRadius: 30,
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  singInButtonText: {
    color: "#F6F6F6",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    textTransform: "capitalize",
    lineHeight: 29,
  },
  contentDivision: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 30,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  traco: {
    width: 146,
    height: 2,
  },
  textDivision: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "400",
  },
  containerIconsLogin: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    gap: 60,
    marginTop: 40,
  },
  contentFooterText: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
});
