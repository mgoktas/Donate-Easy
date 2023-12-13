import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, ImageBackground, Linking } from 'react-native';
import MapView, {  PROVIDER_GOOGLE, Geojson } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { donate } from '../components/Functions';
import { MyDialog, InputBox, Title, SCREEN_HEIGHT, SCREEN_WIDTH } from '../components/Utilities';
// import Geojson from 'react-native-geojson';
import Geocoder from 'react-native-geocoding';
import { SafeAreaView } from 'react-native-safe-area-context';
import CountryFlag from "react-native-country-flag";


const Donate = ({route, navigation}) => {

//   const chosenCountry = 'United States'
  const {chosenCountry} = route.params
  const [isVisibleInfo, setIsVisibleInfo] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [isVisibleWrong, setIsVisibleWrong] = useState(false)
  const [donationAmount, setDonationAmount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [country, setCountry] = React.useState({})
  const [text, setText] = React.useState('');
  const hasUnsavedChanges = Boolean(text);
  
  useEffect(() => {
    dataFetch()
},[])


React.useEffect(
  () =>
    navigation.addListener('beforeRemove', (e) => {
      if (!hasUnsavedChanges) {
        // If we don't have unsaved changes, then we don't need to do anything
        return;
      }

      // Prevent default behavior of leaving the screen
      e.preventDefault();

      // Prompt the user before leaving the screen
     
    }),
  [navigation, hasUnsavedChanges]
);


const dataFetch = async () => {
  await dataFetch2()
}

const dataFetch2 = async () => {

    await fetch(`https://api.api-ninjas.com/v1/country?name=${chosenCountry}`, {
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Api-Key': '<YOUR-API-KEY>'
  },
  })
  .then(response => response.json())
  .then(async (json) => {
    //   console.log(await json[0])
      setCountry(await json[0])
      setIsLoading(false)
  })
  .catch(error => {
    //   console.error(error);
  });

  

    }

    const handlePress = useCallback(async (url) => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL(url);
        } else {
        //   console.log(`Don't know how to open this URL: ${url}`);
        }
      }, [])

    return (
        !isLoading ? 
            <ImageBackground source={require('../components/images/1.jpg')} style={{flex: 1}} height={SCREEN_HEIGHT}> 

          <Title txt={'Donate Now!'}/>
          
            <MyDialog
             isVisible={isVisible} txt1={''} txt2={'How much would you like to donate?'} txt3={'Your donations are secure with us.'} onChangeText={(txt) => {setDonationAmount(txt)}} handleYes={async () => { setIsVisible(false); setTimeout(()=>{setIsVisibleWrong(true)}, 400) }} handleNo={() => {setIsVisible(false); ; navigation.navigate('Home')}}
             />

            <MyDialog
            after={true}
             isVisible={isVisibleWrong} txt1={'We do not currently support donations directly at countries.'} txt2={'Buy you can still donate to WFP(World Food Programme).'} txt3={'Would you like to proceed?'} onChangeText={(txt) => {setDonationAmount(txt)}} handleYes={async () => { setIsVisibleWrong(false); await donate(donationAmount, chosenCountry, handlePress);}} handleNo={() => {setIsVisibleWrong(false); ; navigation.navigate('Home')}}
             />
screens components
             <MyDialog 
             before={true}
             iso={country.iso2}
             isVisible={isVisibleInfo} txt0={`Country  Name: ${chosenCountry}`} txt1={`Country  Population: ${country.population}000`} txt11={''}
             txt2={`Life Expectancy at ${chosenCountry}: ${(country.life_expectancy_female + country.life_expectancy_male)/2}`}
             txt21={'Would you like to proceed?'} handleYes={() => {setIsVisibleInfo(false); setTimeout(()=>{setIsVisible(true)}, 400) }} handleNo={() => {setIsVisible(false); navigation.navigate('Home')}}
             />
             
            </ImageBackground>
          :   <SafeAreaView style={{height: SCREEN_HEIGHT}}>
            
          <ImageBackground source={require('../components/1.jpg')} style={{flex: 1}} height={SCREEN_HEIGHT}> 

        <Title txt={'Donate Now!'}/>
        
          </ImageBackground>
           
        </SafeAreaView>
    )
}

export default Donate
