import { cn } from "@/utils/cn";
import { bgBrand, textBrand } from "@/utils/colors";
import { router } from "expo-router";
import { View, Text, Pressable } from "react-native";

export default function HomeInitScreen() {
  return (
    <View className="h-full flex-col items-center justify-center">
      <Text className="text-xl font-semibold mt-8">Welcome to Group</Text>
      <Text className="text-lg">Create your first decision.</Text>
      <Pressable
        className={cn(
          bgBrand,
          "flex-row justify-center rounded-lg px-4 py-2 mt-4 active:opacity-60"
        )}
        onPress={() =>
          router.push({
            pathname: "/(tabs)/create-group",
          })
        }
      >
        <Text className="text-white text-lg font-semibold">
          Create decision
        </Text>
      </Pressable>
      <Text className="text-lg mt-12">
        Do you want to add an existing group here?
      </Text>
      <Pressable
        className="flex-row justify-center rounded-lg px-4 py-2 active:opacity-60"
        onPress={() =>
          router.push({
            pathname: "/(tabs)/add-group-by-url",
          })
        }
      >
        <Text className={cn(textBrand, "text-lg font-semibold")}>
          Add group by URL
        </Text>
      </Pressable>
    </View>
  );
}
