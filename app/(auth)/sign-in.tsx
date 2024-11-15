import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormFiled from '../components/FormFiled'
import CustomButton from '../components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () =>  {
  const [form, setform] = useState({
    email:'',
    password:''
  })
  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = () => {

  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='min-h-[87vh] w-full my-6 px-4 justify-center'>
        <Image
        source={images.logo}
        resizeMode='contain'
        className='w-[115px] h-[35px]'
        />
        <Text className='text-2xl  text-white text-semibold mt-10 font-psemibold'>
          Log in to Aora
        </Text>
        <FormFiled
        title="Email"
        value={form.email}
        handleChangeText={(e: any) => setform({...form,
          email: e })}
          otherStyle="mt-7"
          keyboardType="email-address"
        />
        <FormFiled
        title="Password"
        value={form.password}
        handleChangeText={(e: any) => setform({...form,
          password: e })}
          otherStyle="mt-7"
          isLoading={isSubmitting}
        />
        <CustomButton 
            title='Sign In'
            handlePress={submit}
            containerStyles='mt-7' textStyles={undefined} isLoading={undefined}        />
        <View className='justify-center flex-row gap-2 pt-5 '>
          <Text className=' text-lg text-gray-100 font-pregular'>
            Don't have account?
          </Text>
          <Link href="/sign-up" className='text-lg font-psemibold text-secondary'>Sign Up</Link>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn