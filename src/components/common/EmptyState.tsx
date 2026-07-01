import { Text, View } from "react-native";

export default function EmptyState() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 50,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "700",
        }}
      >
        Nothing Found
      </Text>

      <Text
        style={{
          color: "#666",
          marginTop: 10,
          textAlign: "center",
        }}
      >
        There is no data available.
      </Text>
    </View>
  );
}