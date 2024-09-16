import { Joker } from "./Joker";
import { processFile } from "./loading";
import { useEffect, useState } from "react";

export function SaveFileViewer({ file }) {
  const [state, setState] = useState(null);
  useEffect(() => {
    file
      .arrayBuffer()
      .then((buffer) => setState(processFile(buffer)))
      .catch(console.log);
  }, [file]);

  console.log(file);

  if (!state || !state["joker_usage"]) return;
  return (
    <div
      style={{
        display: "grid",
        gap: "8px",
        margin: "16px",
        gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
      }}
    >
      {Object.entries(state["joker_usage"])
        .sort((a, b) => a[0] > b[0])
        .map((joker) => (
          <Joker className="grid-item" name={joker[0]} data={joker[1]} />
        ))}
    </div>
  );
}
