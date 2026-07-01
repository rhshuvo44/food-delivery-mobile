import SkeletonContent from "react-native-skeleton-content";

export default function Skeleton() {
  return (
    <SkeletonContent
      isLoading
      layout={[
        {
          width: 300,
          height: 180,
          marginBottom: 20,
        },
      ]}
    />
  );
}