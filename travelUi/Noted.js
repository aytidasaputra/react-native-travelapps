import React, { Component } from 'react'
import { View, Text, Button, ImageBackground, TouchableOpacity, Image, ScrollView, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
enableScreens();

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('./src/assets/images/selamatdatang.png')} style={{ flex: 1 }}>
                <Text style={{ marginLeft: '5%', marginTop: '20%', fontSize: 18 }}>Cara mudah</Text>
                <Text style={{ marginLeft: '5%', fontWeight: 'bold', marginBottom: 10, fontSize: 24 }}>Booking Tempat</Text>
                <Text style={{ marginLeft: '5%', fontSize: 14 }}>Tidak perlu lagi antri panjang</Text>
                <Text style={{ marginLeft: '5%', fontSize: 14 }}>untuk  membeli sebuah tiket</Text>
                <Text style={{ marginLeft: '5%', fontSize: 14, marginBottom: 20 }}>tempat wisata</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Detail')} activeOpacity={0.5} style={{ backgroundColor: '#483B66', padding: 10, width: '20%', marginLeft: '5%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{}} source={require('./src/assets/icons/icons2arrow.png')} />
                </TouchableOpacity>
            </ImageBackground>
        </View >
    );
}

function Detail({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', left: 0, right: 0, bottom: 0 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={0.5} style={{ width: 50, height: 50, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('./src/assets/icons/Home.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Klik', 'Anda mengklik', [{ text: 'Cancel', style: 'cancel' }, { text: 'ok' }])} activeOpacity={0.5} style={{ width: 50, height: 50, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('./src/assets/icons/Home.png')} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={{ width: 50, height: 50, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('./src/assets/icons/Home.png')} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={{ width: 50, height: 50, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('./src/assets/icons/Home.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const Stack = createNativeStackNavigator();

export default class componentName extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Detail" component={Detail} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
