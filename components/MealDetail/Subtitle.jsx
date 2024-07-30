import { StyleSheet, Text, View } from "react-native"




export const Subtitle = ({children}) => {
  return (
    <View style={ styles.subtitleContainer }>
          <Text style={ styles.subtitle }>{children}</Text>
      </View>
  )
}


const styles=StyleSheet.create({
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