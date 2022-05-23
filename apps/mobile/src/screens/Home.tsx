import { SafeAreaView, FlatList, Text } from "react-native";
import { trpc } from "../utils/trpc";
import { PostListing } from "../components/PostListing";

const HomeScreen = () => {
  const { data, isLoading } = trpc.useQuery(["post.get-all"]);

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostListing post={item} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
