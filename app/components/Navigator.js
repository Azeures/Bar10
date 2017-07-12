import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DrinkDetails from './DrinkDetails';


const Navigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Drink Menu',
    },
  },
  Drinks: {
    screen: DrinkDetails,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name,
    })
  },
}, {
  initialRouteName: 'Home',
  headerMode: 'screen',
});

export default Navigator;
