import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import  Constants  from 'expo-constants'
import { 
    AntDesign,  
    SimpleLineIcons,
    Ionicons,
    MaterialIcons,
    FontAwesome
} from '@expo/vector-icons'; 




import data from '../../components/homeData'

const Card = ({data}) => {
    
    return (
        <View style={styles.card} >
        
             <Image style={styles.itemImage} source={data.img}/>

            <View style={styles.cartCard}>
                <Text>{data.name}</Text>
                <Text>Mountain Bike</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.currency}>{data.symbol}</Text>
                    <Text>{data.price}</Text>
                </View>
            </View>

            <View style={styles.toggleItem}>
                <TouchableOpacity>
                    <FontAwesome name="minus-circle" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.itemCount}>1</Text>
                <TouchableOpacity>
                    <Ionicons name="add-circle" size={24} color="#F76D1D" />  
                </TouchableOpacity>
            </View>
         

            <TouchableOpacity style={styles.deleteBtn}>
                <AntDesign name="delete" size={24} color="#F76D1D" />
            </TouchableOpacity>
           
           
        </View>
    )

}


const Cart = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.nav}>
                <AntDesign name="arrowleft" size={24} color="black" style={styles.backArrow}/>
                <View style={styles.headingText}>
                    <Text>Cart Text</Text>
                    <Text>(3 items)</Text>
                </View>
                

            </View>

            <FlatList style={styles.cardSection}
                numColumns = {1}
                data = { data }
                renderItem={({item}) => {
                    return <Card data={item} />;
                  }}
                keyExtractor={item => item.id}
            />

            <View style={styles.checkOut} >
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 15, color: 'black'}}>Subtotal</Text>
                    <Text style={{color: '#F76D1D', justifyContent: "flex-end"}}>$</Text>
                    <Text>3400</Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>Shipping fee</Text>
                    <Text style={{color: '#F76D1D', justifyContent: 'flex-start'}}>$</Text>
                    <Text>1000</Text>
                </View>

                <View style={{flexDirection: 'row', borderWidth: 2, borderColor: 'black', borderStyle: 'dashed', justifyContent: 'space-between', marginTop: 10}}>
                    <Text>Total</Text>
                    <Text style={{color: '#F76D1D'}}>$</Text>
                    <Text>1000</Text>
            
                </View>

            </View>

            <TouchableOpacity style={styles.checkOutBtn}>
                    <Text style={styles.checkOutBtnText}>Proceed to Checkout</Text>
                </TouchableOpacity>
            
            <View style={styles.navBottom}>
                <TouchableOpacity>
                    <MaterialIcons name="home-filled" size={24} color="black" />    
                </TouchableOpacity>
                <TouchableOpacity style={styles.record}>
                    <Ionicons name="mic-circle-sharp" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SimpleLineIcons name="handbag" size={24} color="#F76D1D" /> 
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

    nav: {
        flexDirection: 'row',
        justifyContent: 'center',  
    },

    backArrow: {
      position: 'absolute',
      left: 0,
    },

    headingText: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'

    },

    card: {
        flex: 1,
        // 
        alignItems: 'center',
        height: 100,
        margin: 10,
        borderRadius: 10,
        flexDirection: 'row',
      
    },

    itemImage: {
        
        alignSelf: 'flex-start',
        // justifyContent: 'center',
        width: '20%',
        height: '100%',
        backgroundColor: '#F3F3F5',
        resizeMode: 'contain',
    },

    cartCard: {
        alignSelf: 'flex-start',
        paddingLeft: 20,
        flexDirection: 'column',
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

    deleteBtn: {
        position: 'absolute',
        top: 0,
        right: 0,
    },

    toggleItem: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0
    },

    itemCount: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        color: 'black'
    },

    checkOut: {
        padding: 50,
        margin: 20,
        backgroundColor: '#F3F3F5',
        borderRadius: 20,
    },

    subTotalContainer: {
        flexDirection: 'row',
    },

    checkOutBtn: {
        backgroundColor: '#F76D1D',
        padding: 10,
        borderRadius: 10,
        marginVertical: 30,
        marginLeft: 20,
        width: 300,
      
    },

    checkOutBtnText: {
        textAlign: 'center'
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


export default Cart
