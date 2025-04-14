import { MultipleContainers } from "./components/MultipleContainers";
import { SortableTree } from "./components/Tree/SortableTree";

function App() {
  return (
    <>
      <MultipleContainers
        itemCount={2}
        vertical
        items={{
          // A: ["A1", "A2", "A3"],
          // B: ["B1", "B2", "B3"],
          100: [{ name: "100-1" }, { name: "100-2" }],
          101: [{ name: "101-1" }, { name: "101-2" }],
        }}
      />
      {/* <SortableTree collapsible indicator removable /> */}
    </>
  );
}

export default App;
