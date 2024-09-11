import { Text, View, FlatList, Image } from 'react-native';
import { styles } from './style';
import { colors, images } from '../../constant';
import { useEffect, useState } from 'react';
import { getEmployee } from '../../provider/api-services';

const Employee = () => {
  const [empData,setData] = useState([]) 
  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const fetchEmployeeData = () => {
    try {
      getEmployee()
        .then((res: any) => {
          console.log('res=--', JSON.stringify(res));
          setData(res.data)
        })
        .catch((e: any) => {
          console.log('err=--', JSON.stringify(e));
        });
    } catch (e: any) {
      console.log('e-', JSON.stringify(e));
    }
  };

  

  const renderItem = ({ item }: any) => (
    <View style={styles.cardStyle}>
      <View style={styles.employeRowStyle}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.empDetailsStyle}>{'Employee ID'}</Text>
          <Text style={{ fontSize: 14, color: 'red', marginLeft: 5 }}>
            {item.id}
          </Text>
        </View>
        <View
          style={{
            height: 25,
            width: 25,
            borderRadius: 4,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFCDCD',
          }}>
          <Image source={images.deleteIc} />
        </View>
      </View>
      <View style={styles.rowStyle}>
        <Text style={styles.labelTxt}>{'Employee Name'}</Text>
        <Text style={styles.valueTxt}>{item.employee_name}</Text>
      </View>
      <View style={styles.sepratorStyle}></View>
      <View style={styles.rowStyle}>
        <Text style={styles.labelTxt}>{'Employee Salary'}</Text>
        <Text style={styles.valueTxt}>{item.employee_salary}</Text>
      </View>
      <View style={styles.sepratorStyle}></View>
      <View style={styles.rowStyle}>
        <Text style={styles.labelTxt}>{'Employee Age'}</Text>
        <Text style={styles.valueTxt}>{item.employee_age}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '100%', paddingHorizontal: 16 }}>
        <View style={{ paddingBottom: 8 }}>
          <Text
            style={{ fontSize: 16, fontWeight: '600', color: colors.darkBlue }}>
            {'Employee Details'}
          </Text>
        </View>
        <FlatList
          data={empData}
          renderItem={renderItem}
          // keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Employee;
