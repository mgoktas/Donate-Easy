import React, { Fragment, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import MapView, {  PROVIDER_GOOGLE, Geojson } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { addNotification, donate } from '../components/Functions';
import { MyDialog, InputBox, Title, SCREEN_HEIGHT, SCREEN_WIDTH, BigButton, TabBar } from '../components/Utilities';
// import Geojson from 'react-native-geojson';
import Geocoder from 'react-native-geocoding';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Notifications } from 'react-native-notifications';
import DatePicker from 'react-native-date-picker';


const Home = ({route, navigation}) => {

  const [isVisible, setIsVisible] = useState(false)
  const [isVisibleWrong, setIsVisibleWrong] = useState(false)
  const [isVisibleWrong2, setIsVisibleWrong2] = useState(false)
  const [isRegistered, setIsRegistered] = useState(Notifications.isRegisteredForRemoteNotifications())
  const [where, setWhere] = useState('')
  
  const [date, setDate] = useState(new Date())
  
  useEffect(() => {
    
    Notifications.registerRemoteNotifications()
    
    const check = async () => {

     setIsRegistered(await Notifications.isRegisteredForRemoteNotifications())
    }

<<<<<<< HEAD
    const dataFetch1 = async () => {

        await fetch('https://api.countrystatecity.in/v1/countries', {
          method: 'GET',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'X-CSCAPI-KEY': '<YOUR-API-KEY>'
      },
      })
      .then(response => response.json())
      .then(json => {
          // console.log(json)
          setCountries(json)
          setIsLoading(false)
          countries.map((item) => {
            updateState(item)
          })
      })
      .catch(error => {
          console.error(error);
      });

      

        }

    const search = (text) => {
            setFilteredDataSource(countries)
            setMasterDataSource(countries)
            
            if (text) {
              const newData = masterDataSource.filter(
              function (item, index) {
                const itemData = item.name
                    ? item.name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            })
              setFilteredDataSource(newData);
            } else {
                setTimeout(() => {
                    // setIsDisabled(true)
                },500)
                setFilteredDataSource([]);
            }
        };

    const updateState = (name) => {
        const newState = filteredDataSource.map(obj => {

          if (obj.name == name) {
            if (obj.id == 100){
              
              removeFromFollowingList(obj) //remove from my followings list
            return {...obj, id: 10};
            } else {

              addToFollowingList(obj) //add to my followings list
              return {...obj, id: 100};

            }

          }
=======
    check()
>>>>>>> 88e0436 (update)
    
    
<<<<<<< HEAD
        setFilteredDataSource(newState);
      };

      const getCountry = async (coordinates) => {
        Geocoder.from(coordinates.latitude, coordinates.longitude)
        .then(json => {
          var addressComponent = json.results[0].address_components
          // console.log(getCountry(addressComponent, countries))
          
          // navigation.navigate('Donate', addressComponent)

          // countries.map(obj => {

          //   if (obj.name == addressComponent[i].long_name) {

          //     if (obj.id == 100){
                
          //     return {...obj, id: 10};
          //     } else {
  
          //       return {...obj, id: 100};
  
          //     }
  
          //   }
      
          //   // 👇️ otherwise return the object as is
          //   return obj;
          // });
          console.log(addressComponent)
          addressComponent.map(obj1 => {


            countries.map(obj => {
              if (obj1.long_name == obj.name){
                console.log(obj1.long_name)
                navigation.navigate('Donate', {chosenCountry: obj1.long_name})
              }

            })


          })


        })
        .catch(error => console.warn(error));  
      }

useEffect(() => {
  Geocoder.init("<YOUR-API-KEY>"); // use a valid API key
},[])

const refMaps = useRef()

=======
  },[])
>>>>>>> 88e0436 (update)


    return (

        <ImageBackground source={require('../components/images/moneys.jpg')} style={{ justifyContent: 'space-between', height: SCREEN_HEIGHT, paddingVertical: 150, alignContent: 'center', alignItems: 'center'}}>

          <View style={{position: 'absolute', top:0, width: SCREEN_WIDTH}}>
            <TabBar txt={'Donate Easy'} />
          </View>

          <MyDialog

            isVisible={isVisible} 
            txt2={'Where would you like to donate?'} 
            onChangeText={txt => setWhere(txt)}
            txt3={'Your donations are secure with us.'} 
            handleYes={async () => { setIsVisible(false); setTimeout(()=>{setIsVisibleWrong(true)}, 400) }} 
            handleNo={() => {setIsVisible(false);}}
             />


<DatePicker
              modal={true}
                    mode='date'
                    open={isVisibleWrong}
                    date={date}
                    onConfirm={(date) => {
                      setDate(date)
                      setIsVisibleWrong(false)
                      setIsVisibleWrong2(true)
                      addNotification(date, where)
                    }}  
                    onCancel={() => {
                      setIsVisibleWrong(false)
                    }}
                />


          <MyDialog

          type={3}
          txt2={'Notification created'}
          isVisible={isVisibleWrong2} 
          handleYes={async () => { setIsVisibleWrong2(false); }}
          />

          <BigButton onPress={() => {navigation.navigate('DonateNoCountry')}} text={'Donate Now'}/>
        
          <BigButton onPress={() => {navigation.navigate('Map')}} text={'Explore The Map'}/>

          <BigButton onPress={() => {navigation.navigate('DonationBenefits')}} text={'Why You Should Donate?'}/>
    
          <BigButton type={3} display={ isRegistered ? 'flex' : 'none' } onPress={() => {setIsVisible(true)}} text={'Donate Later'}/>
    
        </ImageBackground>

    )
}

export default Home
