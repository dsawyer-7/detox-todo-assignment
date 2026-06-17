import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [text, setText] = React.useState('');

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{ padding: 20 }}>
          <Text testID="welcomeText">Welcome to Detox Todo App</Text>

          <TextInput
            testID="taskInput"
            style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
            placeholder="Enter a new task"
            value={text}
            onChangeText={setText}
          />

          <TouchableOpacity testID="addButton" onPress={() => {}}>
            <Text style={{ backgroundColor: 'blue', color: 'white', padding: 10 }}>
              Add Task
            </Text>
          </TouchableOpacity>

          <Text testID="taskList" style={{ marginTop: 20 }}>
            Task List Will Appear Here
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;