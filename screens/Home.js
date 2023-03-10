import { useState } from 'react'
import { View, FlatList, Text, SafeAreaView } from 'react-native'

import { COLORS, NFTData } from '../constants';
import { NFTCard, FocusedStatusBar, HomeHeader } from '../components';

const Home = () => {
  const [ntfData, setNFTData] = useState(NFTData);

  const handleSearch = (value) => {
   if(!value.length) return setNFTData(NFTData);

    const filteredData = NFTData.filter(item => 
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if(filteredData.length) setNFTData(filteredData);
    else setNFTData(NFTData);
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={ntfData}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <NFTCard data={item} />}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}
          />
        </View>

        <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}>
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home