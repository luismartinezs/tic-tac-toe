import { Game } from "@/components/Game";
import GradientBackground from "@/components/GradientBackground";

function App() {
  return (
    <>
      <Game />
      <GradientBackground
        xPosition={90}
        yPosition={5}
        from="#ef1a8e 0%"
        to="transparent 80%"
        opacity={0.15}
        radius={500}
      />
      <GradientBackground
        xPosition={10}
        yPosition={45}
        from="#691def 0%"
        to="transparent 80%"
        opacity={0.15}
        radius={1200}
      />
    </>
  );
}

export default App;
