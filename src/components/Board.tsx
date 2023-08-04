import classnames from "classnames";

const getBorderClasses = (idx: number) => {
  let res = "border-t border-l";
  if (idx % 3 === 2) res += " border-r";
  if (idx >= 6) res += " border-b";
  return res;
};

export function Board({
  squares,
  onMove,
}: {
  squares: Array<string | null>;
  onMove: (idx: number) => void;
}) {
  return (
    <div className="grid grid-cols-3">
      {squares.map((square, idx) => (
        <button
          onClick={() => onMove(idx)}
          key={idx}
          className={classnames(
            "h-10 w-10 border-gray-500 flex items-center justify-center text-xl",
            getBorderClasses(idx)
          )}
        >
          {square}
        </button>
      ))}
    </div>
  );
}
