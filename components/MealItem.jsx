import { View, Text, StyleSheet, Pressable, Platform } from "react-native";
import { Image } from 'expo-image';
import { MealsDetails } from "../components/MealsDetails";


export const MealItem = ({ navigation, item }) => {

  const { 
    imageUrl, 
    title,
    duration,
    complexity,
    affordability
  } = item;

 

  const pressHandler = () => {
    navigation.navigate('MealDetailedScreen', { item });
  }

  return (

    <View style={ styles.mealItem } >
      <Pressable 
        android_ripple={{ color: '#ccc'}}
        style={ ({ pressed }) =>  pressed ? styles.ButtonPressed : null }
        onPress={ pressHandler }
        >
        <View style={{ borderRadius: 8, overflow: 'hidden' }}>
          <View>
            <Image source={ imageUrl } style={ styles.image }/>
            <Text style={ styles.title }>{title}</Text>
          </View>
            <MealsDetails
              duration={duration}
              complexity={complexity}
              affordability={affordability}
            />
        </View>
      </Pressable>

    </View>

  )
}

const styles = StyleSheet.create({
    mealItem: {
      margin: 16,
      backgroundColor: 'white',
      elevation: 4,
      shadowColor: 'black',
      shadowOpacity: 0.25,
      shadowOffset: { width: 0, height: 2},
      shadowRadius: 8,
      overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    image: {
      width: '100%',
      height: 200
    },
    title: {
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 18,
      margin: 8
    },
    ButtonPressed: {
      opacity: 0.5
    },
})
