import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import CountryFlag from "react-native-country-flag";
import Dialog from "react-native-dialog";
import { horizontalScale, verticalScale } from "./Metricscopy";
import DatePicker from "react-native-date-picker";

export const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window')


export const InputBox = ({txt, type, txt2, count, onChangeText, style}) => {
    return (

        type == 'post' ? 
        <View>
        <View style={{marginHorizontal: 20, marginVertical: 10, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderBottomColor: 'black'}}>
                        
            <TextInput onChangeText={onChangeText} placeholderTextColor={'gray'} style={{alignSelf: 'center', width: '90%', height: 40,}} placeholder={txt}/>

        </View>
            <Text style={{ width: '90%', marginLeft: 20, fontSize: 12, color: '#363132'}}>
                {txt2}: {count}
            </Text>
        </View>
        :

        <View style={{
       
        backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center', 
        justifyContent: 'center', borderRadius: 10, position: 'absolute', bottom : 100, left: 18}}>

            <TextInput onChangeText={onChangeText} style={{alignSelf: 'center', width: '90%', height: 40,borderRadius: 10, backgroundColor: 'gray', left: 17, paddingHorizontal: 20, top: 600}} placeholder={txt}/>
            
        </View>
    )
}

export const MyDialog = ({onCancel, onConfirm, date, open, type, after, before, iso, isVisible, txt0, txt1, txt11, txt2, txt21, txt3, onChangeText, handleYes, handleNo}) => (
    txt2 == 'When would you like to donate?' ? 
    <Dialog.Container visible={isVisible}>
        <Dialog.Title style={{fontSize: 18}}>Donation!</Dialog.Title>
        <Dialog.Description style={{fontSize: 18}}>
        {'\n'}
        {txt2}
        {'\n'}
        {txt3}
        {'\n'}
        </Dialog.Description>
        <TextInput onChangeText={onChangeText} style={{alignSelf: 'center', width: '60%', height: 40,borderRadius: 10, backgroundColor: 'gray', paddingHorizontal: 20, bottom: 15, fontSize: 20}}  placeholder={'Enter Donation Amount'}/>
        <Dialog.Button label="Continue" onPress={handleYes} />
        <Dialog.Button label="No" onPress={handleNo} />
  </Dialog.Container>
    :
    type == 5 ? 
    <Dialog.Container visible={isVisible}>
        <Dialog.Title style={{fontSize: 18}}>Donation</Dialog.Title>
        <Dialog.Description style={{fontSize: 18}}>
        {'\n'}
        {txt2}
        {'\n'}
        {txt3}
        {'\n'}
        </Dialog.Description>
        <TextInput onChangeText={onChangeText} style={{alignSelf: 'center', width: '60%', height: 40,borderRadius: 10, backgroundColor: 'gray', paddingHorizontal: 20, bottom: 15, fontSize: 20}}  placeholder={'Enter Donation Amount'}/>
        <Dialog.Button label="Continue" onPress={handleYes} />
        <Dialog.Button label="No" onPress={handleNo} />
  </Dialog.Container>:
    type == 3 ? 
<Dialog.Container visible={isVisible}>
        <Dialog.Title style={{fontSize: 18}}>Donation</Dialog.Title>
        <Dialog.Description style={{fontSize: 18}}>
        {txt2}
        </Dialog.Description>
        <Dialog.Button label="OK" onPress={handleYes} />
  </Dialog.Container>
      :
      type == 2 ? 
      <Dialog.Container visible={isVisible}>
              <Dialog.Title style={{fontSize: 18}}>Donation</Dialog.Title>
              <Dialog.Description style={{fontSize: 18}}>
              </Dialog.Description>
              <Dialog.Button label="Yes" onPress={handleYes} />
              <Dialog.Button label="No" onPress={handleNo} />
        </Dialog.Container>
            :
after ? 
<Dialog.Container visible={isVisible}>
        <Dialog.Title style={{fontSize: 18}}>Congratulations!</Dialog.Title>
        <Dialog.Description style={{fontSize: 18}}>
        {'\n'}
        {txt1}
        {'\n'}
        {txt2}
        {'\n'}
        {txt3}
        {'\n'}
        </Dialog.Description>
        <Dialog.Button label="Yes" onPress={handleYes} />
        <Dialog.Button label="No" onPress={handleNo} />
  </Dialog.Container>
      :
before ? 
<Dialog.Container visible={isVisible}>
        <Dialog.Title style={{fontSize: 18}}>Congratulations!</Dialog.Title>
        <Dialog.Description style={{fontSize: 18}}>
        {'\n'}
        {txt0}
        {'\n'}
        {txt1}
        {'\n'}
        {txt11}
        </Dialog.Description>
        <View style={{justifyContent: 'center', alignSelf: 'center'}}>
            <CountryFlag style={{alignSelf: 'center', bottom: 30}} isoCode={iso} size={50} />
        </View>
        <Dialog.Description style={{fontSize: 18}}>
        {'\n'}
        {txt2}
        {'\n'}
        {txt21}
        {'\n'}
        </Dialog.Description>
        <Dialog.Button label="Yes" onPress={handleYes} />
        <Dialog.Button label="No" onPress={handleNo} />
  </Dialog.Container>
  :
<Dialog.Container visible={isVisible}>
        <Dialog.Title style={{fontSize: 18}}>Congratulations!</Dialog.Title>
        <Dialog.Description style={{fontSize: 18}}>
        {'\n'}
        {txt1}
        {'\n'}
        {txt2}
        {'\n'}
        {txt3}
        {'\n'}
        </Dialog.Description>
        <TextInput onChangeText={onChangeText} style={{alignSelf: 'center', width: '60%', height: 40,borderRadius: 10, backgroundColor: 'gray', paddingHorizontal: 20, bottom: 15, fontSize: 20}}  placeholder={'Enter Donation Amount'}/>
        <Dialog.Button label="Yes" onPress={handleYes} />
        <Dialog.Button label="No" onPress={handleNo} />
  </Dialog.Container>
)

export const Title = ({txt}) => (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={{
            fontSize:32,
            fontWeight: '500',
            textAlign: 'center',
            color: '#8ecae6',
            top: 50
        }}>
            {txt}
        </Text>
    </View>
)

export const BigButton = ({text, onPress, type, display}) => (
    type == 3 ? 
    <TouchableOpacity activeOpacity={.8} style={{backgroundColor: '#ecb207', alignItems: 'center', alignContent: 'center', borderRadius: 5, width: SCREEN_WIDTH / 1.1, alignSelf: 'center', height: 40, justifyContent: 'center', display: 'flex'}} onPress={onPress}>
        <Text style={{
            fontSize: 16,
            fontWeight: '500',
            color: 'white',
            textAlign: 'center'
        }}>
            {text}
        </Text>
    </TouchableOpacity>
    : 
     type == 2 ? 
    <TouchableOpacity activeOpacity={.8} style={{ alignItems: 'center', alignContent: 'center', borderRadius: 5, width: SCREEN_WIDTH / 1.1, alignSelf: 'center', height: 40, justifyContent: 'center'}} onPress={onPress}>
        <Text style={{
            fontSize: 16,
            fontWeight: '500',
            color: 'white',
            textAlign: 'center'
        }}>
            {text}
        </Text>
    </TouchableOpacity>
    :
    <TouchableOpacity activeOpacity={.8} style={{backgroundColor: '#ecb207', alignItems: 'center', alignContent: 'center', borderRadius: 5, width: SCREEN_WIDTH / 1.1, alignSelf: 'center', height: 40, justifyContent: 'center'}} onPress={onPress}>
        <Text style={{
            fontSize: 16,
            fontWeight: '500',
            color: 'white',
            textAlign: 'center'
        }}>
            {text}
        </Text>
    </TouchableOpacity>
)

export const TabBar = ({txt}) => (
    <View style={{height:80, justifyContent: 'center', width: '100%', backgroundColor: '#7871AA',}}>
     <View style={{alignSelf: 'center', flexDirection: 'row', justifyContent: 'center', top: 20}}>
        <Image
            style={{
                width: 30,
                height: 30,
                borderRadius: 5
            }}
            source={require('../components/1024.png')}
        />
        <Text style={{color: 'white', fontWeight: '600', top: 8, marginLeft: 10,}}>
            {txt}
        </Text>
      </View>
    </View>
)

export const BottomBar = ({txt, onPress}) => (
    <View style={{height:80, justifyContent: 'center', width: '100%', backgroundColor: '#7871AA',}}>
        <View style={{alignSelf: 'center', flexDirection: 'row', justifyContent: 'center', top: -10}}>
            <BigButton type={2} onPress={onPress} text={'Go To Home'}/>    
        </View>
    </View>
)

export const FocusButtonPause = ({isAction, isAction2, onPress1, onPress2, selectedIndex}) => {
    
    return (
        <View style={styles.focusButtonPauseCntCnt}>
            <TouchableOpacity style={[styles.focusButtonPauseCnt1]} onPress={onPress1}  activeOpacity={0.8}>
                <Text style={styles.focusButtonPauseText1}>
                    {selectedIndex == 5 ? 'Donate' : 'Continue'}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    focusButtonCnt : {
        width: horizontalScale(100),
        backgroundColor: 'black',
        height: verticalScale(50),
        borderRadius: horizontalScale(25),
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom:SCREEN_WIDTH/4,
    },
    focusButtonText: {
        fontSize: 18,
        fontWeight: 500,
        color: 'white',
        alignSelf: 'center'
    },
    focusButtonPauseCntCnt : {
        width: horizontalScale(100),
        height: verticalScale(50),
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom:SCREEN_WIDTH/4,
        flexDirection: 'row',
        marginHorizontal: horizontalScale(40)
    },
    focusButtonPauseCnt1 : {
        width: horizontalScale(100),
        backgroundColor: '#F3F3F3',
        height: verticalScale(50),
        borderRadius: horizontalScale(25),
        justifyContent: 'center',
        alignSelf: 'center',
        marginHorizontal: horizontalScale(20)
    },
    focusButtonPauseText1: {
        fontSize: 18,
        fontWeight: 500,
        color: '#212121',
        alignSelf: 'center'
    },
    focusButtonPauseCnt2 : {
        width: horizontalScale(100),
        backgroundColor: '#212121',
        height: verticalScale(50),
        borderRadius: horizontalScale(25),
        justifyContent: 'center',
        alignSelf: 'center',
        marginHorizontal: horizontalScale(20)
    },
    focusButtonPauseText2: {
        fontSize: 18,
        fontWeight: 500,
        color: 'white',
        alignSelf: 'center'
    }
})