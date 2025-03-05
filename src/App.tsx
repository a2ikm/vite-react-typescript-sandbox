import { useState } from "react";
import "./App.css";

function App() {
	const [bpm, setBpm] = useState(0);

	const handleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBpm(parseInt(e.target.value));
	}

	const calcMilliseconds = (bpm: number): number => {
		return Math.floor(60 * 1000 / bpm);
	}

	return (
		<>
			<div>
				BPM: <input type="number" onChange={handleChanged} />
			</div>
			<div>
				Milliseconds: {calcMilliseconds(bpm)}
			</div>
		</>
	);
}

export default App;
