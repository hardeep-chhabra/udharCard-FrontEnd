import { StyleSheet,ScrollView, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import EntypoIcon from "react-native-vector-icons/Entypo";
import Svg, { Ellipse } from "react-native-svg";




const ClientPaymentDetailsTab = () => {

      useEffect(() => {
        console.log('ClientPaymentDetailsTab MOUNTED');

        return () => {
        console.log('ClientPaymentDetailsTab UNMOUNTED');
        }
      })




      return (
        
      <ScrollView style={[styles.container]} contentContainerStyle={{paddingBottom:24}}>

          <View style={styles.loremIpsumStackColumnRow}>
            <View style={styles.loremIpsumStackColumn}>
                <Text style={styles.johnDue}>John Due</Text>
              <Text style={styles.paymentDUe}>Payment Due on 25-02-2012</Text>
            </View>
              <View style={styles.ellipseStack2}>
                <Svg viewBox="0 0 35.1 39.55" style={styles.ellipse}>
                  <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="red"
                    cx={18}
                    cy={19}
                    rx={16}
                    ry={19}
                  ></Ellipse>
                </Svg>
                <EntypoIcon name="cross" style={styles.icon}></EntypoIcon>
              </View>

            <View style={styles.rect} />

          </View>

          <View style={styles.loremIpsumStackColumnRow2}>

          <View style={styles.rect3} />

          <View style={styles.ellipseStack3}>
                <Svg viewBox="0 0 35.1 39.55" style={styles.ellipse2}>
                  <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="green"
                    cx={18}
                    cy={19}
                    rx={16}
                    ry={19}
                  ></Ellipse>
                </Svg>
                <EntypoIcon name="check" style={styles.icon3}></EntypoIcon>
              </View>

            <View style={styles.loremIpsumStackColumn2}>
                <Text style={styles.johnDue2}>James Bond</Text>
              <Text style={styles.paymentDUe2}>Payment Due on 25-02-2012</Text>
            </View>

          </View>

          <View style={[styles.loremIpsumStackColumnRow, {backgroundColor:'rgba(255,176,178,1)'}]}>
            <View style={styles.loremIpsumStackColumn}>
                <Text style={styles.johnDue}>John Due</Text>
              <Text style={styles.paymentDUe}>Payment Due on 25-02-2012</Text>
            </View>
              <View style={styles.ellipseStack2}>
                <Svg viewBox="0 0 35.1 39.55" style={styles.ellipse}>
                  <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="red"
                    cx={18}
                    cy={19}
                    rx={16}
                    ry={19}
                  ></Ellipse>
                </Svg>
                <EntypoIcon name="cross" style={styles.icon}></EntypoIcon>
              </View>

            <View style={styles.rect} />

          </View>

          <View style={[styles.loremIpsumStackColumnRow, {backgroundColor:'rgba(202,229,210,1)'}]}>
            <View style={styles.loremIpsumStackColumn}>
                <Text style={styles.johnDue}>John Due</Text>
              <Text style={styles.paymentDUe}>Payment Due on 25-02-2012</Text>
            </View>
              <View style={styles.ellipseStack2}>
                <Svg viewBox="0 0 35.1 39.55" style={styles.ellipse}>
                  <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="red"
                    cx={18}
                    cy={19}
                    rx={16}
                    ry={19}
                  ></Ellipse>
                </Svg>
                <EntypoIcon name="cross" style={styles.icon}></EntypoIcon>
              </View>

            <View style={styles.rect} />

          </View>

          <View style={[styles.loremIpsumStackColumnRow2, {backgroundColor:'rgba(78,184,217,1)'}]}>

          <View style={styles.rect3} />

          <View style={styles.ellipseStack3}>
                <Svg viewBox="0 0 35.1 39.55" style={styles.ellipse2}>
                  <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="green"
                    cx={18}
                    cy={19}
                    rx={16}
                    ry={19}
                  ></Ellipse>
                </Svg>
                <EntypoIcon name="check" style={styles.icon3}></EntypoIcon>
              </View>

            <View style={styles.loremIpsumStackColumn2}>
                <Text style={styles.johnDue2}>James Bond</Text>
              <Text style={styles.paymentDUe2}>Payment Due on 25-02-2012</Text>
            </View>

          </View>

          <View style={[styles.loremIpsumStackColumnRow2, {backgroundColor:'rgba(255,200,87,1)'}]}>

          <View style={styles.rect3} />

          <View style={styles.ellipseStack3}>
                <Svg viewBox="0 0 35.1 39.55" style={styles.ellipse2}>
                  <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="green"
                    cx={18}
                    cy={19}
                    rx={16}
                    ry={19}
                  ></Ellipse>
                </Svg>
                <EntypoIcon name="check" style={styles.icon3}></EntypoIcon>
              </View>

            <View style={styles.loremIpsumStackColumn2}>
                <Text style={styles.johnDue2}>James Bond</Text>
              <Text style={styles.paymentDUe2}>Payment Due on 25-02-2012</Text>
            </View>

          </View>

    </ScrollView>

      )


}

export default ClientPaymentDetailsTab



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
    flexDirection:'column',
  },
  scrollArea: {
    width: 319,
    height: 79,
    backgroundColor: "#E6E6E6",
    borderWidth: 0,
    borderColor: "rgba(246,89,89,1)",
    borderRadius: 14,
    borderStyle: "solid",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 3,
      width: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 178
  },
  scrollArea_contentContainerStyle: {
    height: 79,
    width: 319,
    overflow: "visible"
  },
  loremIpsum: {
    top: 15,
    left: 20,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  johnDue: {
    top: 10,
    left: 20,
    // position: "absolute",
    // fontFamily: "Arial, Helvetica, sans-serif",
    color: "black",
    width: 170,
    height: 31,
    fontSize: 15
  },

  johnDue2: {
    top: 10,
    right:10,
    // position: "absolute",
    // fontFamily: "Arial, Helvetica, sans-serif",
    color: "black",
    width: 270,
    height: 31,
    fontSize: 15,
    textAlign:'right'
  },

  loremIpsumStack: {
    width: 163,
    height: 31
  },
  paymentDUe: {
    fontFamily: "roboto-regular",
    color: "black",
    marginTop: 4,
    fontSize:10,
    width:300,
    left:20
  },

  paymentDUe2: {
    fontFamily: "roboto-regular",
    color: "black",
    marginTop: 4,
    fontSize:10,
    width:300,
    left:111
  },

  loremIpsumStackColumn: {
    width: 175,
    marginBottom: 8
  },
  loremIpsumStackColumn2: {
    // width: 15,
    // marginBottom: 8
  },
  rect: {
    width: 7,
    height: 50,
    backgroundColor: "white",
    marginLeft: 17,
    borderRadius:10,
    marginTop:12
  },

  rect3: {
    width: 7,
    height: 50,
    backgroundColor: "white",
    borderRadius:10,
    marginTop:12
  },

  loremIpsumStackColumnRow: {
    height: 75,
    flexDirection: "row",
    marginTop: 20,
    backgroundColor:'rgba(220,200,172,1)',
    // paddingLeft:20,
    marginRight:30,
    borderTopRightRadius:15,
    borderBottomRightRadius:15,
  },

  loremIpsumStackColumnRow2: {
    height: 75,
    flexDirection: "row",
    marginTop: 20,
    backgroundColor:'rgba(97,219,180,1)',
    // paddingLeft:20,
    marginLeft:30,
    borderTopLeftRadius:15,
    borderBottomLeftRadius:15,
  },

  scrollArea1: {
    top: 0,
    left: 0,
    width: 319,
    height: 79,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 0,
    borderColor: "rgba(246,89,89,1)",
    borderRadius: 14,
    borderStyle: "solid",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 3,
      width: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  scrollArea1_contentContainerStyle: {
    height: 79,
    width: 319,
    overflow: "visible",
    flexDirection: "row"
  },
  rect2: {
    width: 13,
    height: 59,
    backgroundColor: "rgba(223,26,26,0.19)",
    overflow: "visible"
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 35,
    height: 38,
    position: "absolute"
  },

  ellipse2: {
    top: 0,
    left: 0,
    width: 35,
    height: 38,
    // position: "absolute"
  },

  icon2: {
    top: 0,
    left: 4,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 32,
    width: 32,
    height: 35
  },

  icon3: {
    top: 0,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 32,
    width: 32,
    height: 35
  },

  icon: {
    top: 1,
    left: 3,
    // position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 32,
    width: 32,
    height: 35
  },
  ellipseStack: {
    width: 36,
    height: 38,
    marginLeft: 15,
    marginTop: 11
  },
  ellipseStack2: {
    width: 36,
    height: 38,
    marginLeft: 95,
    marginTop: 18
  },

  ellipseStack3: {
    // width: 36,
    // height: 38,
    marginLeft: 9,
    marginTop: 18
  },

  paymentDUe1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 23,
    marginTop: 43
  },
  rect2Row: {
    height: 59,
    flexDirection: "row",
    flex: 1,
    marginRight: 14,
    marginTop: 10
  },
  johnDue1: {
    top: 10,
    left: 194,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 163,
    height: 31,
    fontSize: 24
  },
  scrollArea1Stack: {
    width: 357,
    height: 79,
    marginTop: 26,
    marginLeft: 37
  }
});
