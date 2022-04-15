import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default function Questao02 (){


    return (

        <View style={styles.container}>

             <View style={styles.box}>
                 <Text style={styles.text}>Quadrado 1</Text>
             </View>

             <View style={styles.box2}>
                 <Text style={styles.text}>Quadrado 2</Text>
             </View>

             <View style={styles.box3}>
                <Text style={styles.text}>Quadrado 3</Text>
             </View>
             
        </View>

    );
    }

    const styles = StyleSheet.create ({
        container: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
            
        },

        box: {
            height: 125,
            width: 125,
            backgroundColor: 'cyan',
            margin:10,  
        }, 

        box2: {
            height: 125,
            width: 125,
            backgroundColor: 'teal',
            margin:10,
        },
        
        box3: {
            height: 125,
            width: 125,
            backgroundColor: 'pink',
            margin:10,
        }, 

        text: {
            marginTop:50,
            textAlign: 'center',
            color: 'black',
            
        }

    });

