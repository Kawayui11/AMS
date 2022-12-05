import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/features/Login";
import CreatingAccount from "./src/features/CreatingAccount";
import Dashboard from "./src/features/Dashboard";
import AttendanceDashboard from "./src/features/AttendanceDashboard";
import ClockIn from "./src/features/ClockIn";
import EmployeeList from "./src/features/EmployeeList";
import EmployeesProfile from "./src/features/EmployeesProfile";

import {AuthenticationContextProvider} from './src/authentication';

const LoginScreen = () => <Login />;
const CreatingAccountScreen = () => <CreatingAccount />;
const DashboardScreen = () => <Dashboard />;
const AttendanceDashboardScreen = () => <AttendanceDashboard />;
const ClockInScreen = () => <ClockIn />;
const EmployeeListScreen = () => <EmployeeList />;
const EmployeesProfileScreen = () => <EmployeesProfile />;

export default function App() {
  const Stack = createNativeStackNavigator();
  
  const {onLogin, error, isLoading} = useContext(AuthenticationContext);

  return (

  <AuthenticationContextProvider>

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreatingAccount" component={CreatingAccountScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="AttendanceDashboard" component={AttendanceDashboardScreen} />
        <Stack.Screen name="ClockIn" component={ClockInScreen} />
        <Stack.Screen name="EmployeeList" component={EmployeeListScreen} />
        <Stack.Screen name="EmployeesProfile" component={EmployeesProfileScreen} />

      </Stack.Navigator>
    </NavigationContainer>

    </AuthenticationContextProvider>
  );
}
