


import { FlatList, StyleSheet, View } from "react-native"
import { MEALS, CATEGORIES } from "../data/dummy-data"
import { MealItem } from "../components/MealItem"
import { useLayoutEffect } from "react"


export const MealsOverviewScreen = ({ route, navigation }) => {

  const catId = route.params.categoryId

  const displayedMeals = MEALS.filter( (mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  })


  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find( (category) => category.id === catId).title;

    navigation.setOptions({
      title: categoryTitle
    });
  }, [catId, navigation])

  const renderMealItem = ( itemData ) => {
    return <MealItem item={itemData.item} navigation={ navigation }/>
  }

  return (
    <View style={ styles.container }>
        <FlatList 
          data={displayedMeals}
          keyExtractor={ (item) => item.id}
          renderItem={ renderMealItem}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})
