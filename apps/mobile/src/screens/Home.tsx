import { trpc } from "../utils/trpc";
import { ExampleCreator, ExamplesView } from "../components/example";
import { SafeAreaView, Text } from "react-native";

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text>Create T3 App (Monorepo Version)</Text>
      <Text>Examples</Text>
      <ExamplesView />
      <ExampleCreator />
    </SafeAreaView>
  );
};
