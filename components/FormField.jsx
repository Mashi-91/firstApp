import { View, Text, TextInput } from "react-native";
import React from "react";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyle,
  ...props
}) => {
  return (
    <View className={`space-y-2 ${otherStyle}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 items-center rounded-2xl focus:border-secondary"> 
        
        </View>
    </View>
  );
};

export default FormField;
