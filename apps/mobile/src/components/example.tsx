import { trpc } from "../utils/trpc";
import { SafeAreaView, Text, Button, FlatList, View } from "react-native";

export const ExamplesView = () => {
  const examples = trpc.useQuery(["example.getAll"], {
    refetchInterval: 3000,
  });

  console.log(examples);

  return (
    <SafeAreaView>
      {examples.data ? (
        <FlatList
          data={examples.data} // <-- is `.json` there cause i have a transformer on the server but not the mobile client?
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            console.log(item);
            return (
              <View>
                <Text>{item.id}</Text>
              </View>
            );
          }}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </SafeAreaView>
  );
};

export const ExampleCreator = () => {
  const ctx = trpc.useContext();
  const create = trpc.useMutation(["example.create"], {
    onSuccess() {
      ctx.invalidateQueries(["example.getAll"]);
    },
  });

  return (
    <SafeAreaView>
      <Button onPress={() => create.mutate()} title="Create New" />
    </SafeAreaView>
  );
};
