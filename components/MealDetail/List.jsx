import { StyleSheet, Text, View } from "react-native"


export const List = ({ data, key}) => {
    
  return (
    < > 
    {
        data.map( item => 
        <View style={ style.listItem }> 
            <Text 
                style={ style.itemText }
                key={key}>{item}
            </Text>
        </View>)
        }
    </>
    
  )
}

const style = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497'
    },
    itemText: {
        color: '#351401',
        textAlign: 'center',

    }
})
