import { ActivityIndicator, View } from "react-native";

export default function Loader() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <ActivityIndicator
        size="large"
        color="#FF2B85"
      />
    </View>
  );
}