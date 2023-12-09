import React, { Fragment, useEffect, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, {  PROVIDER_GOOGLE, Geojson } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { donate } from '../components/Functions';
import { MyDialog, InputBox, Title, SCREEN_HEIGHT, SCREEN_WIDTH } from '../components/Utilities';
// import Geojson from 'react-native-geojson';
import Geocoder from 'react-native-geocoding';


const Home = ({route, navigation}) => {
    const [isVisibleInfo, setIsVisibleInfo] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [countries, setCountries] = React.useState([])
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [donationAmount, setDonationAmount] = useState('')
    const [chosenCountry, setChosenCountry] = useState('')
    

    useEffect(() => {
        dataFetch()
    },[])

    const dataFetch = async () => {
      await dataFetch1()
    }

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
    
          // 👇️ otherwise return the object as is
          return obj;
        });
    
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



    return (
        <View style={{height: SCREEN_HEIGHT}}>
          
                <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={{
                    height: SCREEN_HEIGHT,
                    width: '100%',
                }}
                maxZoomLevel={10}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                onPress={async (txt) => {console.log('AAA', txt.nativeEvent.coordinate, getCountry(txt.nativeEvent.coordinate));
              }}
                ref={refMaps}
                >

     </MapView>
        </View>
    )
}

export default Home
