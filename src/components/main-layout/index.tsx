import { memo } from "react"
import { Image, Text, View } from "react-native"
import { MainLayoutI } from "./interface"
import { styles } from "./style"

const MainLayout = (props: MainLayoutI) => {
  const { headerTitle } = props
  return <View style={styles.container}>
    <View style={styles.topbarV}>

      <View>
        {/* <Image source={ } /> */}
      </View>
      <View>
        <Text>{headerTitle}</Text>
      </View>
    </View>
  </View>
}

export default memo(MainLayout)