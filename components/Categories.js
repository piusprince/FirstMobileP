import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const categoriesLink = ['All', 'RoadBike', 'Mountain']

const Categories = () => {
    return (
        <View style={styles.links}>
            {categoriesLink.map((item, id) => (


                <TouchableOpacity>
                      <Text key={id}>{item}</Text>
                </TouchableOpacity>
              
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    links: {
        justifyContent: 'space-around',
        flexDirection: 'row',
    }
})


export default Categories
