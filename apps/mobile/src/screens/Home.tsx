import { SafeAreaView, Text } from "react-native";
import { trpc } from "../utils/trpc";

const Home = () => {
  const { data, isLoading } = trpc.useQuery([
    "hello.greeting",
    { name: "World" },
  ]);

  return (
    <SafeAreaView>
      {isLoading ? <Text>Loading...</Text> : <Text>{data}</Text>}
    </SafeAreaView>
  );
};

export default Home;
