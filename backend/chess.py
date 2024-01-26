class ChessBoard:
    class Piece:
        # All chess pieces share the following attributes:
        #   - Are either black or white
        #   - Are either in play or not in play
        #   - Have a position on the board (when in play)
        def __init__(self, color: str, position: list[int]):
            self.color = color
            self.position = position
            self.in_play = True

    class Pawn(Piece):
        def __init__(self, color: str, position: list[int]):
            super().__init__(color, position)
            self.has_moved = False  # Pawns can move 2 spaces forward if they haven't moved yet

    class Knight(Piece):
        pass
            
    class Bishop(Piece):
        pass

    class Rook(Piece):
        def __init__(self, color: str, position: list[int]):
            super().__init__(color, position)
            self.has_moved = False  # To check for castling

    class Queen(Piece):
        pass

    class King(Piece):
        def __init__(self, color: str, position: list[int]):
            super().__init__(color, position)
            self.has_moved = False  # Also to check for castling

        