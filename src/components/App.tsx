import { Heading, Pane, Text, majorScale, Spinner, Alert } from "evergreen-ui";

function App() {
  return (
    <Pane>
      <Heading marginBottom={majorScale(2)}>Bookmarks</Heading>
      <Text>Welcome to the bookmarks app</Text>
      <Alert
        intent="none"
        title="Coming soon!"
        marginBottom={32}
        marginTop={32}
      />
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={400}
      >
        <Spinner />
      </Pane>
    </Pane>
  );
}

export default App;
