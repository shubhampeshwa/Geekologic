import { Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { styles } from './style';
import { images } from '../../constant';

const numColumns = 2;
const Recording = () => {
  const data = [
    { id: '1', title: 'Recording 1', color: '#FFF3FC', borderColor: '#FEB4EB' },
    { id: '2', title: 'Recording 2', color: '#E8E8FD', borderColor: '#B494FD' },
    { id: '3', title: 'Recording 3', color: '#FDE4E4', borderColor: '#ED8D8D' },
    { id: '4', title: 'Recording 4', color: '#E4FDFD', borderColor: '#77C2FF' },
  ];

  const renderItem = ({ item }: any) => (
    <View
      style={[
        styles.card,
        { backgroundColor: item.color, borderColor: item.borderColor },
      ]}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={images.playBtIc} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={images.deleteIc} />
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

export default Recording;
