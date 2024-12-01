import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, usePathname } from "expo-router";
import { Text } from "react-native";
import HomeInitScreen from "@/components/home/home-init";
import { useCallback, useEffect, useState } from "react";
import { getGroups, Group } from "@/utils/groups";

export default function GroupScreen() {
  const [recentGroups, setRecentGroups] = useState<Group[] | null>(null);

  const fetchGroups = useCallback(() => {
    getGroups().then((groups) => {
      setRecentGroups(groups);
    });
  }, []);

  const navigation = useNavigation();
  const pathname = usePathname();

  useEffect(() => {
    if (navigation.isFocused()) {
      fetchGroups();
    }
  }, [pathname, navigation, fetchGroups]);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        {recentGroups?.length === 0 ? <HomeInitScreen /> : <Text>Groups</Text>}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
