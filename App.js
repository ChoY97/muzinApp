import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Dimensions, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button, Input} from 'react-native-elements';

// 로그인
function HomeScreen({navigation}) {
  // 아이디 비번 맞을 경우 페이지 이동
  const checkForm = () => {
    if (id == '1111' && pw == '2222') {
      navigation.navigate('User');
      setId('');
      setPw('');
    } else {
      Alert.alert('아이디 비밀번호를 확인해 주세요');
    }
  };
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  useEffect(() => {
    console.log(id, pw);
  }, [id, pw]);
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 30,
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          로그인
        </Text>
      </View>
      <View style={{flex: 2}}>
        <View style={{flex: 1}}>
          <Input
            onChangeText={text => setId(text)}
            placeholder="ID"
            value={id}
            containerStyle={{flex: 1, alignItems: 'center'}}
          />
        </View>
        <View style={{flex: 1}}>
          <Input
            onChangeText={text => setPw(text)}
            placeholder="PASSWORD"
            value={pw}
            secureTextEntry
            maxLength={20}
            containerStyle={{flex: 1, alignItems: 'center'}}
          />
        </View>
      </View>
      <View style={{flex: 3}}>
        <Button
          title="Login"
          containerStyle={{flex: 2, alignItems: 'flex-end'}}
          titleStyle={{fontSize: 20, fontWeight: 'bold'}}
          buttonStyle={{backgroundColor: '#98ff98'}}
          onPress={() => checkForm()}
        />
      </View>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text
          style={{
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            fontSize: 30,
            textAlign: 'left',
            textAlignVertical: 'center',
          }}>
          진모터스
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ScrollView horizontal={true}>
          <Button
            title="차량1"
            containerStyle={{flex: 1, padding: 10, width: 150, height: 100}}
            titleStyle={{fontSize: 20, fontWeight: 'bold'}}
            buttonStyle={{backgroundColor: '#98ff98'}}
          />
          <Button
            title="차량2"
            containerStyle={{flex: 1, padding: 10, width: 150, height: 120}}
            titleStyle={{fontSize: 20, fontWeight: 'bold'}}
            buttonStyle={{backgroundColor: '#98ff98'}}
          />
          <Button
            title="차량3"
            containerStyle={{flex: 1, padding: 10, width: 150, height: 120}}
            titleStyle={{fontSize: 20, fontWeight: 'bold'}}
            buttonStyle={{backgroundColor: '#98ff98'}}
          />
          <Button
            title="차량4"
            containerStyle={{flex: 1, padding: 10, width: 150, height: 120}}
            titleStyle={{fontSize: 20, fontWeight: 'bold'}}
            buttonStyle={{backgroundColor: '#98ff98'}}
          />
        </ScrollView>
      </View>
      <View style={{flex: 5}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Button
                title="그리드1"
                containerStyle={{
                  flex: 1,
                  padding: 50,
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                titleStyle={{fontSize: 20, fontWeight: 'bold'}}
              />
              <Button
                title="그리드2"
                containerStyle={{
                  flex: 1,
                  padding: 50,
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                titleStyle={{fontSize: 20, fontWeight: 'bold'}}
              />
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Button
                title="그리드3"
                containerStyle={{
                  flex: 1,
                  padding: 50,
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                titleStyle={{fontSize: 20, fontWeight: 'bold'}}
              />
              <Button
                title="그리드4"
                containerStyle={{
                  flex: 1,
                  padding: 50,
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                titleStyle={{fontSize: 20, fontWeight: 'bold'}}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen name="User" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
