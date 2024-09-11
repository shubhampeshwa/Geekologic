import { View } from 'react-native';
import { MainLayout } from '../../components';
import { images } from '../../constant';

const AddRecording = ({ navigation }: any) => {
  return (
    <MainLayout
      headerTitle={'Recording'}
      leftIcon={images.leftArrowIc}
      onPress={() => navigation.goBack()}>
      <View style={{ flex: 1 }}>
        
      </View>
    </MainLayout>
  );
};

export default AddRecording;
