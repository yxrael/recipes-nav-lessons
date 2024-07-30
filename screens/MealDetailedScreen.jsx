import { Image } from "expo-image";
import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native"
import { MealsDetails } from "../components/MealsDetails";


export const MealDetailedScreen = ( {route, navigation } ) => {

    const { 
        imageUrl, 
        title,
        duration,
        complexity,
        affordability,
        ingredients,
        isGlutenFree,
        isLactoseFree,
        isVegan,
        isVegetarian,
        steps
      } = route.params.item;


      // useLayoutEffect(() => {
      //   navigation.setOptions({
      //     title
      //   });
      // }, [title, navigation])

  return (
    <View style={ styles.container }>
      <Image source={ imageUrl } style={ styles.image}/>
      <Text style={styles.title}>{title}</Text>
      <View>
          <MealsDetails
              duration={duration}
              complexity={complexity}
              affordability={affordability}
              style={ {color: 'white'} }
              textStyle={{ color: 'white' }}
          />
      </View>

      <View style={ styles.subtitleContainer }>
          <Text style={ styles.subtitle }>Ingredients</Text>
      </View>
         { ingredients.map( ingredient => <Text key={ingredient}>{ingredient}</Text>)}
      <View style={ styles.subtitleContainer }>
          <Text style={ styles.subtitle }>Steps</Text>
      </View>
          { steps.map( step => <Text key={step}>{step}</Text>)}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#dbb8a4'
    },
    image: {
      width: '100%',
      height: 350,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 24,
      margin: 8,
      textAlign: 'center',
      color: 'white'
    },
    subtitle: {
      color: '#E2B497',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    subtitleContainer: {
      borderBottomWidth: 2,
      borderBottomColor: 'white',
      marginHorizontal: 24,
      marginVertical: 4,
      margin: 4,
      padding: 6,
    }

})
