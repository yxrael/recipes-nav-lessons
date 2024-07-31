// import './gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';

import { CategoriesScreen } from './screens/CategoriesScreen';
import { MealsOverviewScreen } from './screens/MealsOverviewScreen';
import { MealDetailedScreen } from './screens/MealDetailedScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { FavoritesScreen } from './screens/FavoritesScreen';


const  Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return  <Drawer.Navigator screenOptions={{
              headerStyle: { backgroundColor: '#351401'},
              headerTintColor: 'white',
              sceneContainerStyle: {
                backgroundColor: '#3f2f25'},
              drawerContentStyle: { backgroundColor: '#351401'},
              drawerInactiveTintColor: 'white',
              drawerActiveTintColor: '#351401',
              drawerActiveTintColor: '#e4baa1'
              }
            }>
            <Drawer.Screen 
              name="Categories"
              component={CategoriesScreen}
              options={{
                title: 'All Categories',
                drawerIcon: ({ color, size }) => <Ionicons name='albums-outline' color={color} size={size}/>
              }}
            />
            <Drawer.Screen 
              name="Favorites"
              component={FavoritesScreen}
              options={{
                drawerIcon: ({ color, size }) => <Ionicons name='heart' color={color} size={size}/>
              }}
            />
          </Drawer.Navigator>
}

export default function App() {

  return (
    <>
      <StatusBar style='light'/>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='MealsCategories' screenOptions={{
              headerStyle: { backgroundColor: '#351401'},
              headerTintColor: 'white',
              contentStyle: {
                backgroundColor: '#3f2f25'
              }
          }}>
            <Stack.Screen 
              name='Drawer' 
              component={ DrawerNavigator }
              options={{
                // title: 'All categories',
                headerShown: false
              }}
              
            />
            <Stack.Screen
              name='MealsOverview'
              component={ MealsOverviewScreen }
              // options={({ route, navigation }) => {
              //   const catId = route.params.categoryId
              //   return {
              //     title: catId
              //   }
              // }}
            />
            <Stack.Screen 
              name='MealDetailedScreen' 
              component={ MealDetailedScreen }        
            />
          </Stack.Navigator>    
        </NavigationContainer>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
  
  },
});
