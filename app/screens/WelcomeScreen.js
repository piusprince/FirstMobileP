import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons'; 



const WelcomeScreen = () => {
    return (
        <View style={styles.background}>
            <Image style= {styles.logoImg} source={{uri: "https://images.unsplash.com/photo-1528784351875-d797d86873a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"}}/>
            <Text style={styles.mainText}>Welcome to </Text>
            <Text style={styles.subText}>power bike shop</Text>

                        
            <TouchableOpacity style={styles.gmailLogin}>
                <AntDesign name="google" size={24} color="red" />
                <Text style={styles.gmailLoginText}>Login with Gmail</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.appleLogin}>
                <FontAwesome name="apple" size={24} color="white" />
                <Text style={styles.appleLoginText}>Login with Apple</Text>
            </TouchableOpacity>

            <View style={styles.signIn}>
                <Text>Not a member?</Text>
                <TouchableOpacity>
                    <Text style={styles.signInLink}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    logoImg: {
        transform: [{rotate: '-45deg'}],
        height: 200,
        width: 200,
        borderRadius: 20,
        
    },

    mainText: {
        color: 'black',
        fontSize: 40,
        marginBottom: 10,
        marginTop: 80,
    },

    subText: {
        fontSize: 40,
        fontWeight: '700',
        marginBottom: 10,
        textTransform: 'capitalize'
    
    },

    gmailLogin: {
        backgroundColor: '#F3F3F5',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
        padding: 10,
        width: 300,
    },

    gmailLoginText: {
        color: 'black',
        paddingLeft: 20,
    },

    appleLogin: {
        backgroundColor: 'black',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
        padding: 10,
        width: 300,
        
    },

    appleLoginText : {
        color: 'white',
        paddingLeft: 20,
    },

    signIn: {
        flexDirection: 'row',
    },

    signInLink: {
        color: '#F76D1D',
        marginLeft: 5,
    }
})


export default WelcomeScreen

