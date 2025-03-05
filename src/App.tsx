import { useState } from "react";
import "./App.css";

function App() {
	const [bpm, setBpm] = useState(0);

	const handleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBpm(parseInt(e.target.value));
	}

	return (
		<>
			<div>
				BPM: <input type="number" onChange={handleChanged} />
			</div>
			<div>
				raw value: {bpm}
			</div>
		</>
	);
}

export default App;
