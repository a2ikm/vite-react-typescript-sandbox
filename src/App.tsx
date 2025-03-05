import { useState } from "react";
import "./App.css";

interface Note {
	name: string;

	// Rate of this note's value against quarter note
	rate: number;
}

const Notes: Note[] = [
	{ name: "1/1",        rate: 4 },
	{ name: "1/2",        rate: 2 },
	{ name: "1/2 + 1/4",  rate: 2 + 1 },
	{ name: "1/4",        rate: 1 },
	{ name: "1/4 + 1/8",  rate: 1 + 1/2 },
	{ name: "1/8",        rate: 1/2 },
	{ name: "1/8 + 1/16", rate: 1/2 + 1/4 },
	{ name: "1/16",       rate: 1/4 },
];

function App() {
	const [bpm, setBpm] = useState(0);

	const handleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBpm(parseInt(e.target.value));
	}

	const calcDelayTime = (bpm: number, rate: number): number => {
		return Math.floor(60 * 1000 * rate / bpm);
	}

	return (
		<>
			<h1>Delay time calculator</h1>
			<div>
				BPM: <input type="number" onChange={handleChanged}/>
			</div>
			<table>
				<thead>
					<tr>
						<th>Note</th>
						<th>Delay time (msec)</th>
					</tr>
				</thead>
				<tbody>
					{
						Notes.map((note, _) => {
							return (
								<tr>
									<td>{note.name}</td>
									<td>{calcDelayTime(bpm, note.rate)}</td>
								</tr>
							);
						})
					}
				</tbody>
			</table>
		</>
	);
}

export default App;
