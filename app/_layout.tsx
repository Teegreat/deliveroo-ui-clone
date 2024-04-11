'@react-navigation/native';
import CustomHeader from '@/Components/CustomHeader';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

export default function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
      <Stack>
        <Stack.Screen name="index" options={{
          header: () => <CustomHeader />
        }} />
      </Stack>
  );
}
