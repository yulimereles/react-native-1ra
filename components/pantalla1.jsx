import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';

const Pantalla1 = () => {
  return (
    <View style={styles.container}>
        <ScrollView  keyboardShouldPersistTaps='always'
                contentContainerStyle={styles.scrollContent}
                scrollEnabled={true}>
            <Text style={styles.text}>Princesas Disney!!</Text>
        </ScrollView>

    </View>
  )
}
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px'
  },
  text:{
    fontSize: '30@s',
    marginLeft: '10@ms',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: '10@vs',
},
})

export default Pantalla1
