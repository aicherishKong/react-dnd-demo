import { MultipleContainers } from "./components/MultipleContainers";
import { SortableTree } from "./components/Tree/SortableTree";

function App() {
  return (
    <>
      {/* <MultipleContainers itemCount={3} vertical /> */}
      <SortableTree collapsible indicator removable />
    </>
  );
}

export default App;
