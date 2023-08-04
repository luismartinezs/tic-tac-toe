import { TPlayer } from "@/types";

export function Square({ player }: { player: TPlayer }) {
  return (
    <div className="border border-white w-full h-full text-xl text-center p-0 m-0">
      {player}
    </div>
  );
}
