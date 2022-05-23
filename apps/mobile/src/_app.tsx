import { registerRootComponent } from "expo";
import IndexScreen from "./screens";

export default function App() {
  return (
    <>
      <IndexScreen />
    </>
  );
}

registerRootComponent(App);
