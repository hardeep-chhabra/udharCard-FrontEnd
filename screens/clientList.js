import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function ClientList() {
  return (
    <View style={styles.ClientList}>
      <Image
        style={styles.Search}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-55%3A464?alt=media&token=10a86840-d95c-4f48-8b36-2086d8ee45fd",
        }}
      />
      <Image
        style={styles.Notification}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-56%3A472?alt=media&token=901ff0f3-a9fd-4f3d-ba30-0493b1ea32bd",
        }}
      />
      <Image
        style={styles.Group}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-56%3A473?alt=media&token=634762dc-18c6-46a9-a2c0-b74ba0dcdf63",
        }}
      />
      <View style={styles.Group482}>
        <View style={styles.Line10} />
        <View style={styles.Group9104}>
          <View style={styles.Group091}>
            <Text style={styles.Txt081}>John Due</Text>
            <Text style={styles.Txt766}>info@gmail.com</Text>
            <View style={styles.Line3} />
            <View style={styles.Group851}>
              <Text style={styles.Txt2109}>Expense : 500</Text>
              <Image
                style={styles.Graph}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-56%3A508?alt=media&token=637fa258-99ac-42ab-aed8-071f86f14063",
                }}
              />
            </View>
          </View>
          <View style={styles.Group909}>
            <View style={styles.Group14}>
              <Text style={styles.Txt081}>John Due</Text>
              <Text style={styles.Txt1084}>info@gmail.com</Text>
              <View style={styles.Group851}>
                <Text style={styles.Txt2109}>Expense : 500</Text>
                <Image
                  style={styles.Graph}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-56%3A513?alt=media&token=55e1952a-d007-4708-a91f-6b77bb0da9d7",
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.Group9104}>
          <View style={styles.Group414}>
            <View style={styles.Group14}>
              <Text style={styles.Txt081}>John Due</Text>
              <Text style={styles.Txt1084}>info@gmail.com</Text>
              <View style={styles.Group851}>
                <Text style={styles.Txt2109}>Expense : 500</Text>
                <Image
                  style={styles.Graph}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-56%3A526?alt=media&token=ca035430-eac8-4aed-ad1d-054e18596594",
                  }}
                />
              </View>
            </View>
          </View>
          <View style={styles.Group790}>
            <View style={styles.Group14}>
              <Text style={styles.Txt081}>John Due</Text>
              <Text style={styles.Txt1084}>info@gmail.com</Text>
              <View style={styles.Group851}>
                <Text style={styles.Txt2109}>Expense : 500</Text>
                <Image
                  style={styles.Graph}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-56%3A532?alt=media&token=7d943e73-e675-4051-bc4d-3b89bfacd824",
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.Group851}>
          <View style={styles.Group921}>
            <View style={styles.Group14}>
              <Text style={styles.Txt081}>John Due</Text>
              <Text style={styles.Txt1084}>info@gmail.com</Text>
              <View style={styles.Group851}>
                <Text style={styles.Txt2109}>Expense : 500</Text>
                <Image
                  style={styles.Graph}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-56%3A538?alt=media&token=2ba4d16e-08e4-424b-9160-dd66b41b5354",
                  }}
                />
              </View>
            </View>
          </View>
          <View style={styles.Group884}>
            <View style={styles.Group14}>
              <Text style={styles.Txt081}>John Due</Text>
              <Text style={styles.Txt1084}>info@gmail.com</Text>
              <View style={styles.Group851}>
                <Text style={styles.Txt2109}>Expense : 500</Text>
                <Image
                  style={styles.Graph}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-56%3A544?alt=media&token=a4641e1d-c260-4746-9e25-fb7c2314f5fb",
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.Group105}>
        <Text style={styles.Txt966}>Supplier List</Text>
      </View>
      <View style={styles.Group548}>
        <Text style={styles.Txt159}>Client list</Text>
      </View>
      <View style={styles.Group599}>
        <View style={styles.Group13}></View>
        <View style={styles.Group856}>
          <Text style={styles.Txt159}>Buyer List</Text>
          <View style={styles.Ellipse8} />
          <Text style={styles.Txt159}>Payment details</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ClientList: {
    display: "flex",
    flex:1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    backgroundColor: "black",
    /*  linear-gradient(90.15deg, rgba(27,23,34,0.9) 1%, rgba(37,29,49,0.9) 100%, ) , linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)) */
    width: 375,
    height: 667,
  },
  Search: {
    position: "absolute",
    top: 26,
    left: 301,
    width: 20,
    height: 20,
  },
  Notification: {
    position: "absolute",
    top: 26,
    left: 335,
    width: 20,
    height: 20,
  },
  Group: {
    position: "absolute",
    top: 133,
    left: 203,
    width: 321.86,
    height: 287.76,
  },
  Group482: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: 164,
    none: "0px",
    paddingTop: 24,
    paddingBottom: 32,
    paddingLeft: 19,
    paddingRight: 19,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: "black",
    /*  linear-gradient(180deg, rgba(54,49,63,1) 0%, rgba(55,49,64,1) 100%, )  */
    shadowColor: "rgba(0,97,255,1)",
    elevation: 1,
    shadowOffset: { width: 0, height: 2 },
    width: 375,
    height: 503,
  },
  Line10: {
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "rgba(255,",
    width: 37,
    height: 5,
    marginBottom: 23,
  },
  Group9104: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 16,
  },
  Group091: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 11,
    borderRadius: 10,
    backgroundColor: "rgba(220,200,172,1)",
  },
  Txt081: {
    fontSize: 14,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(55,49,64,1)",
    width: 80,
    height: 20,
    marginBottom: 14,
  },
  Txt766: {
    fontSize: 10,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(55,49,64,1)",
    width: 88,
    height: 17,
    marginBottom: 14,
  },
  Line3: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(55,49,64,1)",
    width: 140,
    height: 1,
    marginBottom: 13,
  },
  Group851: {
    display: "flex",
    flexDirection: "row",
  },
  Txt2109: {
    fontSize: 10,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(55,49,64,1)",
    marginRight: 51,
  },
  Graph: {
    width: 18,
    height: 18,
  },

  Group909: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    backgroundColor: "rgba(97,219,180,1)",
    width: 162,
    height: 130,
  },
  Group14: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 1,
    paddingRight: 0,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(55,49,64,1)",
  },
  Txt081: {
    fontSize: 14,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(55,49,64,1)",
    width: 80,
    height: 20,
    marginBottom: 14,
  },
  Txt1084: {
    fontSize: 10,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(55,49,64,1)",
    width: 88,
    height: 17,
    marginBottom: 27,
  },
  Group851: {
    display: "flex",
    flexDirection: "row",
  },
  Txt2109: {
    fontSize: 10,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(55,49,64,1)",
    marginRight: 51,
  },
  Graph: {
    width: 18,
    height: 18,
  },

  Group9104: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 16,
  },
  Group414: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 11,
    paddingRight: 9,
    marginRight: 11,
    borderRadius: 10,
    backgroundColor: "rgba(255,200,87,1)",
    width: 162,
    height: 130,
  },
  Group14: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 1,
    paddingRight: 0,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(55,49,64,1)",
  },
  Txt081: {
    fontSize: 14,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(55,49,64,1)",
    width: 80,
    height: 20,
    marginBottom: 14,
  },
  Txt1084: {
    fontSize: 10,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(55,49,64,1)",
    width: 88,
    height: 17,
    marginBottom: 27,
  },
  Group851: {
    display: "flex",
    flexDirection: "row",
  },
  Txt2109: {
    fontSize: 10,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(55,49,64,1)",
    marginRight: 51,
  },
  Graph: {
    width: 18,
    height: 18,
  },

  Group790: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 13,
    paddingRight: 7,
    borderRadius: 10,
    backgroundColor: "rgba(255,176,178,1)",
    width: 162,
    height: 130,
  },
  Group14: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 1,
    paddingRight: 0,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(55,49,64,1)",
  },
  Txt081: {
    fontSize: 14,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(55,49,64,1)",
    width: 80,
    height: 20,
    marginBottom: 14,
  },
  Txt1084: {
    fontSize: 10,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(55,49,64,1)",
    width: 88,
    height: 17,
    marginBottom: 27,
  },
  Group851: {
    display: "flex",
    flexDirection: "row",
  },
  Txt2109: {
    fontSize: 10,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(55,49,64,1)",
    marginRight: 51,
  },
  Graph: {
    width: 18,
    height: 18,
  },

  Group851: {
    display: "flex",
    flexDirection: "row",
  },
  Group921: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 11,
    paddingRight: 9,
    marginRight: 11,
    borderRadius: 10,
    backgroundColor: "rgba(78,184,217,1)",
    width: 162,
    height: 130,
  },
  Group14: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 1,
    paddingRight: 0,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(55,49,64,1)",
  },
  Txt081: {
    fontSize: 14,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(55,49,64,1)",
    width: 80,
    height: 20,
    marginBottom: 14,
  },
  Txt1084: {
    fontSize: 10,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(55,49,64,1)",
    width: 88,
    height: 17,
    marginBottom: 27,
  },
  Group851: {
    display: "flex",
    flexDirection: "row",
  },
  Txt2109: {
    fontSize: 10,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(55,49,64,1)",
    marginRight: 51,
  },
  Graph: {
    width: 18,
    height: 18,
  },

  Group884: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    backgroundColor: "rgba(202,229,210,1)",
    width: 162,
    height: 130,
  },
  Group14: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 1,
    paddingRight: 0,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(55,49,64,1)",
  },
  Txt081: {
    fontSize: 14,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(55,49,64,1)",
    width: 80,
    height: 20,
    marginBottom: 14,
  },
  Txt1084: {
    fontSize: 10,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(55,49,64,1)",
    width: 88,
    height: 17,
    marginBottom: 27,
  },
  Group851: {
    display: "flex",
    flexDirection: "row",
  },
  Txt2109: {
    fontSize: 10,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(55,49,64,1)",
    marginRight: 51,
  },
  Graph: {
    width: 18,
    height: 18,
  },

  Group105: {
    position: "absolute",
    top: 64,
    none: "0px",
    paddingTop: 7,
    paddingBottom: 6,
    paddingLeft: 218,
    paddingRight: 41,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 335,
    height: 34,
  },
  Txt966: {
    fontSize: 12,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Group548: {
    position: "absolute",
    top: 64,
    none: "0px",
    paddingTop: 7,
    paddingBottom: 6,
    paddingLeft: 63,
    paddingRight: 62,
    borderRadius: 50,
    backgroundColor: "rgba(0,97,255,1)",
    width: 184,
    height: 34,
  },
  Txt159: {
    fontSize: 12,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Group599: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 29,
    none: "0px",
    width: 174,
    height: 110,
  },
  Group13: {
    marginBottom: 79,
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "rgba(255,",
    borderTop: "3px solid rgba(255, 255, 255, 1)",
    width: 25,
    height: 8,
  },

  Group856: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  Txt159: {
    fontSize: 12,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },
  Ellipse8: {
    backgroundColor: "rgba(0,97,255,1)",
    width: 3,
    height: 3,
    borderRadius: 1.5,
    marginRight: 27,
  },
  Txt159: {
    fontSize: 12,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },
})
