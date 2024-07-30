import { Image } from "expo-image";
import { useLayoutEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native"



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


      useLayoutEffect(() => {
        navigation.setOptions({
          title
        });
      }, [title, navigation])

  return (
    <View style={ styles.container }>


            <View style={ styles.imageContainer }>
                <Image source={ imageUrl } style={ styles.image } />
            </View>

        <ScrollView>
            <View style={ styles.textContainer }>
                <Text style={ styles.title }>{ title }</Text>
                <Text style={ styles.ingredients }>{ ingredients }</Text>
                <Text style={ styles.steps }>{ steps }</Text>
            </View>

            <View style={ styles.alergics }>
                <Text style={ [styles.details, !isGlutenFree && styles.no ]  }>Gluten: { isGlutenFree ? 'NO' : 'YES'}</Text>
                <Text style={ [styles.details, !isLactoseFree && styles.no ]  }>Lactose: { isLactoseFree ? 'NO' : 'YES'}</Text>
                <Text style={ [styles.details, isVegan && styles.no ]  }>Vegan: { isVegan ? 'NO' : 'YES'}</Text>
                <Text style={ [styles.details, isVegetarian && styles.no ]  }>Vegetarian: { isVegetarian ? 'NO' : 'YES'}</Text>
              
            </View>

        </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dbb8a4'
    },
    imageContainer: {
        width: '100%',
        height: '40%',
        // flex: 1
    },
    textContainer: {
        padding: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 20,
        alignSelf: 'center'
    },
    ingredients: {
        marginBottom: 15,
        fontWeight: 'bold'
    },
    steps: {
        
    },
    image: {
        flex: 1
    },
    yes: {
        color: 'green'
    },
    no: {
        color: 'red'
    },
    details: {
        color: 'green'
    },
    alergics: {
        alignItems: 'center',
        paddingBottom: 50
    }

})
