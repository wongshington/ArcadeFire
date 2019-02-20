import { connect } from 'react-redux';
import Preview from './piecePreview';

const mSP = (state) => ({
  piece: state.tetris.scoreBoard.savePiece
})

export default connect(mSP, null)(Preview);