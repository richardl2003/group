import React from "react";
import { Text, View, Pressable, TextInput, Alert } from "react-native";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { FontAwesome } from "@expo/vector-icons";

export function GroupForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      currency: "",
      information: "",
      participants: [{ name: "John" }, { name: "Jane" }, { name: "Jack" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "participants",
  });

  const onSubmit = (data: any) => {
    Alert.alert("Form Submitted", JSON.stringify(data, null, 2));
  };

  return (
    <View className="p-4">
      <Text className="text-lg font-bold mb-4">Group Information</Text>

      {/* Group Name */}
      <View className="mb-4">
        <Text className="text-sm font-semibold mb-1">Group Name</Text>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Group name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              className="border border-gray-300 rounded-lg p-2"
            />
          )}
        />
        {errors.name && (
          <Text className="text-red-500 text-sm">{errors.name.message}</Text>
        )}
      </View>

      {/* Currency */}
      <View className="mb-4">
        <Text className="text-sm font-semibold mb-1">Currency Symbol</Text>
        <Controller
          control={control}
          name="currency"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="$"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              className="border border-gray-300 rounded-lg p-2"
            />
          )}
        />
        {errors.currency && (
          <Text className="text-red-500 text-sm">
            {errors.currency.message}
          </Text>
        )}
      </View>

      {/* Group Information */}
      <View className="mb-4">
        <Text className="text-sm font-semibold mb-1">Group Information</Text>
        <Controller
          control={control}
          name="information"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="What information is relevant to group participants?"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              className="border border-gray-300 rounded-lg p-2 h-20"
              multiline
            />
          )}
        />
      </View>

      {/* Participants */}
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-lg font-bold">Participants</Text>
        <Pressable
          onPress={() => append({ name: "" })}
          className="px-4 py-2 bg-blue-500 rounded-lg"
        >
          <Text className="text-white">Add</Text>
        </Pressable>
      </View>

      {fields.map((item, index) => (
        <Controller
          key={item.id}
          control={control}
          name={`participants.${index}.name`}
          render={({ field: { onChange, onBlur, value } }) => (
            <View className="flex-row items-center mb-2">
              <TextInput
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                className="flex-1 border border-gray-300 rounded-lg p-2"
              />
              <Pressable onPress={() => remove(index)} className="ml-2 p-2">
                <FontAwesome name="trash-o" size={20} color="red" />
              </Pressable>
            </View>
          )}
        />
      ))}

      {/* Submit Button */}
      <Pressable
        onPress={handleSubmit(onSubmit)}
        className="mt-4 bg-blue-500 rounded-lg p-4 items-center"
      >
        <Text className="text-white text-lg font-semibold">Save</Text>
      </Pressable>
    </View>
  );
}
