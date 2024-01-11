import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, FlatList, ImageBackground, Text } from 'react-native';
import MapView, {  PROVIDER_GOOGLE, Geojson } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { donate } from '../components/Functions';
import { MyDialog, InputBox, Title, SCREEN_HEIGHT, SCREEN_WIDTH, BigButton, FocusButtonPause } from '../components/Utilities';
// import Geojson from 'react-native-geojson';
import Geocoder from 'react-native-geocoding';
import { SafeAreaView } from 'react-native-safe-area-context';
import { datas } from '../components/Data';


const Home = ({route, navigation}) => {

    const [visibleItems, setVisibleItems] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [imageSource, setImageSource] = useState(require('../components/images/donate1.jpg'))
    


  const viewabilityConfig = useRef({
    // minimumViewTime: 100,
    itemVisiblePercentThreshold: 90,
}).current;

const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    // viewableItems.map(({ item }) => setImageSource(item.image))
    // viewableItems.map(({ item }) => setSelectedIndex(item.index-1))
}, []);


    const configref = useRef(viewabilityConfig)
    const itemschangedref = useRef(onViewableItemsChanged)

    const currentFlatlistIndex = useRef(null)
    const flatlistRef = useRef(null)

    return (

    
        <ImageBackground source={imageSource} style={{height: SCREEN_HEIGHT, paddingVertical: 150, alignContent: 'center', alignItems: 'center'}} >
        <FlatList
        viewabilityConfig={configref.current}
        onViewableItemsChanged={itemschangedref.current}        
        estimatedItemSize={100} 
        pagingEnabled={false} 
        extraData={selectedIndex}
        data={datas}
        renderItem={({item}) => 
        <View style={{marginHorizontal: 10}}>
        <Text style={{alignSelf: 'flex-start', fontSize: 20, color: 'white', fontWeight: '500', textAlign: 'center', marginBottom: 30}}>
            {item.title}
        </Text>
        <Text style={{alignSelf: 'flex-start', fontSize: 24, color: item.color, fontWeight: '500', width: SCREEN_WIDTH/1}}>
            {item.desc}
        </Text>
        </View>
    }
        horizontal={true} 
        keyExtractor={(item, index) => index} 
        showsHorizontalScrollIndicator={false}
        ref={flatlistRef}
        scrollEnabled={false}
        >   
        
        </FlatList>
        {/* <FocusSlide mode={'monk mode'} minute={mins} seconds = {secs} /> */}
        <FocusButtonPause selectedIndex={selectedIndex} onPress1={() => {

                console.log(selectedIndex);
                setSelectedIndex(selectedIndex + 1);
                flatlistRef.current.scrollToIndex({ index: selectedIndex, animated: true }); setImageSource(datas[selectedIndex].image);
                if (selectedIndex == 5) {
                    navigation.navigate('DonateNoCountry');
                }

            } } isAction={undefined} isAction2={undefined} onPress2={undefined}/>
        </ImageBackground>

    )
}

export default Home