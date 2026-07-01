import { Image, StyleSheet, View } from "react-native";

type AvatarProps = {
  size?: number;
  uri?: string;
};

export default function Avatar({
  size = 50,
  uri,
}: AvatarProps) {
  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}
    >
      <Image
        source={{
          uri:
            uri ??
            "https://i.pravatar.cc/150",
        }}
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
});