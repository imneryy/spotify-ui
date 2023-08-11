import {
  CaretLeft,
  DotsThreeVertical,
  Heart,
  MagnifyingGlass,
  Play,
} from "phosphor-react-native";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Spotify from "../../assets/Spotify.svg";
import BillieCard from "../../assets/billieCard.png";
import BillieContent from "../../assets/Rectangle8.png";
import DrakeContent from "../../assets/Rectangle9.png";

export default function HomePage({ navigation }: { navigation: any }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerBackButton}
          onPress={() => navigation.pop()}
        >
          <MagnifyingGlass size={25} color="#DDDDDD" />
        </TouchableOpacity>
        <Spotify width={108} height={33} />
        <DotsThreeVertical size={32} color="#DDDDDD" />
      </View>
      <View style={styles.containerCard}>
        <View style={styles.containerCardContent}>
          <View style={styles.containerCardContentText}>
            <Text style={{ color: "#FBFBFB", fontSize: 14, fontWeight: "700" }}>
              Novo Album
            </Text>
            <Text style={{ color: "#FBFBFB", fontSize: 23, fontWeight: "700" }}>
              happier Than
            </Text>
            <Text
              style={{
                color: "#FBFBFB",
                fontSize: 23,
                fontWeight: "700",
                marginTop: -5,
              }}
            >
              Ever
            </Text>
            <Text
              style={{
                color: "#FBFBFB",
                fontSize: 18,
                fontWeight: "700",
              }}
            >
              Billie Eilish
            </Text>
          </View>
          <Image
            source={BillieCard}
            style={{
              width: 325,
              height: 184,
              marginTop: -65,
              marginLeft: -155,
            }}
          />
        </View>
      </View>
      <ScrollView
        style={styles.contentHeader}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.contentHeaderContainerFirst}>
          <Text style={{ color: "#DBDBDB", fontSize: 20, fontWeight: "700" }}>
            Novos
          </Text>
          <View style={styles.tracoHeaderText}></View>
        </View>
        <View style={styles.contentHeaderContainer}>
          <Text style={styles.contentHeaderText}>Videos</Text>
        </View>
        <View style={styles.contentHeaderContainer}>
          <Text style={styles.contentHeaderText}>Artistas</Text>
        </View>
        <View style={styles.contentHeaderContainer}>
          <Text style={styles.contentHeaderText}>Podcasts</Text>
        </View>
      </ScrollView>
      <ScrollView
        style={styles.contentNovos}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.novosCard}>
          <View style={styles.contentNovosCardImage}>
            <Image source={BillieContent} />
            <View
              style={{
                width: 30,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#2C2C2C",
                borderRadius: 50,
                position: "absolute",
                right: 1,
                bottom: 45,
              }}
            >
              <Play size={14} color="#959595" />
            </View>
            <Text style={styles.contentNovosCardText}>Bad Guy</Text>
            <Text style={styles.contentNovosCardSubtitle}>Billie Eilish</Text>
          </View>
          <View style={styles.contentNovosCardImage}>
            <Image source={DrakeContent} />
            <View
              style={{
                width: 30,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#2C2C2C",
                borderRadius: 50,
                position: "absolute",
                right: 1,
                bottom: 45,
              }}
            >
              <Play size={14} color="#959595" />
            </View>
            <Text style={styles.contentNovosCardText}>Scorpion</Text>
            <Text style={styles.contentNovosCardSubtitle}>Drake</Text>
          </View>
          <View style={styles.contentNovosCardImageLast}>
            <Image source={BillieContent} />
            <View
              style={{
                width: 30,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#2C2C2C",
                borderRadius: 50,
                position: "absolute",
                right: 1,
                bottom: -3,
              }}
            >
              <Play size={14} color="#959595" />
            </View>
            <Text style={styles.contentNovosCardText}>Bad Guy</Text>
            <Text style={styles.contentNovosCardSubtitle}>Billie Eilish</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.playlistHeader}>
        <Text style={{ color: "#DBDBDB", fontSize: 20, fontWeight: "700" }}>
          Playlist
        </Text>
        <Text style={{ color: "#C6C6C6", fontSize: 14, fontWeight: "300" }}>
          Ver Mais
        </Text>
      </View>
      <ScrollView style={styles.playlistContent}>
        <View style={styles.musicContent}>
          <View style={styles.musicContentFirst}>
            <View style={styles.musicPlayContainer}>
              <View style={styles.musicPlayButton}>
                <Play size={20} color="#959595" />
              </View>
            </View>

            <View style={styles.musicText}>
              <Text
                style={{ color: "#D6D6D6", fontSize: 18, fontWeight: "700" }}
              >
                As It Was
              </Text>
              <Text
                style={{ color: "#D6D6D6", fontSize: 14, fontWeight: "300" }}
              >
                Harry Styles
              </Text>
            </View>
          </View>
          <View style={styles.musicContentLast}>
            <View style={styles.musicTime}>
              <Text
                style={{ color: "#D6D6D6", fontSize: 16, fontWeight: "300" }}
              >
                5:33
              </Text>
            </View>
            <View style={styles.musicFavorite}>
              <Heart size={26} color="#959595" />
            </View>
          </View>
        </View>
        <View style={styles.musicContent}>
          <View style={styles.musicContentFirst}>
            <View style={styles.musicPlayContainer}>
              <View style={styles.musicPlayButton}>
                <Play size={20} color="#959595" />
              </View>
            </View>

            <View style={styles.musicText}>
              <Text
                style={{ color: "#D6D6D6", fontSize: 18, fontWeight: "700" }}
              >
                God Did
              </Text>
              <Text
                style={{ color: "#D6D6D6", fontSize: 14, fontWeight: "300" }}
              >
                DJ Khaled
              </Text>
            </View>
          </View>
          <View style={styles.musicContentLast}>
            <View style={styles.musicTime}>
              <Text
                style={{ color: "#D6D6D6", fontSize: 16, fontWeight: "300" }}
              >
                3:43
              </Text>
            </View>
            <View style={styles.musicFavorite}>
              <Heart size={26} color="#959595" />
            </View>
          </View>
        </View>
        <View style={styles.musicContent}>
          <View style={styles.musicContentFirst}>
            <View style={styles.musicPlayContainer}>
              <View style={styles.musicPlayButton}>
                <Play size={20} color="#959595" />
              </View>
            </View>

            <View style={styles.musicText}>
              <Text
                style={{ color: "#D6D6D6", fontSize: 18, fontWeight: "700" }}
              >
                Bad Guy
              </Text>
              <Text
                style={{ color: "#D6D6D6", fontSize: 14, fontWeight: "300" }}
              >
                Billie Eilish
              </Text>
            </View>
          </View>
          <View style={styles.musicContentLast}>
            <View style={styles.musicTime}>
              <Text
                style={{ color: "#D6D6D6", fontSize: 16, fontWeight: "300" }}
              >
                3:43
              </Text>
            </View>
            <View style={styles.musicFavorite}>
              <Heart size={26} color="#959595" />
            </View>
          </View>
        </View>
        <View style={styles.musicContent}>
          <View style={styles.musicContentFirst}>
            <View style={styles.musicPlayContainer}>
              <View style={styles.musicPlayButton}>
                <Play size={20} color="#959595" />
              </View>
            </View>

            <View style={styles.musicText}>
              <Text
                style={{ color: "#D6D6D6", fontSize: 18, fontWeight: "700" }}
              >
                Scorpion
              </Text>
              <Text
                style={{ color: "#D6D6D6", fontSize: 14, fontWeight: "300" }}
              >
                Drake
              </Text>
            </View>
          </View>
          <View style={styles.musicContentLast}>
            <View style={styles.musicTime}>
              <Text
                style={{ color: "#D6D6D6", fontSize: 16, fontWeight: "300" }}
              >
                3:43
              </Text>
            </View>
            <View style={styles.musicFavorite}>
              <Heart size={26} color="#959595" />
            </View>
          </View>
        </View>
        <View style={styles.musicContent}>
          <View style={styles.musicContentFirst}>
            <View style={styles.musicPlayContainer}>
              <View style={styles.musicPlayButton}>
                <Play size={20} color="#959595" />
              </View>
            </View>

            <View style={styles.musicText}>
              <Text
                style={{ color: "#D6D6D6", fontSize: 18, fontWeight: "700" }}
              >
                As It Was
              </Text>
              <Text
                style={{ color: "#D6D6D6", fontSize: 14, fontWeight: "300" }}
              >
                Harry Styles
              </Text>
            </View>
          </View>
          <View style={styles.musicContentLast}>
            <View style={styles.musicTime}>
              <Text
                style={{ color: "#D6D6D6", fontSize: 16, fontWeight: "300" }}
              >
                5:33
              </Text>
            </View>
            <View style={styles.musicFavorite}>
              <Heart size={26} color="#959595" />
            </View>
          </View>
        </View>
        <View style={styles.musicContent}>
          <View style={styles.musicContentFirst}>
            <View style={styles.musicPlayContainer}>
              <View style={styles.musicPlayButton}>
                <Play size={20} color="#959595" />
              </View>
            </View>

            <View style={styles.musicText}>
              <Text
                style={{ color: "#D6D6D6", fontSize: 18, fontWeight: "700" }}
              >
                God Did
              </Text>
              <Text
                style={{ color: "#D6D6D6", fontSize: 14, fontWeight: "300" }}
              >
                DJ Khaled
              </Text>
            </View>
          </View>
          <View style={styles.musicContentLast}>
            <View style={styles.musicTime}>
              <Text
                style={{ color: "#D6D6D6", fontSize: 16, fontWeight: "300" }}
              >
                3:43
              </Text>
            </View>
            <View style={styles.musicFavorite}>
              <Heart size={26} color="#959595" />
            </View>
          </View>
        </View>
        <View style={styles.musicContent}>
          <View style={styles.musicContentFirst}>
            <View style={styles.musicPlayContainer}>
              <View style={styles.musicPlayButton}>
                <Play size={20} color="#959595" />
              </View>
            </View>

            <View style={styles.musicText}>
              <Text
                style={{ color: "#D6D6D6", fontSize: 18, fontWeight: "700" }}
              >
                Bad Guy
              </Text>
              <Text
                style={{ color: "#D6D6D6", fontSize: 14, fontWeight: "300" }}
              >
                Billie Eilish
              </Text>
            </View>
          </View>
          <View style={styles.musicContentLast}>
            <View style={styles.musicTime}>
              <Text
                style={{ color: "#D6D6D6", fontSize: 16, fontWeight: "300" }}
              >
                3:43
              </Text>
            </View>
            <View style={styles.musicFavorite}>
              <Heart size={26} color="#959595" />
            </View>
          </View>
        </View>
        <View style={styles.musicContent}>
          <View style={styles.musicContentFirst}>
            <View style={styles.musicPlayContainer}>
              <View style={styles.musicPlayButton}>
                <Play size={20} color="#959595" />
              </View>
            </View>

            <View style={styles.musicText}>
              <Text
                style={{ color: "#D6D6D6", fontSize: 18, fontWeight: "700" }}
              >
                Scorpion
              </Text>
              <Text
                style={{ color: "#D6D6D6", fontSize: 14, fontWeight: "300" }}
              >
                Drake
              </Text>
            </View>
          </View>
          <View style={styles.musicContentLast}>
            <View style={styles.musicTime}>
              <Text
                style={{ color: "#D6D6D6", fontSize: 16, fontWeight: "300" }}
              >
                3:43
              </Text>
            </View>
            <View style={styles.musicFavorite}>
              <Heart size={26} color="#959595" />
            </View>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1B",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    alignContent: "center",
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
  },
  containerCard: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  containerCardContent: {
    width: 334,
    height: 118,
    flexDirection: "row",
    backgroundColor: "#42C83C",
    borderRadius: 30,
    marginTop: 40,
  },
  containerCardContentText: {
    marginLeft: 24,
    justifyContent: "center",
  },
  contentHeader: {
    width: "100%",
    marginTop: 40,
  },
  contentHeaderContainerFirst: {
    alignItems: "center",
    paddingLeft: 35,
    marginRight: 40,
  },
  contentHeaderContainer: {
    marginRight: 40,
  },
  contentHeaderText: {
    color: "#616161",
    fontSize: 20,
    fontWeight: "700",
  },
  tracoHeaderText: {
    width: 30,
    height: 3,
    marginTop: 3,
    backgroundColor: "#42C83C",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  contentNovos: {
    width: "100%",
    marginTop: 30,
    paddingHorizontal: 35,
  },
  novosCard: {
    flexDirection: "row",
  },
  contentNovosCardImage: {
    width: 150,
    // height: 195,
    marginRight: 12,
  },
  contentNovosCardImageLast: {
    width: 150,
    height: 195,
    marginRight: 50,
  },
  contentNovosCardText: {
    marginTop: 10,
    marginLeft: 13,
    color: "#E1E1E1",
    fontWeight: "700",
    fontSize: 18,
  },
  contentNovosCardSubtitle: {
    marginTop: 2,
    marginLeft: 13,
    color: "#E1E1E1",
    fontWeight: "300",
    fontSize: 16,
  },
  playlistHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 35,
    justifyContent: "space-between",
    marginTop: 40,
  },
  playlistContent: {
    width: "100%",
    marginBottom: 40,
  },
  musicContent: {
    flexDirection: "row",
    paddingHorizontal: 35,
    marginTop: 20,
    alignItems: "center",
  },
  musicContentFirst: {
    width: "70%",
    flexDirection: "row",
  },
  musicPlayContainer: {
    justifyContent: "center",
  },
  musicContentLast: {
    width: "30%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  musicPlayButton: {
    width: 37,
    height: 37,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#2C2C2C",
  },
  musicText: {
    marginLeft: 20,
  },
  musicTime: {},
  musicFavorite: {},
});
