#include <stdio.h>
#include <unistd.h>

#define ROW 3
#define COL 3
#define AI_TURN 0
#define PLAYER_TURN 1
#define AI 'X'
#define PLAYER 'O'

typedef struct position {
	int row, col;
} pos;

void print_winner(int turn) {
	printf("%s", turn == PLAYER_TURN ? "PLAYER WIN!" : "AI WIN!");
}

int is_win(char * board) {
	int row, col;
	for(row = 0; row < ROW; row++) {
    if(*(board + row * COL) == *(board + row * COL + 1) && *(board + row * COL + 1) == *(board + row * COL + 2) && *(board + row * COL) != ' ') 
    	return 1; 
  }
  for(col = 0; col < COL; col++) {
    if(*(board + col) == *(board + COL + col) && *(board + COL + col) == *(board + 2 * COL + col) && *(board + col) != ' ') {
    	return 1; 
    }
  }
  if(*board == *(board + COL + 1) && *(board + COL + 1) == *(board + 2 * COL + 2) && *(board + COL + 1) != ' ') 
  	return 1; 
  if(*(board + 2) == *(board + COL + 1) && *(board + COL + 1) == *(board + 2 * COL + 0) && *(board + COL + 1) != ' ') 
  	return 1; 
  return 0;
}

int minimax(char * board, int depth, int is_ai) {
	int score, best_score;
	int row, col;  
	if (is_win(board) == 1) return is_ai == 1 ? -1 : 1; 
	else {
		if(depth < ROW * COL) {
			if(is_ai == 1) {
				best_score = -1000;
				for(row = 0; row < ROW; row++) {
					for(col = 0; col < COL; col++) {
						if(*(board + row * COL + col) == ' ') {
							*(board + row * COL + col) = AI;
							score = minimax(board, depth + 1, 0);
							*(board + row * COL + col) = ' ';
							if(score > best_score) best_score = score; 
						}
					}
				}
				return best_score;
			}
			else {
				best_score = 1000;
				for(row = 0; row < ROW; row++) {
					for(col = 0; col < COL; col++) {
						if(*(board + row * COL + col) == ' ') {
							*(board + row * COL + col) = PLAYER;
							score = minimax(board, depth + 1, 1);
							*(board + row * COL + col) = ' ';
							if(score < best_score) best_score = score; 
						}
					}
				}
				return best_score;
			}
		}
		else return 0;
	}
}

pos get_best_pos(char * board, int move_index) {
	pos best_pos;
	best_pos.row = -1; 
	best_pos.col = -1;
	int i, j; 
	int score = 0, best_score = -1000;
	for(i = 0; i < ROW; i++) {
		for (j = 0; j < COL; j++) {
			if (*(board + i * COL + j) == ' ') {
				*(board + i * COL + j) = AI;
				score = minimax(board, move_index+1, 0);
				*(board + i * COL + j) = ' ';
				if(score > best_score) {
					best_score = score;
					best_pos.row = i; 
					best_pos.col = j;
				}
			}
		}
	}
	return best_pos;
}

void render_board(char * board) {
	short i, j;
	printf("+-----------+\n");
	for(i = 0; i < ROW; i++) {
		for(j = 0; j < COL; j++) {
			printf("| %c ", *(board + i * COL + j));
		}
		printf("|\n");
		printf("+-----------+\n");  
	}
	printf("\n");
}

void start_game(char * board, int turn) {
	if(turn == -1) return;
	int move_index = 0, i = 0, j = 0;
	pos move; 
	while(is_win(board) == 0 && move_index != (ROW * COL)) { 
		if(turn == AI_TURN) {
			move = get_best_pos(board, move_index); 
			*(board + move.row * COL + move.col) = AI;
			printf("AI danh: \n");
			render_board(board);
			move_index++;
			turn = PLAYER_TURN;
			sleep(1);
		}
		else if(turn == PLAYER_TURN) {
			printf("Den luot ban\n");
			printf("row: "); 
			scanf("%d", &i);
			printf("col: "); 
			scanf("%d", &j);
			if(*(board + i * COL + j) == ' ' && i < ROW && i >= 0 && j < COL && j >= 0) {
				*(board + i * COL + j) = PLAYER; 
				render_board(board); 
				move_index++; 
				turn = AI_TURN;
			}
			else printf("\nVi tri khong hop le");
			sleep(1);
		}
	}
	if(is_win(board) == 0 && move_index == ROW * COL) 
		printf("\nGame Hoa\n"); 
	else { 
		turn = turn == AI_TURN ? PLAYER_TURN : AI_TURN; 
		print_winner(turn);
	} 
}

int main(void) {
	char keep_playing;
	char board[ROW][COL] = {
	  {' ', ' ', ' '},
	  {' ', ' ', ' '},
	  {' ', ' ', ' '}
	};
	char * ptr_board = &board[0][0];
	printf("Bat dau tro choi\n\n");
	render_board(ptr_board);
	printf("\nBan la [O] - AI la [X]\n");
	char opt;
	do {
	 	printf("\nBan muon di truoc khong?(y/n) : ");
	 	scanf("%c%*c", &opt);
		start_game(ptr_board, opt == 'y' ? PLAYER_TURN : (opt == 'n' ? AI_TURN : -1));
		printf("\nBan muon thoat game khong(y/n): ");
   	keep_playing = getchar();
   	fflush(stdin);
	} while(keep_playing == 'n');
}