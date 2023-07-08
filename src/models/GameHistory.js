export default class GameHistory {
  constructor(squares, isXNext) {
    this.squares = squares;
    this.isXNext = isXNext;
  }

  getHistory() {
    return {
      squares: this.squares,
      isXNext: this.isXNext
    }
  }

  setHistory(squares, isXNext) {
    this.squares = squares;
    this.isXNext = isXNext;
  }

  getHistorySquares() {
    return this.squares;
  }

  getHistoryIsXNext() {
    return this.isXNext;
  }

  setHistorySquares(squares) {
    this.squares = squares;
  }

  setHistoryIsXNext(isXNext) {
    this.isXNext = isXNext;
  }

  getHistorySquaresByIndex(index) {
    return this.squares[index];
  }

  setHistorySquaresByIndex(index, squares) {
    this.squares[index] = squares;
  }
}
