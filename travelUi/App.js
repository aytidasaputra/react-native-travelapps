import React, { Component } from 'react'
import { View, Text, Button, ImageBackground, TouchableOpacity, Image, ScrollView, Alert, TextInput, Switch } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
const Stack = createNativeStackNavigator();


function HomeScreen({ navigation }) {
  return (
    <ImageBackground style={{ flex: 1 }} source={require('./src/assets/images/selamatdatang.png')}>
          <View style={{ marginTop: '20%', marginLeft: '5%' }}>
            <Text style={{ fontSize: 18 }}>Cara Mudah</Text>
             <Text style={{ fontSize: 24, fontWeight: 'bold' }}>BOOKING TEMPAT</Text>
             <Text style={{ fontSize: 16, marginTop: 10 }}>Tidak perlu lagi antri panjang</Text>
             <Text style={{ fontSize: 16 }}>untuk membeli sebuah tiket</Text>
             <Text style={{ fontSize: 16  }}>tempat wisata</Text>

             <TouchableOpacity onPress={() => navigation.navigate('Login')} activeOpacity={0.5} style={{ backgroundColor: '#483B66', padding: 10, width: 100, marginTop: 10, borderRadius: 10 }}>
                <Image style={{ justifyContent: 'center', alignSelf: 'center' }} source={require('./src/assets/icons/icons2arrow.png')} />
             </TouchableOpacity>
          </View>
      </ImageBackground>
  );
}


function LoginScreen({navigation}) {
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={0.5} style={{ padding: 10, width: 100, marginTop: 60, borderRadius: 10 }}>
                <Image style={{ justifyContent: 'center', alignSelf: 'center' }} source={require('./src/assets/icons/Vector.jpg')} />
      </TouchableOpacity>

      <View style={{ marginLeft: 40, marginTop: 40 }}>
        <Text style={{ fontSize: 20, color: '#655A82' }}>Selamat Datang</Text>
        <Text style={{ fontSize: 20, color: '#655A82' }}>Kembali</Text>
      </View>


      <View style={{ marginTop: 50 }}> 
        <Text style={{ marginLeft: 40, fontWeight: 'bold', color: '#655A82' }}>Nama Pengguna</Text>
        <TextInput style={{ borderWidth: 1, marginHorizontal: 40, borderRadius: 10, borderColor: '#F3E3F0', marginTop: 5 }} />
        
        <Text style={{ marginLeft: 40, fontWeight: 'bold', color: '#655A82', marginTop: 25 }}>Kata Sandi</Text>
        <TextInput style={{ borderWidth: 1, marginHorizontal: 40, borderRadius: 10, borderColor: '#F3E3F0', marginTop: 5 }} />
      </View>


      <TouchableOpacity onPress={() => navigation.navigate('MainMenu')} style={{ backgroundColor: '#655A82', marginHorizontal: 40, marginTop: 30, padding: 10, borderRadius: 10 }} activeOpacity={0.5}>
        <Text style={{ color: '#fff', justifyContent: 'center', alignSelf: 'center' }}>Masuk</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{ marginTop: 140 }}>
        <Text style={{ justifyContent: 'center', alignSelf: 'center', fontWeight: 'bold' }}>Belum punya akun? Daftar baru</Text>
      </TouchableOpacity>
      
    </View>
  );
}

function RegisterScreen({navigation}) {
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} activeOpacity={0.5} style={{ padding: 10, width: 100, marginTop: 60, borderRadius: 10 }}>
                <Image style={{ justifyContent: 'center', alignSelf: 'center' }} source={require('./src/assets/icons/Vector.jpg')} />
      </TouchableOpacity>

      <View style={{ marginLeft: 40, marginTop: 40 }}>
        <Text style={{ fontSize: 20, color: '#655A82' }}>Buat</Text>
        <Text style={{ fontSize: 20, color: '#655A82' }}>Pengguna Baru</Text>
      </View>


      <View style={{ marginTop: 50 }}> 
        <Text style={{ marginLeft: 40, fontWeight: 'bold', color: '#655A82', marginTop: 25 }}>Email Pengguna</Text>
        <TextInput style={{ borderWidth: 1, marginHorizontal: 40, borderRadius: 10, borderColor: '#F3E3F0', marginTop: 5 }} />
        
        <Text style={{ marginLeft: 40, fontWeight: 'bold', color: '#655A82' }}>Nama Pengguna</Text>
        <TextInput style={{ borderWidth: 1, marginHorizontal: 40, borderRadius: 10, borderColor: '#F3E3F0', marginTop: 5 }} />
        
        <Text style={{ marginLeft: 40, fontWeight: 'bold', color: '#655A82', marginTop: 25 }}>Kata Sandi</Text>
        <TextInput style={{ borderWidth: 1, marginHorizontal: 40, borderRadius: 10, borderColor: '#F3E3F0', marginTop: 5 }} />
      </View>


      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ backgroundColor: '#655A82', marginHorizontal: 40, marginTop: 30, padding: 10, borderRadius: 10 }} activeOpacity={0.5}>
        <Text style={{ color: '#fff', justifyContent: 'center', alignSelf: 'center' }}>Daftar</Text>
      </TouchableOpacity>
      
    </View>
  );
}


function MainMenu({navigation}) {
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20 }}>
          <Image style={{ marginTop: 10 }} source={require('./src/assets/icons/listmenu.png')} /> 
          <Image style={{ width: 40, height: 40, borderRadius: 30 }} source={require('./src/assets/images/merbabu.jpg')} /> 
        </View>

        <Text style={{ fontSize: 24, color: '#655A82', fontWeight: 'bold', marginLeft: 10, marginTop: 30 }}>Cari Tempat</Text>

        <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 30 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#655A82' }}>Pengalaman</Text>
          <Text style={{ marginHorizontal: 10, fontWeight: 'bold', fontSize: 18, color: '#655A82' }}>Petualangan</Text>
          <Text style={{ marginHorizontal: 10, fontWeight: 'bold', fontSize: 18, color: '#655A82' }}>Aktivitas</Text>
        </View>


        <ScrollView horizontal={true} style={{ height: 250}}>
          <TouchableOpacity onPress={()=> navigation.navigate('Detail')}>
            <Image style={{ width: 200, height: 240, borderRadius: 30, marginTop: 20 }} source={require('./src/assets/images/merbabu.jpg')} />
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 10, color: '#655A82'  }}>Gunung Berbabu</Text>
            <Text style={{ marginLeft: 10 }}>Magelang, Jawa Tengah</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 20 }}>
            <Image style={{ width: 200, height: 240, borderRadius: 30, marginTop: 20 }} source={require('./src/assets/images/villakhayangan.jpeg')} />
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 10, color: '#655A82'  }}>Villa Khayangan</Text>
            <Text style={{ marginLeft: 10 }}>Bogor, Jawa Barat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 20 }}>
            <Image style={{ width: 200, height: 240, borderRadius: 30, marginTop: 20 }} source={require('./src/assets/images/villakhayangan.jpeg')} />
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 10, color: '#655A82'  }}>Villa Khayangan</Text>
            <Text style={{ marginLeft: 10 }}>Bogor, Jawa Barat</Text>
          </TouchableOpacity>
        </ScrollView>


        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginTop: 20, marginHorizontal: 10  }}>
          <Text style={{ fontWeight: 'bold', color: '#655A82' }}>Mau kemana hari ini?</Text>
          <Text style={{ color: '#655A82'  }}>Lihat Semua</Text>
        </View>

        <ScrollView horizontal={true} style={{ marginTop: -20, marginLeft: 10, }}>
          <View>
            <TouchableOpacity style={{ backgroundColor: '#F7EDF5', width: 60, height: 60, borderRadius: 10 }}>
              
            </TouchableOpacity>
            <Text style={{ marginLeft: 10}}>Hutan</Text>
          </View>
          <View style={{ marginLeft: 20}}>
            <TouchableOpacity style={{ backgroundColor: '#F7EDF5', width: 60, height: 60, borderRadius: 10 }}>
              
            </TouchableOpacity>
            <Text style={{ marginLeft: 10}}>Hutan</Text>
          </View>
          <View style={{ marginLeft: 20}}>
            <TouchableOpacity style={{ backgroundColor: '#F7EDF5', width: 60, height: 60, borderRadius: 10 }}>
              
            </TouchableOpacity>
            <Text style={{ marginLeft: 10}}>Hutan</Text>
          </View>
          <View style={{ marginLeft: 20}}>
            <TouchableOpacity style={{ backgroundColor: '#F7EDF5', width: 60, height: 60, borderRadius: 10 }}>
              
            </TouchableOpacity>
            <Text style={{ marginLeft: 10}}>Hutan</Text>
          </View>
          <View style={{ marginLeft: 20}}>
            <TouchableOpacity style={{ backgroundColor: '#F7EDF5', width: 60, height: 60, borderRadius: 10 }}>
              
            </TouchableOpacity>
            <Text style={{ marginLeft: 10}}>Hutan</Text>
          </View>
          <View style={{ marginLeft: 20}}>
            <TouchableOpacity style={{ backgroundColor: '#F7EDF5', width: 60, height: 60, borderRadius: 10 }}>
              
            </TouchableOpacity>
            <Text style={{ marginLeft: 10}}>Hutan</Text>
          </View>
          <View style={{ marginLeft: 20}}>
            <TouchableOpacity style={{ backgroundColor: '#F7EDF5', width: 60, height: 60, borderRadius: 10 }}>
              
            </TouchableOpacity>
            <Text style={{ marginLeft: 10}}>Hutan</Text>
          </View>
         
        </ScrollView>


        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 30}}>
            <TouchableOpacity style={{ flex: 1 }}>
              <Image source={require('./src/assets/icons/Home.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1 }}>
              <Image source={require('./src/assets/icons/save.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1 }}>
              <Image source={require('./src/assets/icons/save.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1 }}>
              <Image source={require('./src/assets/icons/Settings.png')} />
            </TouchableOpacity>
        </View>


    </View>
  );
}


function Detail({navigation}) {
  return (
        <View>
          <View style={{ backgroundColor: '#655A82', flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
          <Image onPress={() => navigation.navigate('MainMenu')} style={{ marginLeft: 20 }} source={require('./src/assets/icons/Vector.jpg')} />
          <Text style={{ marginRight: 160, color: '#fff', fontWeight: 'bold'}}>Detail</Text>
          </View>
          <Image style={{ width: '100%', height: 200 }} source={require('./src/assets/images/merbabu.jpg')} />

          <View style={{ marginLeft: 10, marginTop: 20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#655A82' }}>Gunung Merbabu</Text>
            <Text>Magelang, Jawa Tengah</Text>


            <View style={{ marginTop: 30 }}>
            <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Jumlah Orang</Text>
            <TextInput style={{borderWidth: 1, borderColor: '#655A82', borderRadius: 10, width: 200}} />
            </View>

            <View style={{ marginLeft: 5, marginTop: 30 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#655A82' }}>Deskripsi</Text>
            <Text>is simply dummy text of the printing and typesetting industry.</Text>
           </View>

           <View style={{ flexDirection: 'row', marginTop: 120}}> 
            <TouchableOpacity>
              <Image source={require('./src/assets/icons/save.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: '#655A82', padding: 5, width: 300, marginLeft: 50, borderRadius: 5 }}>
              <Text style={{ justifyContent: 'center', alignSelf: 'center', color: '#fff', fontWeight: 'bold' }}>Proses</Text>
            </TouchableOpacity>
           </View>

          </View>
        </View>
      );
}


export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
       <NavigationContainer>
        <Stack.Navigator screenOptions={{
                        headerShown: false
                    }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="MainMenu" component={MainMenu} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
