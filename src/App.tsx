import Button from "./components/Button";

const App = () => {
  return (
    <div className="p-8 space-y-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Button Examples</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="primary" size="medium">
            Primary Button
          </Button>
          <Button variant="secondary" size="medium">
            Secondary Button
          </Button>
          <Button variant="outline" size="medium">
            Outline Button
          </Button>
          <Button variant="ghost" size="medium">
            Ghost Button
          </Button>
          <Button variant="primary" size="small">
            Small Button
          </Button>
          <Button variant="primary" size="large">
            Large Button
          </Button>
          <Button variant="primary" isLoading>
            Loading Button
          </Button>
          <Button variant="primary" disabled>
            Disabled Button
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
