import { memo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { MainLayoutI } from './interface';
import { styles } from './style';
import { colors, images } from '../../constant';

const MainLayout = (props: MainLayoutI) => {
  const { headerTitle, leftIcon, onPress, children } = props;
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          paddingHorizontal: 16,
          paddingVertical: 16,
          backgroundColor: colors.appColor,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{ paddingRight: 16 }}
          activeOpacity={0.6}
          onPress={onPress}>
          <Image source={leftIcon} />
        </TouchableOpacity>
        <View>
          <Text style={{ fontWeight: '600', fontSize: 18, color: colors.white }}>
            {headerTitle}
          </Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        {children}
      </View>
    </View>
  );
};

export default memo(MainLayout);
