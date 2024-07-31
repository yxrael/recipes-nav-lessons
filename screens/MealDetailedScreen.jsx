import { Image } from "expo-image";
import { useLayoutEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { MealsDetails } from "../components/MealsDetails";
import { Subtitle } from "../components/MealDetail/Subtitle";
import { List } from "../components/MealDetail/List";

import Ionicons from '@expo/vector-icons/Ionicons';
import { MEALS } from "../data/dummy-data";


export const MealDetailedScreen = ( {route, navigation } ) => {

    const {
        id,
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
        steps,
        isFavorite
      } = route.params.item;

      const [meGusta, setmeGusta] = useState(isFavorite)
      const muestra = MEALS.find( comida => comida.id === id );

      const headerButtonPressHandler = () => {
        setmeGusta( !meGusta )
        muestra.isFavorite = !muestra.isFavorite;
      }

      const Botoncico = () => {

        return (
          <View style={styles.corazon}>
            <Ionicons name=
            {
              !meGusta ? 'heart-outline' : 'heart'
            }
             size={32}
             color="#c71717"
             onPress={ headerButtonPressHandler }
             />
          </View>
        )
      }

      useLayoutEffect(() => {
        navigation.setOptions({
          title,
          headerRight: () => {
            return <Botoncico />
          }
        });
      }, [navigation, headerButtonPressHandler])

  return (
    <ScrollView style={ styles.rootContainer }>
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

      <View style={ styles.listOuterContainer }>
          <View style={ styles.listContainer }>
              <Subtitle>Ingredients</Subtitle>
              <List data={ingredients}/>
              <Subtitle>Steps</Subtitle>
              <List data={ steps }/>
          </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    rootContainer: {
      marginBottom: 32
    },
    container: {
        // flex: 1,
        marginBottom: 50,
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
    listContainer: {
      width: '80%',
      height: 350,
    },
    listOuterContainer: {
      alignItems: 'center',
      paddingBottom: 200
    },
    corazon: {
      alignContent: 'center',
      justifyContent: 'center'
    }
    

})
