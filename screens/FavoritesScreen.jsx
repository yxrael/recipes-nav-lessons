import { FlatList, Text } from "react-native"
import { MEALS } from "../data/dummy-data"




export const FavoritesScreen = () => {

  const favoritos = MEALS.filter( (item) => item.isFavorite === true );
  // const favo = favoritos.filter( (item) => item.isFavorite === true )
  // console.log(favo[0].title)

  // console.log(MEALS.filter( (item) => item.id === true ));

  return (
    <>
      <Text>COMIDAS FAVORITAS</Text>
      <FlatList 
        data={ favoritos }
        keyExtractor={ item => item.id }
        renderItem={ ({item}) => <Text>{item.title}</Text>}
      />
    </>
  )
}
