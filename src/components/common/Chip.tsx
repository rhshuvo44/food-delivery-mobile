import { Pressable, Text } from "react-native";

type Props = {
  title: string;
  active?: boolean;
  onPress?: () => void;
};

export default function Chip({
  title,
  active,
  onPress,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: active
          ? "#FF2B85"
          : "#F4F4F4",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 50,
      }}
    >
      <Text
        style={{
          color: active ? "#fff" : "#222",
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}