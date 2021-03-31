// Custom TextInput

import React from 'react';
import {Text,View,Image} from 'react-native';
import {styles} from "../Utilities/Common/Styles";

const LabelView = (props) => {
  return (
      <View style = {styles.textinputcontainerStyle}>
        <Image style = {styles.iconStyle} source = {props.imgsource}></Image>
        <Text style={styles.textinputStyle}>{props.Text}</Text>
      </View>
    
  );
};

export default LabelView;
