import { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { UserItem } from "@/components/user";
import { User } from "@/types/user";
import { api } from "@/services/api";

export default function TabOneScreen() {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get<User[]>("/users/");
      setData(response.data);
      return response;
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <UserItem user={item} />}
        keyExtractor={(item) => item.id.toString()}
        style={{ width: "90%" }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: "80%",
  },
});
