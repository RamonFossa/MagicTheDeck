import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TextStyle } from "react-native";
import { useTheme } from "styled-components";
import { Home } from '../screens/Home';
import { Search } from '../screens/Search';
import { Decks } from '../screens/Decks';
import { Collection } from '../screens/Collection';

export type RouteProps = {
  initialRoute?: 'onboard' | 'login' | 'main'
  mainRoute: 'home' | 'search' | 'decks' | 'collection';
}

export type AppStackParamList = {
  onboard: undefined;
  login: undefined;
  profile: undefined;
  history: undefined;
  tickets: undefined;
  home: undefined;
  checklist: undefined;
};

export type MainProps = {
    mainRoute: 'home' | 'search' | 'decks' | 'collection';
  };

function MainRoutesTab() {
    const Tab = createBottomTabNavigator();
    const theme = useTheme();

    return (
      <Tab.Navigator
        initialRouteName={'home'}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
  
            let iconName: keyof typeof Ionicons.glyphMap = 'md-checkmark';
  
            switch (route.name) {
              case 'home': iconName = focused ? 'md-home' : 'md-home-outline';
                break;
              case 'search': iconName = focused ? 'md-search' : 'md-search-outline';
                break;
              case 'decks': iconName = focused ? 'md-card' : 'md-card-outline';
                break;
              case 'collection': iconName = focused ? 'md-logo-dropbox' : 'logo-dropbox';
                break;
            }
  
            if (focused) color = '#fff'
  
            return <Ionicons name={iconName} color={color} size={size} />
          },
  
          tabBarStyle: { backgroundColor: theme.COLORS.PRIMARY_LIGHT },
          tabBarLabel: ({ focused }) => {
            const style: TextStyle = (focused) ?
              { color: '#fff', fontWeight: 'bold' } :
              { color: '#888', fontWeight: 'normal' };
  
            return <Text style={style}>{route.name}</Text>
          },
  
          headerShown: false,
  
        })}>
  
        <Tab.Screen name={'home'} component={Home} />
        <Tab.Screen name={'decks'} component={Decks} />
        <Tab.Screen name={'collection'} component={Collection} />
        <Tab.Screen name={'search'} component={Search}  />
  
      </Tab.Navigator>
    )
  }

function MainRoutes() {

    const Stack = createNativeStackNavigator();
 
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
          }}>
        
            <Stack.Screen 
            name="main"
            component={MainRoutesTab}   
            />
            {/* <Stack.Screen 
            name="profile" 
            component={ProfileScreen}/> 

            <Stack.Screen 
            name="formsScreen" 
            component={FormsScreen}/>
            <Stack.Screen 
            name="onboard" 
            component={Onboard} /> */}
        </Stack.Navigator>

    )
}

export function Routes() {
  return (
    <MainRoutes />
  );
}
