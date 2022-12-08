import { useNavigation } from "@react-navigation/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Calendar } from "react-native-calendario";

export default function EmployeesProfile() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.MainDashboard}>
      <View style={styles.image}>
        <Image
          source={require("../../assets/blue2.png")}
          style={styles.image}
        />
      </View>

      <View style={styles.topBackground}></View>
      <View style={styles.bottomBackground}></View>

      <TouchableOpacity
        style={styles.backButton1}
        onPress={() => navigation.navigate("EmployeeList")}
      >
        <Text style={styles.backButton2}>Back</Text>
      </TouchableOpacity>

      <View style={styles.profilePic}></View>

      <Text style={styles.employeeName}>Prince Godoy</Text>
      <Text style={styles.employeeEmail}>
        princedeemarc.godoy@g.msuiit.edu.ph
      </Text>
      <Text style={styles.employeeContactNumber}>09757780193</Text>

      <View style={{ padding: 10, top: 230 }}>
        <Calendar
          numberOfMonths={1}
          theme={{
            monthTitleTextStyle: {
              color: "white",
              fontWeight: "20",
              fontSize: 16,
            },
            emptyMonthTextStyle: { fontWeight: "10" },
            weekColumnStyle: { paddingVertical: 10 },
            weekColumnTextStyle: {
              color: "#b6c1cd",
              fontSize: 17,
            },
            dayTextStyle: {
              color: "black",
              fontWeight: "10",
              fontSize: 15,
            },
            todayTextStyle: {
              backgroundColor: "green",
              color: "white",
              padding: 10,
            },
          }}
        />
      </View>

      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  MainDashboard: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "#5f9ea0",
  },

  image: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },

  topBackground: {
    backgroundColor: "#5f9ea0",
    position: "absolute",
    top: 0,
    height: "13%",
    width: "100%",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    opacity: 0.2,
  },

  bottomBackground: {
    backgroundColor: "#5f9ea0",
    position: "absolute",
    top: 580,
    height: "25%",
    width: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    opacity: 0.2,
  },

  backButton1: {
    left: 12,
    top: 30,
    position: "absolute",
  },
  backButton2: {
    color: "white",
    textAlignVertical: "center",
    width: 50,
    height: 30,
    position: "absolute",
    fontSize: 20,
  },

  profilePic: {
    backgroundColor: "#6495ed",
    opacity: 0.2,
    width: 80,
    height: 80,
    top: 150,
    left: 15,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },

  employeeName: {
    color: "white",
    textAlignVertical: "center",
    width: 270,
    height: 50,
    position: "absolute",
    left: 110,
    top: 120,
    fontSize: 20,
    fontWeight: "bold",
  },

  employeeEmail: {
    color: "white",
    textAlignVertical: "center",
    width: 270,
    height: 50,
    position: "absolute",
    left: 110,
    top: 160,
    fontSize: 20,
    fontWeight: "bold",
  },

  employeeContactNumber: {
    color: "white",
    textAlignVertical: "center",
    width: 270,
    height: 50,
    position: "absolute",
    left: 110,
    top: 205,
    fontSize: 20,
    fontWeight: "bold",
  },
});
