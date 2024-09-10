import { useEffect } from 'react';
import { View } from 'react-native';
import { MainLayout } from '../../components';
import { images, screens } from '../../constant';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Employee from '../employee';
import Recording from '../recording';

const Tab = createMaterialTopTabNavigator();

const Home = ({ navigation }: any) => {
    useEffect(() => { }, []);

    return (
        <MainLayout headerTitle={'My Recorder'} leftIcon={images.menuIc}>
            <View style={{ flex: 1, backgroundColor: 'lightpink' }}>
                <Tab.Navigator>
                    <Tab.Screen name={screens.recording} component={Recording} />
                    <Tab.Screen name={screens.employee} component={Employee} />
                </Tab.Navigator>
            </View>
        </MainLayout>
    );
};

export default Home;
