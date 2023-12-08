import { Dimensions, Text, TextInput, View } from "react-native"
import CountryFlag from "react-native-country-flag";
import Dialog from "react-native-dialog";

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

export const MyDialog = ({after, before, iso, isVisible, txt0, txt1, txt11, txt2, txt21, txt3, onChangeText, handleYes, handleNo}) => (
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