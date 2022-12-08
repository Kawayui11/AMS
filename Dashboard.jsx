import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainDashboard from "../features/Dashboard";
import AttendanceDashboard from "../features/AttendanceDashboard";
import ClockIn from "../features/ClockIn";
import EmployeeList from "../features/EmployeeList";
import EmployeesProfile from "../features/EmployeesProfile";

const DashboardScreen = () => <MainDashboard />;
const AttendanceDashboardScreen = () => <AttendanceDashboard />;
const ClockInScreen = () => <ClockIn />;
const EmployeeListScreen = () => <EmployeeList />;
const EmployeesProfileScreen = () => <EmployeesProfile />;
const Stack = createNativeStackNavigator();

export default function Dashboard() {
  return <Stack.Navigator screenOptions={() => {
    return {
        headerShown:false,
    }
}}>
    <Stack.Screen name="Dashboard" component={DashboardScreen} />
    <Stack.Screen name="AttendanceDashboard" component={AttendanceDashboardScreen} />
    <Stack.Screen name="ClockIn" component={ClockInScreen} />
    <Stack.Screen name="EmployeeList" component={EmployeeListScreen} />
    <Stack.Screen name="EmployeesProfile" component={EmployeesProfileScreen} />
  </Stack.Navigator>;
}
