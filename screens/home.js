import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

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
          <TouchableOpacity
            onPress={() => showMoreLess()}
            style={styles.button}
          >
            <Image
              style={styles.icon}
              resizeMode="contain"
              source={require("../assets/down.png")}
            />
          </TouchableOpacity>
          <Text style={styles.paragraphText}>Show More</Text>
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
                  style={styles.button}
                >
                  <Image
                    style={styles.icon}
                    resizeMode="contain"
                    source={require("../assets/side-arrow.png")}
                  />
                </TouchableOpacity>
                <Text style={styles.summarySideInfoRowMoreText}>More</Text>
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
            <TouchableOpacity style={styles.button}>
              <Image
                style={styles.icon}
                resizeMode="contain"
                source={require("../assets/side-arrow.png")}
              />
            </TouchableOpacity>
            <Text style={styles.summarySideInfoRowMoreText}>More</Text>
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
              transform: [{ scale: 1.3 }],
            },
          ]}
          resizeMode="contain"
          source={require("../assets/monthly_view_large.png")}
        />
        <View style={styles.lowerBar}>
          <TouchableOpacity
            onPress={() => showMoreLess()}
            style={styles.button}
          >
            <Image
              style={styles.icon}
              resizeMode="contain"
              source={require("../assets/up.png")}
            />
          </TouchableOpacity>
          <Text style={styles.paragraphText}>Show Less</Text>
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
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: "100%",
    height: 'auto'
  },
  bannerContain: {
    flexDirection: "column",
    backgroundColor: "hsla(165, 30%, 63%, 1)",
    alignItems: "flex-start",
    width: "100%",
    height: 280,
    borderBottomLeftRadius: 30,
    zIndex: -3,
    elevation: -3,
    paddingLeft: 30,
    position: "absolute",
  },
  lowerSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 5,
    elevation: 5,
    position: "absolute",
    backgroundColor: "#ffffff",
    borderTopRightRadius: 30,
    width: "100%",
    minHeight: 0.8*screenHeight,
    overflow: "visible",
    top: 280,
    paddingBottom: 40
  },
  expandedBannerContain: {
    flexDirection: "column",
    backgroundColor: "hsla(165, 30%, 63%, 1)",
    alignItems: "flex-start",
    width: "100%",
    height: 509,
    borderBottomLeftRadius: 30,
    zIndex: -3,
    elevation: -3,
    paddingLeft: 30,
    position: "absolute",
  },
  expandedLowerSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 5,
    elevation: 5,
    position: "absolute",
    backgroundColor: "#ffffff",
    borderTopRightRadius: 30,
    width: "100%",
    height: 0.3*screenHeight,
    overflow: "visible",
    top: 509,
  },
  expandedBanner: {
    height: 336,
    width: 297,
    marginLeft: 26,
    marginBottom: 15,
    marginTop: 14
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
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 34,
  },
  banner: {
    height: 137,
    width: 297,
    marginLeft: 26,
  },
  icon: {
    width: 11,
    height: 7,
    marginLeft: 20,
  },
  lowerBar: {
    flexDirection: "row-reverse",
    width: "95%",
    marginTop: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    width: 107,
    marginTop: 30,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 30,
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
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 20,
    /* identical to box height, or 162% */
    letterSpacing: -0.5,
    color: "#FFFFFF",
    flexGrow: 0,
    marginBottom: 14,
    marginLeft: 41,
  },
  paragraphText: {
    fontWeight: '600',
    fontSize: 12,
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
    height: 212,
    paddingBottom: 20,
    paddingTop: 10,
    borderRadius: 12,
    marginBottom: 10,
    marginTop: 20,
  },
  summaryContainer: {
    backgroundColor: "#FFFFFF",
    width: 350,
    height: 192,
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
    marginLeft: 23
  },
  summaryEllipseIcon: {
    width: 4.7,
    height: 4.52,
  },
  summarySideInfo: {
    flex: 3,
    width: "90%",
    height: "70%",
    marginLeft: 20
  },
  summarySideInfoRow: {
    width: "100%",
    height: 19.43,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  summarySideInfoRowText: {
    fontStyle: "normal",
    fontWeight: "normal",
    marginLeft: 7,
    fontSize: 10,
    lineHeight: 26,
    color: "#979797",
  },
  summarySideInfoRowMoreText: {
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 20,
    display: "flex",
    alignItems: "center",
    color: "#C4C4C4",
  },
  summaryLowerBar: {
    marginTop: 15,
    flexDirection: "row-reverse",
    width: "90%",
  },
  wellnessLowerBar: {
    flexDirection: "row-reverse",
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
