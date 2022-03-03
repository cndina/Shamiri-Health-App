import { StyleSheet, Image, Text, View } from "react-native";
import React, { useState } from "react";
import CustomSwitch from "../components/customSwitch";

const todayMetricList = [
  {
    color: "#F6E9E7",
    name: "Mental Health",
    rating: 8,
  },
  {
    color: "#E3A89F",
    name: "Satisfaction",
    rating: 2.5,
  },
  {
    color: "#BCD9D1",
    name: "Family/Social Support",
    rating: 4.5,
  },
  {
    color: "#85BDAF",
    name: "Work",
    rating: 6,
  },
  {
    color: "#143029",
    name: "Mental Health",
    rating: 4,
  },
];

const Daily = ({ navigation }) => {
  const [toggleView, setToggleView] = useState(1);
  const [todayMetrics, setTodayMetrics] = useState(todayMetricList);

  const onSelectSwitch = (index) => {
    setToggleView(index);
    navigation.setOptions({
      title: index === 1 ? "Wed Jan 12, 2022" : " Jan 12 - Jan 19, 2022",
    });
  };

  return (
    <View style={styles.container}>
      <CustomSwitch
        selectionMode={1}
        roundCorner={true}
        option1={"Daily"}
        option2={"Weekly"}
        onSelectSwitch={onSelectSwitch}
        selectionColor={"white"}
      />
      {toggleView === 1 ? (
        <View styles={styles.dailyContainer}>
          <Image
            style={styles.summaryCircleIcon}
            resizeMode="contain"
            source={require("../assets/Ring.svg")}
          />
          <View style={styles.ratings}>
            {todayMetrics &&
              todayMetrics.map((today, idx) => (
                <View key={idx} style={styles.ratingContainer}>
                  <View style={styles.top}>
                    <Text style={styles.text}>
                      {today.name ? today.name : ""}
                    </Text>
                    <Text style={styles.text}>{today.rating + "/10"}</Text>
                  </View>
                  <View
                    style={{
                      width: Number(today.rating) * (308 / 10),
                      borderRadius: 100,
                      height: 11,
                      backgroundColor: today.color,
                    }}
                  ></View>
                </View>
              ))}
          </View>
        </View>
      ) : (
        <View style={styles.weeklyContainer}>
          <View style={styles.weeklyContainerUpper}>
            <Text style={styles.weeklyTitle}>Mental Health</Text>
            <View style={styles.weeklyRow}>
              <View style={styles.weeklyStat}>
                <Text style={styles.weeklyStatText}>Weekly Average</Text>
                <Text style={styles.weeklyStatHighlight}>6</Text>
              </View>
              <View style={styles.weeklyStat}>
                <Text style={styles.weeklyStatText}>Week-over-week</Text>
                <View style={styles.weeklyPercentage}>
                  <Image
                    style={styles.icon}
                    resizeMode="contain"
                    source={require("../assets/down_pointed_arrow.svg")}
                  />
                  <Text style={styles.weeklyStatHighlight}>20%</Text>
                </View>
              </View>
              <View style={styles.weeklyStat}>
                <Text style={styles.weeklyStatText}>Goal</Text>
                <Text style={styles.weeklyStatHighlight}>8</Text>
              </View>
            </View>

            <Image
              style={styles.barGraph}
              resizeMode="contain"
              source={require("../assets/bar_graph.svg")}
            />
          </View>
          <View style={styles.weeklyDivider}></View>
          <View style={styles.weeklyContainerUpper}>
            <Text style={styles.weeklyLowerTitle}>Recommendation</Text>
            <Image
              style={styles.recommendationCard}
              resizeMode="contain"
              source={require("../assets/recommendation_note_card.svg")}
            />
            <View style={styles.recommendationCardTextContainer}>
              <Text style={styles.recommendationCardTextFade}>
                1-on-1 Session
              </Text>
              <Text style={styles.recommendationCardText}>
                Talk to our therapists about employee burnout?
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Daily;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#fcfcfc",
  },
  dailyContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  weeklyContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  weeklyContainerUpper: {
    display: "flex",
    flexDirection: "column",
    width: 308,
  },
  summaryCircleIcon: {
    width: 234,
    height: 234,
    marginLeft: 34,
  },
  ratings: {
    width: 308,
    height: 297,
    paddingTop: 24,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 12,
    marginBottom: 20,
    marginTop: 19,
    boxShadow: "0px 4px 34px rgba(208, 200, 200, 0.2)",
    backgroundColor: "white",
  },
  ratingContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "",
    marginBottom: 16,
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    lineHeight: 21,
    marginBottom: 6,
  },
  text: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 21,
    display: "flex",
    alignItems: "center",
    color: "#979797",
  },
  ratingBar: {
    height: 12,
  },
  icon: {
    height: 20,
    width: 12,
  },
  barGraph: {
    width: 308,
    height: 153.13,
    marginTop: 18,
  },
  weeklyTitle: {
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 21,
    display: "flex",
    alignItems: "center",
    color: "#000000",
  },
  weeklyLowerTitle: {
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 23,
    display: "flex",
    alignItems: "center",
    marginBottom: 13,
    marginLeft: 7,
    color: "#000000",
  },
  weeklyRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  weeklyStat: {
    display: "flex",
    flexDirection: "columns",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
  },
  weeklyStatText: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 10,
    lineHeight: 12,
    color: "#979797",
  },
  weeklyStatHighlight: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 24,
    lineHeight: 14,
    display: "flex",
    alignItems: "center",
    color: "#E3A89F",
  },
  weeklyPercentage: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "120%",
  },
  weeklyDivider: {
    border: "1px solid #C4C4C4",
    height: 1,
    width: "100%",
    overflow: "hidden",
    marginTop: 16,
    marginBottom: 19,
  },
  recommendationCardContainer: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  recommendationCard: {
    width: 309,
    height: 147,
    transform: "scale(1)",
  },
  recommendationCardTextContainer: {
    backgroundColor: "white",
    width: 309,
    marginTop: 0,
    height: 55,
    marginBottom: 15,
    boxShadow: "0px 4px 34px rgba(208, 200, 200, 0.2)",
  },
  recommendationCardTextFade: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 10,
    lineHeight: 14,
    marginLeft: 16,
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    color: "#C4C4C4",
  },
  recommendationCardText: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 10,
    lineHeight: 14,
    marginLeft: 16,
    marginBottom: 13,
    display: "flex",
    alignItems: "center",
    color: "#000000",
  },
});
