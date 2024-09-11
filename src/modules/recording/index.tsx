import { Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { styles } from './style';
import { colors, images, screens } from '../../constant';

const numColumns = 2;
const Recording = ({ navigation }: any) => {
  const data:any = []
    // { id: '1', title: 'Recording 1', color: '#FFF3FC', borderColor: '#FEB4EB' },
    // { id: '2', title: 'Recording 2', color: '#E8E8FD', borderColor: '#B494FD' },
    // { id: '3', title: 'Recording 3', color: '#FDE4E4', borderColor: '#ED8D8D' },
    // { id: '4', title: 'Recording 4', color: '#E4FDFD', borderColor: '#77C2FF' },
  // ];

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

  const renderEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Image source={images.emptySearch}/>
      <View style={{paddingTop:20,alignItems:"center"}}>
      <Text style ={{fontSize:20,color:'#113C6D',fontWeight:'700'}}>No Recoding Found!!</Text>
      <Text style ={{fontSize:14,marginTop:10}}>There's nothing here yet. Hit the record button to </Text>
      <Text style ={{fontSize:14}}>capture something amazing!</Text>
      </View>
    </View>
  );

  const floatingButtonView = () => {
    return <TouchableOpacity style={{
      bottom: 32,
      right: 24,
      borderRadius: 16,
      paddingVertical: 20,
      position: 'absolute',
      paddingHorizontal: 22,
      backgroundColor: colors.appColor
    }} activeOpacity={0.6} onPress={() => navigation.navigate(screens.addRecording)}>
      <Image source={images.micIc} />
    </TouchableOpacity>
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        // keyExtractor={item => item.id}
        numColumns={numColumns}
        ListEmptyComponent={renderEmptyComponent}
        contentContainerStyle={styles.container}
      />
      {floatingButtonView()}
    </View>
  );
};

export default Recording;
