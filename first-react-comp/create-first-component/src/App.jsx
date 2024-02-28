// to use an exported component we have to import it first then we can use it
import KgButton from "./KgButton";
import Hello from "./hello";
import Hello1 from "./Hello1";
import Random from "./Random";
function App() {
  return (
    <div>
      <h1>This is the best react course</h1>
      <button>hello</button>
      <br />
      <hr />
      {/* KgButtonfile */}
      {/* <KgButton></KgButton>  */}
      {/* <Hello1></Hello1> */}
      {/* <Hello></Hello> */}
      <Hello1 />
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
    </div>
  );
}
export default App;
