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
        
      <ScrollView style={[styles.container]}>

      {/* <View style={styles.scrollArea}> */}
        {/* <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        > */}
          <View style={styles.loremIpsumStackColumnRow}>
            <View style={styles.loremIpsumStackColumn}>
              {/* <View style={styles.loremIpsumStack}> */}
                {/* <Text style={styles.loremIpsum}></Text> */}
                <Text style={styles.johnDue}>John Due</Text>
              {/* </View> */}
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

          <View style={styles.loremIpsumStackColumnRow}>
            <View style={styles.loremIpsumStackColumn}>
              {/* <View style={styles.loremIpsumStack}> */}
                {/* <Text style={styles.loremIpsum}></Text> */}
                <Text style={styles.johnDue}>John Due</Text>
              {/* </View> */}
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

          <View style={styles.loremIpsumStackColumnRow}>
            <View style={styles.loremIpsumStackColumn}>
              {/* <View style={styles.loremIpsumStack}> */}
                {/* <Text style={styles.loremIpsum}></Text> */}
                <Text style={styles.johnDue}>John Due</Text>
              {/* </View> */}
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

          <View style={styles.loremIpsumStackColumnRow}>
            <View style={styles.loremIpsumStackColumn}>
              {/* <View style={styles.loremIpsumStack}> */}
                {/* <Text style={styles.loremIpsum}></Text> */}
                <Text style={styles.johnDue}>John Due</Text>
              {/* </View> */}
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

          <View style={styles.loremIpsumStackColumnRow}>
            <View style={styles.loremIpsumStackColumn}>
              {/* <View style={styles.loremIpsumStack}> */}
                {/* <Text style={styles.loremIpsum}></Text> */}
                <Text style={styles.johnDue}>John Due</Text>
              {/* </View> */}
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

          <View style={styles.loremIpsumStackColumnRow}>
            <View style={styles.loremIpsumStackColumn}>
              {/* <View style={styles.loremIpsumStack}> */}
                {/* <Text style={styles.loremIpsum}></Text> */}
                <Text style={styles.johnDue}>John Due</Text>
              {/* </View> */}
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

          <View style={styles.loremIpsumStackColumnRow}>
            <View style={styles.loremIpsumStackColumn}>
              {/* <View style={styles.loremIpsumStack}> */}
                {/* <Text style={styles.loremIpsum}></Text> */}
                <Text style={styles.johnDue}>John Due</Text>
              {/* </View> */}
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

          <View style={styles.loremIpsumStackColumnRow}>
            <View style={styles.loremIpsumStackColumn}>
              {/* <View style={styles.loremIpsumStack}> */}
                {/* <Text style={styles.loremIpsum}></Text> */}
                <Text style={styles.johnDue}>John Due</Text>
              {/* </View> */}
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

          <View style={styles.loremIpsumStackColumnRow}>
            <View style={styles.loremIpsumStackColumn}>
              {/* <View style={styles.loremIpsumStack}> */}
                {/* <Text style={styles.loremIpsum}></Text> */}
                <Text style={styles.johnDue}>John Due</Text>
              {/* </View> */}
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
        {/* </ScrollView> */}
      {/* </View> */}

      {/* <View style={styles.scrollArea1Stack}>
        <View style={styles.scrollArea1}>
            <View style={styles.rect2Row}>
              <View style={styles.rect2}></View>
              <View style={styles.ellipseStack}>
                <Svg viewBox="0 0 35.1 37.55" style={styles.ellipse}>
                  <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="rgba(65,117,5,1)"
                    cx={18}
                    cy={19}
                    rx={18}
                    ry={19}
                  ></Ellipse>
                </Svg>
                <EntypoIcon name="check" style={styles.icon2}></EntypoIcon>
              </View>
              <Text style={styles.paymentDUe1}>
                Payment Successfull on 25 02 2012
              </Text>
            </View>
        </View>
        <Text style={styles.johnDue1}>John Due</Text>
      </View> */}

    </ScrollView>

      )


}

export default ClientPaymentDetailsTab



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
    flexDirection:'column'
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
  loremIpsumStackColumn: {
    width: 175,
    marginBottom: 8
  },
  rect: {
    width: 7,
    height: 50,
    backgroundColor: "white",
    marginLeft: 17,
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
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
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
  icon2: {
    top: 0,
    left: 4,
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
