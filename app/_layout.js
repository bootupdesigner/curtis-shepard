import { Drawer } from 'expo-router/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Layout() {
    return (
        < Drawer >
            <Drawer.Screen name='index' options={{
                drawerLabel: "Home",
                title: "Web Developer Portfolio",
                tabBarIcon: () => (
                    <Ionicons name="home" size={32} color="black" />
                ),
            }} />
            <Drawer.Screen name='portfolio/index' options={{
                presentation: 'modal',
                drawerLabel: "Portfolio",
                title: "Portfolio",
                tabBarIcon: () => (
                    <Ionicons name="folder-open" size={32} color="black" />),
            }} />

            <Drawer.Screen name='experience' options={{
                drawerLabel: 'Experience',
                title: 'Experience',
                showDrawerLabel: false,

            }} />
        </Drawer>
    );
}