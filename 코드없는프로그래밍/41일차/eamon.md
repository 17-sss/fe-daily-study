```js
/**
 * solution 함수
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = (board) => {
	const SIZE = 9;
	const rangeSize = Array(SIZE).fill(1);
	const empty = ".";

	// Y축 탐색
	const checkAxisY = (target, col) => {
		for (const i in rangeSize) {
			if (board[i][col] === target) return false;
		}
		return true;
	};

	// X축 탐색
	const checkAxisX = (target, row) => {
		for (const j in rangeSize) {
			if (board[row][j] === target) return false;
		}
		return true;
	};

	// 소그룹 탐색
	const checkGroup = (target, row, col) => {
		const rowGroup = Math.floor(row / 3) * 3;
		const colGroup = Math.floor(col / 3) * 3;
		for (let rg = rowGroup; rg < rowGroup + 3; rg++) {
			for (let cg = colGroup; cg < colGroup + 3; cg++) {
				if (board[rg][cg] === target) return false;
			}
		}
		return true;
	};

	// 전체 board에서 아직 empty인 좌표 탐색
	const findEmpty = () => {
		for (const row in rangeSize) {
			for (const col in rangeSize) {
				if (board[row][col] === empty) return [row, col];
			}
		}
		return [SIZE, SIZE];
	};

	/**
	 * 백트래킹 함수
	 * @param {number} row y좌표
	 * @param {number} col x좌표
	 * @param {string} target 해당 좌표에 대입할 숫자 문자열
	 * @returns
	 */
	const bt = (row, col, target) => {
		// 예외처리 1: row-col 모두 [9,9]에 도착한 경우 === 남은 empty가 없는 경우
		if (row === SIZE && col === SIZE) return true;

		// 예외처리 2: 정상 범위 아닌 경우, 여기서는 findEmpty 함수 있어서 없어도 됨
		if (!board[row] || !board[row][col]) return false;

		// 예외처리 3: 이미 target 숫자가 존재하는 경우
		if (
			!checkAxisY(target, col) ||
			!checkAxisX(target, row) ||
			!checkGroup(target, row, col)
		)
			return false;

		// 백트래킹 프로세스 시작
		// 일단 해당 위치를 target으로 지정
		board[row][col] = target;

		// 다음 처리할 좌표 탐색
		const [nextRow, nextCol] = findEmpty();
		// 해당 좌표에서 target 숫자 대입, 재귀적으로 탐색 후 맞으면 탈출까지
		for (const nextTarget in rangeSize) {
			if (bt(nextRow, nextCol, `${+nextTarget + 1}`)) return true;
		}

		// 해당 위치에서 답 찾아지지 않으면 다시 empty로 복귀하고 false return
		board[row][col] = empty;
		return false;
	};

	// 프로세스 시작
	const [startRow, startCol] = findEmpty();
	for (const target in rangeSize) {
		bt(startRow, startCol, `${target}`);
	}
};


```

너무 어려워서 답지 보았다 ㅠㅠ 나중에 다시봐야겠다