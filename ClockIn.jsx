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

export default function ClockIn() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.MainDashboard}>

      <TouchableOpacity
        style={styles.backButton1}
        onPress={() => navigation.navigate("AttendanceDashboard")}
      ><Text style={styles.backButton2}>Back</Text>
      </TouchableOpacity>

      <View style={styles.profileBox}>
        <View style={styles.picBox}>
          <View style={styles.profilePic}></View>
        </View>
        <View style={styles.nameBox}>
          <Text style={styles.employeeName}>Prince Deemarc Asugas Godoy</Text>
        </View>
      </View>

      <View style={styles.clockIn}>
        <View style={styles.amBox}>
          <View style={styles.amCircle}></View>

          <Text style={styles.AM}>AM</Text>
          <TouchableOpacity
            style={styles.in1}
            onPress={() => Alert.alert("You have clocked in successfully")}
          ><Text style={styles.in2}>Time In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.pmBox}>
          <View style={styles.pmCircle}></View>
          <Text style={styles.PM}>PM</Text>
          <TouchableOpacity
            style={styles.out1}
            onPress={() => Alert.alert("You have clocked out successfully")}
          ><Text style={styles.out2}>Out</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomBackground}>
        <View style={styles.clock}></View>
        <View style={styles.todaySet}></View>
      </View>


      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  MainDashboard: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "#6495ed",
  },

  backButton1: {
    top: 20,
    margin:13,
    position: "absolute",
  },
  backButton2: {
    color: "white",
    textAlignVertical: "center",
    fontSize: 20,
  },

  profileBox: {
    top: 130,
    height: "13%",
    width: "100%",
    backgroundColor: "#6495ed",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  picBox: {
    height: "100%",
    width: "23%",
    backgroundColor: "#6495ed",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },

  nameBox: {
    height: "100%",
    width: "70%",
    backgroundColor: "#6495ed",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    margin: 5,
    justifyContent: "center",
  },

  profilePic: {
    backgroundColor: "white",
    opacity: 0.5,
    width: 80,
    height: 80,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
  },

  employeeName: {
    color: "white",
    textAlignVertical: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  clockIn: {
    top: 120,
    height: "28%",
    width: "100%",
    backgroundColor: "#6495ed",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding:10,
  },

  amBox: {
    height: "30%",
    width: "100%",
    backgroundColor: "#6495ed",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    margin:15,
  },

  pmBox: {
    height: "30%",
    width: "100%",
    backgroundColor: "#6495ed",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    margin:15,
  },

  amCircle: {
    backgroundColor: "#32cd32",
    width: 40,
    height: 40,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    margin:15,
  },

  AM: {
    color: "white",
    textAlignVertical: "center",
    fontSize: 20,
    fontWeight: "bold",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    margin:15,
  },

  in1: {
    margin:15,
  },

  in2: {
    backgroundColor: "#32cd32",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    width: 200,
    height: 50,
    fontSize: 20,
    fontWeight: "bold",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  pmCircle: {
    backgroundColor: "#cd5c5c",
    width: 40,
    height: 40,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    margin:15,
  },

  PM: {
    color: "white",
    textAlignVertical: "center",
    fontSize: 20,
    fontWeight: "bold",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    margin:15,
  },

  out1: {
    margin:15,
  },

  out2: {
    backgroundColor: "#cd5c5c",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    width: 200,
    height: 50,
    fontSize: 20,
    fontWeight: "bold",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  bottomBackground: {
    backgroundColor: "white",
    position: "absolute",
    height: "35%",
    width: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    top: 450,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding:10,
  },

  clock: {
    height: "30%",
    width: "100%",
    backgroundColor: "#6495ed",
    opacity: 0.5,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    margin:15,
  },

  todaySet: {
    height: "30%",
    width: "100%",
    backgroundColor: "#6495ed",
    opacity: 0.5,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    margin:15,
  },
});
