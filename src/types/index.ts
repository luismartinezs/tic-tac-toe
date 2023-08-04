export type TPlayer = 'X' | 'O'

export type TSquare = TPlayer | null

export type TSquares = [
  TSquare,
  TSquare,
  TSquare,
  TSquare,
  TSquare,
  TSquare,
  TSquare,
  TSquare,
  TSquare
]

export type THistory = {
  squares: TSquares
  player: TPlayer
}[]
