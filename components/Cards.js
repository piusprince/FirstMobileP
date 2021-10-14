import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import data from './homeData'


const Cards = ({data}) => {
    return (
    
            <View>
                {data.map((item, id) => (
                    <TouchableOpacity style={styles.card} key={id}>
                        <Image style={styles.itemImage} source={item.img}/>
                        <Text>{item.name}</Text>
                        <View style={styles.priceContainer}>
                            <Text style={styles.currency}>{item.symbol}</Text>
                            <Text>{item.price}</Text>
                        </View>

                      
                    </TouchableOpacity>
                  
                ))}
            </View>

     
    )
}

const styles = StyleSheet.create({
    
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        backgroundColor: '#F3F3F5',
        height: 225,
        borderRadius: 20,
    },

    itemImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },

    itemName: {
        fontWeight: 'normal'
    },

    priceContainer: {
      flexDirection: 'row'  
    },

    currency: {
        color: '#F76D1D',
    },

    price: {    
        fontWeight: 'bold'
    }
})


export default Cards
