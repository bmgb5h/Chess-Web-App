/* white rooks */
const a1Square = document.getElementById('a1');
const h1square = document.getElementById('h1');
const a1Piece = document.createElement('img');
const h1Piece = document.createElement('img');
a1Piece.src = 'chess piece images/white rook.png';
h1Piece.src = 'chess piece images/white rook.png';
a1Piece.alt = 'White Rook';
h1Piece.alt = 'White Rook';
a1Piece.className = 'piece'
h1Piece.className = 'piece'
a1Square.appendChild(a1Piece);
h1square.appendChild(h1Piece);

/* white knights */
const b1Square = document.getElementById('b1');
const g1Square = document.getElementById('g1');
const b1Piece = document.createElement('img');
const g1Piece = document.createElement('img');
b1Piece.src = 'chess piece images/white knight.png';
g1Piece.src = 'chess piece images/white knight.png';
b1Piece.alt = 'White Knight';
g1Piece.alt = 'White Knight';
b1Piece.className = 'piece'
g1Piece.className = 'piece'
b1Square.appendChild(b1Piece);
g1Square.appendChild(g1Piece);

/* white bishops */
const c1Square = document.getElementById('c1');
const f1Square = document.getElementById('f1');
const c1Piece = document.createElement('img');
const f1Piece = document.createElement('img');
c1Piece.src = 'chess piece images/white bishop.png';
f1Piece.src = 'chess piece images/white bishop.png';
c1Piece.alt = 'White Bishop';
f1Piece.alt = 'White Bishop';
c1Piece.className = 'piece'
f1Piece.className = 'piece'
c1Square.appendChild(c1Piece);
f1Square.appendChild(f1Piece);

/* white queen */
const d1Square = document.getElementById('d1');
const d1Piece = document.createElement('img');
d1Piece.src = 'chess piece images/white queen.png';
d1Piece.alt = 'White Queen';
d1Piece.className = 'piece'
d1Square.appendChild(d1Piece);

/* white king */
const e1Square = document.getElementById('e1');
const e1Piece = document.createElement('img');
e1Piece.src = 'chess piece images/white king.png';
e1Piece.alt = 'White King';
e1Piece.className = 'piece'
e1Square.appendChild(e1Piece);

/* white pawns */
const a2Square = document.getElementById('a2');
const b2Square = document.getElementById('b2');
const c2Square = document.getElementById('c2');
const d2Square = document.getElementById('d2');
const e2Square = document.getElementById('e2');
const f2Square = document.getElementById('f2');
const g2Square = document.getElementById('g2');
const h2Square = document.getElementById('h2');
const a2Piece = document.createElement('img');
const b2Piece = document.createElement('img');
const c2Piece = document.createElement('img');
const d2Piece = document.createElement('img');
const e2Piece = document.createElement('img');
const f2Piece = document.createElement('img');
const g2Piece = document.createElement('img');
const h2Piece = document.createElement('img');
a2Piece.src = 'chess piece images/white pawn.png';
b2Piece.src = 'chess piece images/white pawn.png';
c2Piece.src = 'chess piece images/white pawn.png';
d2Piece.src = 'chess piece images/white pawn.png';
e2Piece.src = 'chess piece images/white pawn.png';
f2Piece.src = 'chess piece images/white pawn.png';
g2Piece.src = 'chess piece images/white pawn.png';
h2Piece.src = 'chess piece images/white pawn.png';
a2Piece.alt = 'White Pawn';
b2Piece.alt = 'White Pawn';
c2Piece.alt = 'White Pawn';
d2Piece.alt = 'White Pawn';
e2Piece.alt = 'White Pawn';
f2Piece.alt = 'White Pawn';
g2Piece.alt = 'White Pawn';
h2Piece.alt = 'White Pawn';
a2Piece.className = 'piece'
b2Piece.className = 'piece'
c2Piece.className = 'piece'
d2Piece.className = 'piece'
e2Piece.className = 'piece'
f2Piece.className = 'piece'
g2Piece.className = 'piece'
h2Piece.className = 'piece'
a2Square.appendChild(a2Piece);
b2Square.appendChild(b2Piece);
c2Square.appendChild(c2Piece);
d2Square.appendChild(d2Piece);
e2Square.appendChild(e2Piece);
f2Square.appendChild(f2Piece);
g2Square.appendChild(g2Piece);
h2Square.appendChild(h2Piece);

/* black rooks */
const a8Square = document.getElementById('a8');
const h8Square = document.getElementById('h8');
const a8Piece = document.createElement('img');
const h8Piece = document.createElement('img');
a8Piece.src = 'chess piece images/black rook.png';
h8Piece.src = 'chess piece images/black rook.png';
a8Piece.alt = 'Black Rook';
h8Piece.alt = 'Black Rook';
a8Piece.className = 'piece'
h8Piece.className = 'piece'
a8Square.appendChild(a8Piece);
h8Square.appendChild(h8Piece);

/* black knights */
const b8Square = document.getElementById('b8');
const g8Square = document.getElementById('g8');
const b8Piece = document.createElement('img');
const g8Piece = document.createElement('img');
b8Piece.src = 'chess piece images/black knight.png';
g8Piece.src = 'chess piece images/black knight.png';
b8Piece.alt = 'Black Knight';
g8Piece.alt = 'Black Knight';
b8Piece.className = 'piece'
g8Piece.className = 'piece'
b8Square.appendChild(b8Piece);
g8Square.appendChild(g8Piece);

/* black bishops */
const c8Square = document.getElementById('c8');
const f8Square = document.getElementById('f8');
const c8Piece = document.createElement('img');
const f8Piece = document.createElement('img');
c8Piece.src = 'chess piece images/black bishop.png';
f8Piece.src = 'chess piece images/black bishop.png';
c8Piece.alt = 'Black Bishop';
f8Piece.alt = 'Black Bishop';
c8Piece.className = 'piece'
f8Piece.className = 'piece'
c8Square.appendChild(c8Piece);
f8Square.appendChild(f8Piece);

/* black queen */
const d8Square = document.getElementById('d8');
const d8Piece = document.createElement('img');
d8Piece.src = 'chess piece images/black queen.png';
d8Piece.alt = 'Black Queen';
d8Piece.className = 'piece'
d8Square.appendChild(d8Piece);

/* black king */
const e8Square = document.getElementById('e8');
const e8Piece = document.createElement('img');
e8Piece.src = 'chess piece images/black king.png';
e8Piece.alt = 'Black King';
e8Piece.className = 'piece'
e8Square.appendChild(e8Piece);

/* black pawns */
const a7Square = document.getElementById('a7');
const b7Square = document.getElementById('b7');
const c7Square = document.getElementById('c7');
const d7Square = document.getElementById('d7');
const e7Square = document.getElementById('e7');
const f7Square = document.getElementById('f7');
const g7Square = document.getElementById('g7');
const h7Square = document.getElementById('h7');
const a7Piece = document.createElement('img');
const b7Piece = document.createElement('img');
const c7Piece = document.createElement('img');
const d7Piece = document.createElement('img');
const e7Piece = document.createElement('img');
const f7Piece = document.createElement('img');
const g7Piece = document.createElement('img');
const h7Piece = document.createElement('img');
a7Piece.src = 'chess piece images/black pawn.png';
b7Piece.src = 'chess piece images/black pawn.png';
c7Piece.src = 'chess piece images/black pawn.png';
d7Piece.src = 'chess piece images/black pawn.png';
e7Piece.src = 'chess piece images/black pawn.png';
f7Piece.src = 'chess piece images/black pawn.png';
g7Piece.src = 'chess piece images/black pawn.png';
h7Piece.src = 'chess piece images/black pawn.png';
a7Piece.alt = 'Black Pawn';
b7Piece.alt = 'Black Pawn';
c7Piece.alt = 'Black Pawn';
d7Piece.alt = 'Black Pawn';
e7Piece.alt = 'Black Pawn';
f7Piece.alt = 'Black Pawn';
g7Piece.alt = 'Black Pawn';
h7Piece.alt = 'Black Pawn';
a7Piece.className = 'piece'
b7Piece.className = 'piece'
c7Piece.className = 'piece'
d7Piece.className = 'piece'
e7Piece.className = 'piece'
f7Piece.className = 'piece'
g7Piece.className = 'piece'
h7Piece.className = 'piece'
a7Square.appendChild(a7Piece);
b7Square.appendChild(b7Piece);
c7Square.appendChild(c7Piece);
d7Square.appendChild(d7Piece);
e7Square.appendChild(e7Piece);
f7Square.appendChild(f7Piece);
g7Square.appendChild(g7Piece);
h7Square.appendChild(h7Piece);

