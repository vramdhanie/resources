import { Heading, Pane, Text, majorScale } from "evergreen-ui";

function App() {
  return (
    <Pane>
      <Heading marginBottom={majorScale(2)}>Bookmarks</Heading>
      <Text>Welcome to the bookmarks app</Text>
    </Pane>
  );
}

export default App;
