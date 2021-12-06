// import React from 'react'
// import { View, Text } from 'react-native'
// import DestinationnSearch from './src/screens/DestinationSearch/index'
// const App = () => {
//   return (
//     <View>
//       <DestinationnSearch/>
//     </View>
//   )
// }

// export default App

import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGaol, setCourseGoal] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = GoalTitle => {
    if(GoalTitle.length === 0){
      return;
    }
    setCourseGoal(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), value: GoalTitle},
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoal(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };
  const cancelGoalAdditionalHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGaol}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
