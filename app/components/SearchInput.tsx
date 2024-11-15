import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyle,
  ...props
}) => { 
    const [showPassword,setShowPassword] = useState(false)
  return (
    <View className="flex flex-row items-center space-x-4 w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary">
        <TextInput 
        className="flex-1 text-white mt-0.5 font-pregular text-base"
        value={value}
        placeholder="Search for a video topic"
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === 'Password' && !showPassword}
        {...props}
        /> 
        <TouchableOpacity>
                <Image
                source={icons.search}
                className="w-5 h-5"
                resizeMode="contain"
                />
            </TouchableOpacity> 
    </View>
  );
};

export default SearchInput;
