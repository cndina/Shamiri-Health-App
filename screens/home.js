import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Platform
} from "react-native";
import { 
  TouchableOpacity
} from 'react-native-gesture-handler';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

const metricList = [
  {
    ellipse: "light_orange",
    title: "Mental Health",
  },
  {
    ellipse: "orange",
    title: "Satisfaction",
  },
  {
    ellipse: "light_green",
    title: "Family/Social Support",
  },
  {
    ellipse: "green",
    title: "Work",
  },
  {
    ellipse: "dark_green",
    title: "Sense of Purpose",
  },
];

const Home = ({ navigation }) => {
  const [isMore, setIsMore] = useState(false);
  const [dailyMetrics, setDailyMetrics] = useState(metricList);
  
  const showMoreLess = () => {
    setIsMore(!isMore);
  };

  return !isMore ? (
    <View style={styles.container}>
      <View style={styles.bannerContain}>
        <Text style={styles.headerText}>For You</Text>
        <Text style={styles.subHeaderText}>Jan 18 2022 Friday</Text>
        <Image
          style={[
            styles.banner,
            {
              transform: [{ scale: 1.5 }],
            },
          ]}
          resizeMode="contain"
          source={require("../assets/weekly_view.png")}
        />
        <View style={styles.lowerBar}>
          <TouchableOpacity onPress={() => showMoreLess()}>
            <View style={styles.button}>
              <Image
                style={styles.icon}
                resizeMode="contain"
                source={require("../assets/down.png")}
              />
              <Text style={styles.paragraphText}>Show More</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.extraSection}></View>
      </View>
      <View style={styles.lowerSection}>
        <View style={[styles.summaryContainerTop, styles.shadowProp]}>
          <Text style={styles.summaryTitle}>Today</Text>
          <View style={styles.summaryContent}>
            <Image
              style={styles.summaryCircleIcon}
              resizeMode="contain"
              source={require("../assets/Ring_two.png")}
            />
            <View style={styles.summarySideInfo}>
              {!!dailyMetrics &&
                dailyMetrics.map((metric, idx) => (
                  <View key={idx} style={styles.summarySideInfoRow}>
                    <Image
                      style={styles.summaryEllipseIcon}
                      resizeMode="contain"
                      source={
                        metric.ellipse === "light_orange"
                          ? require("../assets/Ellipse_light_orange.png")
                          : metric.ellipse === "orange"
                          ? require("../assets/Ellipse_orange.png")
                          : metric.ellipse === "light_green"
                          ? require("../assets/Ellipse_light_green.png")
                          : metric.ellipse === "green"
                          ? require("../assets/Ellipse_green.png")
                          : require("../assets/Ellipse_dark_green.png")
                      }
                    />
                    <Text style={styles.summarySideInfoRowText}>
                      {metric.title}
                    </Text>
                  </View>
                ))}
              <View style={styles.summaryLowerBar}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Daily")}
                >
                <View style={styles.button}
                >
                  <Image
                    style={styles.icon}
                    resizeMode="contain"
                    source={require("../assets/side-arrow.png")}
                  />
                  <Text style={styles.summarySideInfoRowMoreText}>More</Text>
                    </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.summaryContainer, styles.shadowProp]}>
          <Text style={styles.wellnessTitle}>Your wellness plan</Text>
          <View style={styles.wellnessContentSection}>
            <Image
              style={[
                styles.wellnessNote,
                {
                  transform: [{ scale: 2 }],
                },
              ]}
              resizeMode="contain"
              source={require("../assets/wellness_note_card.png")}
            />
            <Image
              style={[
                styles.wellnessNote,
                {
                  transform: [{ scale: 2 }],
                },
              ]}
              resizeMode="contain"
              source={require("../assets/wellness_note_card.png")}
            />
          </View>
          <View style={styles.wellnessLowerBar}>
            <TouchableOpacity>
              <View style={styles.button}>
                <Image
                  style={styles.icon}
                  resizeMode="contain"
                  source={require("../assets/side-arrow.png")}
                />
                <Text style={styles.summarySideInfoRowMoreText}>More</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.expandedBannerContain}>
        <Text style={styles.headerText}>For You</Text>
        <Text style={styles.subHeaderText}>Jan 18 2022 Friday</Text>
        <Image
          style={[
            styles.expandedBanner,
            {
              transform: [{ scale: Platform.OS === 'ios'? 1.4:1.3 }],
            },
          ]}
          resizeMode="contain"
          source={require("../assets/monthly_view_large.png")}
        />
        <View style={styles.lowerBar}>
          <TouchableOpacity onPress={() => showMoreLess()}>
            <View style={styles.button}>
              <Image
                style={styles.icon}
                resizeMode="contain"
                source={require("../assets/up.png")}
              />
              <Text style={styles.paragraphText}>Show Less</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.extraSection}></View>
      </View>
      <View style={styles.expandedLowerSection}></View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    width: screenWidth,
    height: screenHeight,
  },
  bannerContain: {
    flexDirection: "column",
    backgroundColor: "hsla(165, 30%, 63%, 1)",
    alignItems: "flex-start",
    width: "100%",
    height: 0.4 * screenHeight,
    borderBottomLeftRadius: 0.083 * screenWidth,
    zIndex: -3,
    elevation: -3,
    paddingTop: Platform.OS === "ios" ? 0 : 30,
    // paddingLeft: 0.083 * screenWidth,
    position: "absolute",
  },
  lowerSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 5,
    elevation: 5,
    position: "absolute",
    backgroundColor: "#fcfcfc",
    borderTopRightRadius: 30,
    width: "100%",
    // minHeight: 0.6 * screenHeight,
    overflow: "visible",
    top: 0.4 * screenHeight,
    paddingBottom: 40,
  },
  expandedBannerContain: {
    flexDirection: "column",
    backgroundColor: "hsla(165, 30%, 63%, 1)",
    alignItems: "flex-start",
    width: "100%",
    height: Platform.OS === "ios" ? 0.7 * screenHeight : 0.68 * screenHeight,
    borderBottomLeftRadius: 0.083 * screenWidth,
    zIndex: -3,
    elevation: -3,
    paddingLeft: Platform.OS === "ios" ? 0.01 * screenWidth : 0 * screenWidth,
    paddingTop:
      Platform.OS === "ios" ? 0 * screenHeight : 0.01875 * screenHeight,
    // paddingLeft: 0.083 * screenWidth,
    position: "absolute",
  },
  expandedLowerSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 5,
    elevation: 5,
    position: "absolute",
    backgroundColor: "#fcfcfc",
    borderTopRightRadius: 30,
    width: "100%",
    height: 0.4 * screenHeight,
    overflow: "visible",
    top: Platform.OS === "ios" ? 0.7 * screenHeight : 0.68 * screenHeight,
  },
  expandedBanner: {
    height: 0.42 * screenHeight,
    width: 0.82 * screenWidth,
    marginLeft: Platform.OS === "ios" ? 0.07 * screenWidth : 0.1 * screenWidth,
    marginBottom:
      Platform.OS === "ios" ? 0.04 * screenHeight : 0.03 * screenHeight,
    marginTop:
      Platform.OS === "ios" ? 0.03 * screenHeight : 0.0175 * screenHeight,
  },
  wellnessSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "24px 16px",
    /* Palette/White */
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
  },
  shadowProp: {
    shadowColor: "rgb(208, 200, 200)",
    shadowOffset: { width: 3, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 34,
  },
  banner: {
    height: Platform.OS === "ios" ? 0.19 * screenHeight : 0.17 * screenHeight,
    width: 0.82 * screenWidth,
    marginBottom:
      Platform.OS === "ios" ? 0 * screenHeight : 0.01 * screenHeight,
    marginLeft: Platform.OS === "ios" ? 0.07 * screenWidth : 0.09 * screenWidth,
  },
  icon: {
    width: 11,
    height: 7,
    marginLeft: 20,
  },
  lowerBar: {
    flexDirection: "row-reverse",
    alignItems: "center",
    width: "95%",
    marginTop: 10,
    marginBottom: 7,
  },
  button: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  headerText: {
    width: 107,
    marginTop: Platform.OS === "ios" ? 40 : 50,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: Platform.OS === "ios" ? 30 : 35,
    lineHeight: 37,
    /* identical to box height, or 37 */
    letterSpacing: -1,
    flexGrow: 0,
    color: "#FFFFFF",
    marginLeft: 41,
  },
  subHeaderText: {
    /* Paragraph/P1 */
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: Platform.OS === "ios" ? 15 : 20,
    lineHeight: Platform.OS === "ios" ? 20 : 25,
    /* identical to box height, or 162% */
    letterSpacing: -0.5,
    color: "#FFFFFF",
    flexGrow: 0,
    marginBottom: 14,
    marginLeft: 41,
  },
  paragraphText: {
    fontWeight: "600",
    fontSize: Platform.OS === "ios" ? 12 : 14,
    lineHeight: 22,
    color: "white",
  },
  extraSection: {
    backgroundColor: "hsla(165, 30%, 63%, 1)",
    position: "absolute",
    width: 30,
    height: 30,
    padding: 30,
    right: 0,
    bottom: -45,
    zIndex: -2,
    elevation: -1,
  },
  summaryContainerTop: {
    backgroundColor: "#FFFFFF",
    width: 350,
    height: Platform.OS === "ios" ? 192 : 212,
    paddingBottom: 20,
    paddingTop: 10,
    borderRadius: 12,
    marginBottom: 10,
    marginTop: 20,
  },
  summaryContainer: {
    backgroundColor: "#FFFFFF",
    width: 350,
    height: Platform.OS === "ios" ? 180 : 192,
    paddingTop: 5,
    borderRadius: 12,
    marginBottom: 5,
    marginTop: 5,
  },
  summaryTitle: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 26,
    marginLeft: 23,
    textTransform: "uppercase",
    /* or 217% */
    color: "#C4C4C4",
  },
  summaryContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  summaryCircleIcon: {
    width: 141,
    height: 141,
    marginLeft: 23,
  },
  summaryEllipseIcon: {
    width: 4.7,
    height: 4.52,
  },
  summarySideInfo: {
    flex: 3,
    width: "90%",
    height: "70%",
    marginLeft: 20,
  },
  summarySideInfoRow: {
    width: "100%",
    height: 19.43,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  summarySideInfoRowText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    fontStyle: "normal",
    fontWeight: "normal",
    marginLeft: 7,
    fontSize: 11,
    lineHeight: 20,
    color: "#979797",
    // backgroundColor: "pink",
  },
  summarySideInfoRowMoreText: {
    fontWeight: "600",
    fontSize: 11,
    lineHeight: 20,
    display: "flex",
    alignItems: "center",
    color: "#C4C4C4",
  },
  summaryLowerBar: {
    marginTop: 15,
    flexDirection: "row-reverse",
    alignItems: "center",
    width: "90%",
  },
  wellnessLowerBar: {
    flexDirection: "row-reverse",
    alignItems: "center",
    width: "95%",
  },
  wellnessTitle: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 26,
    marginLeft: 23,
    /* or 217% */
    color: "#C4C4C4",
  },
  wellnessContentSection: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
    marginLeft: 23,
  },
  wellnessNote: {
    width: 84,
    height: 115,
    marginRight: 20,
  },
});
