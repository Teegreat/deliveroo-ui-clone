'@react-navigation/native';
import CustomHeader from '@/Components/CustomHeader';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Stack, useNavigation } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

export default function RootLayoutNav() {
  const navigation = useNavigation()
  return (
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen name="index" options={{
          header: () => <CustomHeader />
        }} />

        <Stack.Screen name="(modal)/filter" options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
          headerTitle: 'Filter',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.lightGrey
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => {navigation.goBack()}}>
              <Ionicons name='close-outline' size={28} color={Colors.primary} />
            </TouchableOpacity>
          )
        }}/>
      </Stack>
      
    </BottomSheetModalProvider>
  );
}
