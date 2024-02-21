import { AntDesign, Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Search from './Search'
import Logo from './svgs/logo.svg'

export default function FeedHeader() {
  //? Assets
  const insets = useSafeAreaInsets()

  //? Handers
  const handleIconClick = path => {
    router.push(path)
  }

  //? Render(s)
  return (
    <View style={{ paddingTop: insets.top }} className="p-3 bg-white shadow-sm">
      <View className="flex flex-row justify-between">
        <Logo width={120} height={40} />
        <View className="flex flex-row space-x-3">
          <TouchableOpacity
            onPress={() => {
              handleIconClick('/notice')
            }}
          >
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleIconClick('/cart')
            }}
          >
            <AntDesign name="shoppingcart" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Search />
    </View>
  )
}