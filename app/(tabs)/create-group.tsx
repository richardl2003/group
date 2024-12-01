import { GroupForm } from "@/components/ui/group-form";
import { BRAND_COLOR } from "@/utils/colors";
import { Stack, useRouter } from "expo-router";
import { Button } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function CreateGroupScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Button
              title="Cancel"
              color={BRAND_COLOR}
              onPress={() => router.back()}
            />
          ),
        }}
      />
      <SafeAreaProvider>
        <SafeAreaView edges={["top"]} className="flex-1 bg-white">
          <GroupForm />
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
