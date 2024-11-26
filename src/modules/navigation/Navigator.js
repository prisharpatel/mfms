import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { 
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import NavigatorView from './RootNavigation';

import AvailableInFullVersion from '../../modules/availableInFullVersion/AvailableInFullVersionViewContainer';
import { colors } from '../../styles';
const iconHome = require('../../../assets/images/home.png');
const iconTicket = require('../../../assets/images/tickets.png');
const iconResumeDrop = require('../../../assets/images/resume.png');
const iconPartners = require('../../../assets/images/handshake.png');
const iconFFS = require('../../../assets/images/ffs_icon.png');
const iconFAQ = require('../../../assets/images/faq.png');
const logoImage = require('../../../assets/images/navbarlogo.png')

const drawerData = [
  {
    name: 'Home',
    icon: iconHome,
  },
  {
    name: 'Buy Your Ticket',
    icon: iconTicket,
  },
  {
    name: 'Resume Drop',
    icon: iconResumeDrop,
  },
  {
    name: 'FAQ',
    icon: iconFAQ,
  },
  {
    name: 'Partners',
    icon: iconPartners,
  },
  {
    name: 'Fashion Forward Showcase',
    icon: iconFFS,
  }
];

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (

    
    <DrawerContentScrollView {...props} style={{ padding: 0 }}>
      <View style={styles.imageContainer}>
        <Image style={styles.drawerImage} source={logoImage} />
      </View>
      {drawerData.map((item, idx) => (
        <><DrawerItem
          key={`drawer_item-${idx + 1}`}
          label={() => (
            <View
              style={styles.menuLabelFlex}>
              <Image
                style={{ width: 25, height: 25, resizeMode: 'contain' }}
                source={item.icon}
              />
              <Text style={styles.menuTitle}>{item.name}</Text>
            </View>
          )}
          onPress={() => props.navigation.navigate(item.name)} 
          activeBackgroundColor={colors.blue} 
          activeTintColor={colors.white}
          />
         </>
      ))}
      </DrawerContentScrollView>
  );
}

export default function App() {

  return (

    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: colors.white,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Homes" component={NavigatorView} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  menuTitle: {
    marginLeft: 10,
    color: colors.black
  },
  menuLabelFlex: {
    color: colors.black,
    display: 'flex',
    flexDirection: 'row'
  },
  divider: {
    borderBottomColor: colors.black,
    opacity: 0.2,
    borderBottomWidth: 1,
    margin: 15,
  },
  imageContainer: {
    justifyContent: 'center',
    backgroundColor: colors.black,
    alignItems: 'center',
  },
  drawerImage: {
    width: 400, 
    height: 200, 
    resizeMode: 'contain'
  },
});


