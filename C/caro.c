#include <stdio.h>
#include <stdlib.h>
#include <math.h>

typedef struct state {
	char * decis;
	int n;                     // board n x n
} state;

void init_state(state * s, int n) {
	s->n = n; 
	int i = 0, len = pow(s->n, 2);
	s->decis = (char*)malloc(len); 
	while(i < len) {
		*(s->decis+i) = '_';
		i++;
	}
}

void print_state(state s) {
	int i, j;
	for(i = 0; i < s.n; i++) {
		for(j = 0; j < s.n; j++)
			printf("%c", *(s.decis + i * s.n + j));
		printf("\n");
	}
}

state * copy_state(state s) {
	state * cs = (state*)malloc(sizeof(state));
	if(cs != NULL) {
		cs->n = s.n;
		int i = 0, len = pow(s.n, 2);
		cs->decis = (char*)malloc(len); 
		while (i < len) {
			*(cs->decis + i) = *(s.decis + i);
			i++;
		}
	}
	return cs; 
}

state * set(state s, int i, int j) {
	if(i < 0 || i >= s.n || j < 0 || j >= s.n || *(s.decis + i * s.n + j) != '_') 
		return NULL;
	int c = 0, res = 0, len = pow(s.n, 2);
	while(c < len) {
		if(*(s.decis + c) != '_') res += 1;
		c++;
	}
	state * cs = copy_state(s);
	*(cs->decis + i * cs->n + j) = (c % 2 == 0 ? 'O' : 'X');
	return cs; 
}

int main(void) {
	state s; 
	init_state(&s, 3);
	*(s.decis+0*3+1) = 'X';
	*(s.decis+1*3+2) = 'O';
	print_state(s);
	printf("\n=====================\n");
	state * new_s = set(s, 1, 1); 
	print_state(*new_s);
	printf("\n=====================\n");
	print_state(s);
	return 0;
}
