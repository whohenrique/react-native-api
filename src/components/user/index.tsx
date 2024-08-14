import { User } from "@/types/user";
import { View, Text, StyleSheet } from "react-native";

interface UserItemProps {
  user: User;
}

export function UserItem({ user }: UserItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>{user.username}</Text>
      <Text style={styles.username}>{user.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 10,
  },

  username: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
  },
});
