import Container from "./components/Container";
import Summary from "./components/Summary/Summary";

function App() {
  return (
    <div className="flex justify-center m-5">
      <div className="flex flex-col items-center">
        <div className="sm:w-[640px] border shadow p-10 flex flex-col gap-10">
          <Container title={"Summary"}>
            <Summary />
          </Container>
          <Container>
            <div> Placeholder section</div>
          </Container>
          <Container title={"Placeholder"}>
            <div> Placeholder section</div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
