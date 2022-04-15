import React, {useState} from "react";
import { View, Text, Button, StyleSheet } from "react-native";


const Cont = () => { 
    const [cont, setCont] = useState(0);

    return (
        <View>
            <Text>Voce precionou o botão: {cont} veze(s)</Text> 
            <Button 
            title="Pressione me" 
            onPress={() => setCont(cont +1)} />
        </View>
    );
};

export default function Questao01 (){

    return(
        <View style={styles.container}>
            <Cont />
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

});

