import React, { useEffect, useState } from "react"
import { StyleSheet, Image, Text, View, ImageBackground, FlatList, ScrollView, StatusBar } from "react-native"



export default function ClientList() {

  useEffect(() => {

    const clientListAPIFunc = async () => {
      let json = await fetch('https://jsonplaceholder.typicode.com/posts');
      let response = await json.json();
      setClientsData(response);
  }
  
    clientListAPIFunc();
        
    // return () => {
    //   console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbb')
    // }

  }, [setClientListText])


  const [supplierList, setSupplierList] = useState(styles.Group105);
  const [supplierListText, setSupplierListText] = useState(styles.Txt966);
  const [clientList, setClientList] = useState(styles.Group548);
  const [clientListText, setClientListText] = useState(styles.Txt159);

  const [clientsData, setClientsData] = useState([]);



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

      <View style={styles.Line10} />
      
      <ScrollView style={styles.Group482} contentContainerStyle={{alignItems:'center', paddingBottom:24}}>
      {/* <View style={styles.Group482}> */}

      {/* THIS IS THE REAL API LOOP, TO BE REPLACED BY THE FAKE TESTING API RUN ON THE USE-EFFECT HOOK */}
      {/* {clientsData.map((index,item) => {
        return (<View style={styles.Group9104}>
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
          <View style={styles.Group091}>
              <Text style={styles.Txt081}>John Due</Text>
              <Text style={styles.Txt766}>info@gmail.com</Text>
                <View style={styles.Line3} />
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
        </View>)
      })} */}


      {/* TO BE REMOVED AFTER ASSIGNING REAL RESTAPI */}
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
          <View style={styles.Group091}>
            {/* <View style={styles.Group14}> */}
              <Text style={styles.Txt081}>John Due</Text>
              <Text style={styles.Txt766}>info@gmail.com</Text>
                <View style={styles.Line3} />
              <View style={styles.Group851}>
                <Text style={styles.Txt2109}>Expense : 500</Text>
                <Image
                  style={styles.Graph}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-56%3A513?alt=media&token=55e1952a-d007-4708-a91f-6b77bb0da9d7",
                  }}
                />
              </View>
            {/* </View> */}
          </View>
        </View>
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
          <View style={styles.Group091}>
            {/* <View style={styles.Group14}> */}
              <Text style={styles.Txt081}>John Due</Text>
              <Text style={styles.Txt766}>info@gmail.com</Text>
                <View style={styles.Line3} />
              <View style={styles.Group851}>
                <Text style={styles.Txt2109}>Expense : 500</Text>
                <Image
                  style={styles.Graph}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-56%3A513?alt=media&token=55e1952a-d007-4708-a91f-6b77bb0da9d7",
                  }}
                />
              </View>
            {/* </View> */}
          </View>
        </View>
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
          <View style={styles.Group091}>
            {/* <View style={styles.Group14}> */}
              <Text style={styles.Txt081}>John Due</Text>
              <Text style={styles.Txt766}>info@gmail.com</Text>
                <View style={styles.Line3} />
              <View style={styles.Group851}>
                <Text style={styles.Txt2109}>Expense : 500</Text>
                <Image
                  style={styles.Graph}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-56%3A513?alt=media&token=55e1952a-d007-4708-a91f-6b77bb0da9d7",
                  }}
                />
              </View>
            {/* </View> */}
          </View>
        </View>
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
          <View style={styles.Group091}>
            {/* <View style={styles.Group14}> */}
              <Text style={styles.Txt081}>John Due</Text>
              <Text style={styles.Txt766}>info@gmail.com</Text>
                <View style={styles.Line3} />
              <View style={styles.Group851}>
                <Text style={styles.Txt2109}>Expense : 500</Text>
                <Image
                  style={styles.Graph}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-56%3A513?alt=media&token=55e1952a-d007-4708-a91f-6b77bb0da9d7",
                  }}
                />
              </View>
            {/* </View> */}
          </View>
        </View>
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
          <View style={styles.Group091}>
            {/* <View style={styles.Group14}> */}
              <Text style={styles.Txt081}>John Due</Text>
              <Text style={styles.Txt766}>info@gmail.com</Text>
                <View style={styles.Line3} />
              <View style={styles.Group851}>
                <Text style={styles.Txt2109}>Expense : 500</Text>
                <Image
                  style={styles.Graph}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8YKbQsmLBfONJUj4JItjeY-56%3A513?alt=media&token=55e1952a-d007-4708-a91f-6b77bb0da9d7",
                  }}
                />
              </View>
            {/* </View> */}
          </View>
        </View>
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
        </View>
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
        </View>
      {/* </View> */}
      </ScrollView>
      
      <View style={supplierList}>
        <Text onPress={() => {
          setSupplierList(styles.Group106);
          setSupplierListText(styles.Txt159);
          setClientList(styles.Group549);
          setClientListText(styles.Txt966);
          
        }} style={supplierListText}>Supplier List</Text>
      </View>
      <View style={clientList}>
        <Text onPress={() => {
          setSupplierList(styles.Group105);
          setSupplierListText(styles.Txt966);
          setClientList(styles.Group548);
          setClientListText(styles.Txt159);

          
        }} style={clientListText}>Client list</Text>
      </View>
      <View style={styles.Group599}>
        <View style={styles.Group13}></View>
        <View style={styles.Group856}>
          <Text style={styles.Txt160}>Buyer List</Text>
          {/* <View style={styles.Ellipse8} /> */}
          <Text style={styles.Txt161}>Payment details</Text>
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
    height: 20
  },

  Group: {
    position: "absolute",
    top: 133,
    left: 203,
    width: 321.86,
    height: 287.76,
  },
  
  Group482: {
    // flex:1,
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    position: "absolute",
    top: 164,
    none: "0px",
    paddingTop: 24,
    // paddingBottom: 32,
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
    // borderStyle: "solid",
    borderColor: "rgba(255,255,255,1)",
    width: 45,
    height: 5,
    marginBottom: 23,
    borderRadius:10,
    left:160,
    marginTop:150
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
    backgroundColor: "rgba(255,200,87,1)",
  },

  Group909: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 11,
    borderRadius: 10,
    backgroundColor: "rgba(97,219,180,1)",
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
    left:10
  },

  Group549: {
    position: "absolute",
    top: 64,
    none: "0px",
    paddingTop: 7,
    paddingBottom: 6,
    paddingLeft: 63,
    paddingRight: 62,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 184,
    height: 34,
    left:10
  },

  Group105: {
    position: "absolute",
    top: 64,
    none: "0px",
    paddingTop: 7,
    paddingBottom: 6,
    paddingLeft: 190,
    paddingRight: 41,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 335,
    height: 34,
    left:10
  },

  Group106: {
    position: "absolute",
    top: 64,
    none: "0px",
    paddingTop: 7,
    paddingBottom: 6,
    paddingLeft: 190,
    paddingRight: 41,
    borderRadius: 50,
    backgroundColor: "rgba(0,97,255,1)",
    width: 335,
    height: 34,
    left:10
  },

  Txt966: {
    fontSize: 12,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
  },
  
  Txt159: {
    fontSize: 12,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Txt160: {
    fontSize: 12,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    borderBottomWidth:3,
    borderBottomColor:'rgba(0,97,255,1)'
  },

  Txt161: {
    fontSize: 12,
    fontFamily: "undefined",
    fontWeight: "500",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    borderBottomWidth:3,
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
    borderColor: "rgba(255, 255, 255, 1)",
    borderTop: "3px solid rgba(255, 255, 255, 1)",
    width: 25,
    height: 8,
    left:10
  },

  Group856: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent:'space-between',
    left:20,
    flex:1
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
    width: 50,
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
