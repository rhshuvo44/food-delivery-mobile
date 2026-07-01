import { Text, View } from "react-native";

type Props = {
  text: string;
};

export default function Badge({ text }: Props) {
  return (
    <View
      style={{
        backgroundColor: "#FF2B85",
        alignSelf: "flex-start",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontWeight: "600",
          fontSize: 12,
        }}
      >
        {text}
      </Text>
    </View>
  );
}