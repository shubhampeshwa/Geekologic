import { useEffect } from "react"
import { View } from "react-native"
import { MainLayout } from "../../components"
import { images } from "../../constant"

const Home = ({ navigation }: any) => {

    useEffect(() => {
    }, [])

    return <MainLayout headerTitle={"My Recorder"} leftIcon={images.menuIc}>
        <View style={{ flex: 1, backgroundColor: 'lightpink' }}>

        </View>
    </MainLayout>
}

export default Home