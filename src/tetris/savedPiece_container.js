import { connect } from 'react-redux';
import Preview from './piecePreview';

const mSP = (state) => ({
  piece: state.tetris.scoreBoard.savePiece,
  text: "Saved Piece",
})

export default connect(mSP, null)(Preview);