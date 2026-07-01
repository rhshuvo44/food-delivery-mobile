import {
  ScrollView,
  View,
} from "react-native";

import Avatar from "@/components/common/Avatar";
import Badge from "@/components/common/Badge";
import Chip from "@/components/common/Chip";
import Divider from "@/components/common/Divider";
import Loader from "@/components/common/Loader";
import EmptyState from "@/components/common/EmptyState";

export default function Home() {
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 20,
        gap: 20,
      }}
    >
      <Avatar />

      <Badge text="20% OFF" />

      <Chip
        title="Burger"
        active
      />

      <Divider />

      <Loader />

      <EmptyState />
    </ScrollView>
  );
}