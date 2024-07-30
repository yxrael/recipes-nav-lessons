import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { CategoriesScreen } from './screens/CategoriesScreen';
import { MealsOverviewScreen } from './screens/MealsOverviewScreen';
import { MealDetailedScreen } from './screens/MealDetailedScreen';

const  Stack = createNativeStackNavigator();

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
              name='MealsCategories' 
              component={ CategoriesScreen }
              options={{
                title: 'All categories'
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
