export function History({
  history,
  onClick,
}: {
  history: (string | null)[][];
  onClick: (idx: number) => void;
}) {
  return (
    <ul>
      {history.map((_, idx) => {
        if (idx === 0) return;
        return (
          <li key={idx}>
            <button onClick={() => onClick(idx - 1)}>
              <span>{idx}. </span>
              {idx === 1 ? (
                <span>Go to game start</span>
              ) : (
                <span>Go to move #{idx - 1}</span>
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
