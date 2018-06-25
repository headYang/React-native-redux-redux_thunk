import { createStackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

export const RootStack = createStackNavigator({
        Login: {
            screen: LoginForm,
        },
        EmployeeList: {
            screen: EmployeeList,
            navigationOptions: () => ({
                headerStyle: {
                    backgroundColor: 'red',
                    alignSelf: 'center'
                },
                title: 'EmployeeList',

            })
        }
    }
)