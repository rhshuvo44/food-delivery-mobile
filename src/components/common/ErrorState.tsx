import { Text, View } from "react-native";

export default function ErrorState() {
  return (
    <View
      style={{
        padding: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "red",
          fontWeight: "700",
          fontSize: 20,
        }}
      >
        Something went wrong
      </Text>
    </View>
  );
}