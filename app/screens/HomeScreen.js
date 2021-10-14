import React, { StrictMode } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, Image } from 'react-native'
import Constants from 'expo-constants'

import { 
    FontAwesome5, 
    MaterialIcons,
     Entypo, 
     Feather, 
     SimpleLineIcons, 
     Ionicons } from '@expo/vector-icons'; 


import Categories from '../../components/Categories';
import data from '../../components/homeData'

const Card = ({data}) => {
    
        return (
            <TouchableOpacity style={styles.card} >
                <Image style={styles.itemImage} source={data.img}/>
                <Text>{data.name}</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.currency}>{data.symbol}</Text>
                    <Text>{data.price}</Text>
                </View>
            </TouchableOpacity>
        )

}


const HomeScreen = () => {
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.navTop}>
                <FontAwesome5 name="grip-lines" size={24} color="black" />
                <MaterialIcons name="electric-bike" size={24} color="black" />

                <View style={styles.navTopEnd}>
                    <Entypo name="magnifying-glass" size={24} color="black" />
                    <Feather name="bell" size={24} color="black" />
                </View>
       
            </View>

            <View style={styles.headingText}>
                <Text>The Worlds</Text>
                <Text style={styles.colorText}>Best Bike</Text>
            </View>

            <View>
                <Text style={styles.categoriesHeader}>Categories</Text>
               <Categories />
            </View>

            <FlatList style={styles.cardSection}
                numColumns = {2}
                data = { data }
                renderItem={({item}) => {
                    return <Card data={item} />;
                  }}
                keyExtractor={item => item.id}
            />

            <View style={styles.navBottom}>
                <TouchableOpacity>
                    <MaterialIcons name="home-filled" size={24} color="black" />    
                </TouchableOpacity>
                <TouchableOpacity style={styles.record}>
                    <Ionicons name="mic-circle-sharp" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SimpleLineIcons name="handbag" size={24} color="black" /> 
                </TouchableOpacity>
            </View>

        
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: Constants.statusBarHeight,
    },

    navTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 30,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },

    navTopEnd: {
        flexDirection: 'row',
    },

    headingText: {
        flexDirection: 'row',
        fontSize: 30,
        alignItems: 'center',
    },

    colorText: {
        color: '#F76D1D',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 5,
    },

    categoriesHeader: {
        fontSize: 20,
        fontWeight: '700',
        marginTop: 20,
        marginBottom: 20,
    },

    categoriesLinks: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'red',
    },

    cardSection: {
        marginTop: 10,
        paddingBottom: 10,
    },

    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3F3F5',
        height: 220,
        margin: 10,
        borderRadius: 10,
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
    },

    navBottom: {
        backgroundColor: '#F3F3F5',
        flexDirection: 'row',
        padding: 20,
        width: '100%',
        justifyContent: 'space-between',
        alignSelf: 'flex-end',
        marginTop: 20,
    },

    record: {
        position: 'absolute',
        right: '50%',
        top: -15,
        transform: [{scale: 2.5}]
    }

})


export default HomeScreen
