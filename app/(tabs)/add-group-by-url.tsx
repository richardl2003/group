import { BRAND_COLOR } from "@/utils/colors";
import { router, Stack, useRouter } from "expo-router";
import { Button } from "react-native";

export default function AddGroupByUrl() {
  const router = useRouter();
  return (
    <>
      <Stack.Screen
        options={{
          title: "Add group by URL",
          headerRight: () => (
            <Button
              title="Cancel"
              color={BRAND_COLOR}
              onPress={() => router.back()}
            />
          ),
        }}
      />
    </>
  );
}
