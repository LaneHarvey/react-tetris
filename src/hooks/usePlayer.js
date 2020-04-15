import { useState } from 'react';
import { STAGE_WIDTH } from '../gameHelpers';

import { randomTetromino } from '../tetrominos';

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x:0, y:0 },
        tetromino: randomTetromino().shape,
        collided: false,
    });
    return [player];
}