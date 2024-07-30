import { View, Text, StyleSheet } from "react-native";
import { Image } from 'expo-image';



export const MealItem = ({ item }) => {

  return (
    <>
    <View style={ styles.container }>

      <View style={ styles.textBox }>
      <Text>{ item.title }</Text>
      </View>

      <View style={ styles.imageBox }>
        <Image 
          source={ item.imageUrl }
          style={ styles.image }
          placeholder={item.title} 
        />
      </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f0eeb0',
    height: 100,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    elevation: 4,
    borderRadius: 8,
    marginBottom: 10
  },
  textBox: {
    flex: 2,
    marginRight: 10
  },
  imageBox: {
    flex: 1,
    elevation: 5
    // height: '80%',
    // width: '50%',
    // backgroundColor: 'red',
    // borderRadius: 20
  },
  image: {
    height: '98%',
    width: '98%',
    borderRadius: 8
  }
})
