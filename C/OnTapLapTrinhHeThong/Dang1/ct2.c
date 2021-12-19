#include <stdio.h>
#include <conio.h>
#include <pthread.h>

void * thread_func(void * arg) {
	char c, tmp = '!';
	FILE * f; 
	while((f = fopen("dulieu.txt", "r+")) != NULL) {
		fscanf(f, "%c", &c);
		fclose(f);
		if(c != tmp) {
			tmp = c;
			putchar(c);
		}
		if(c == '!') break;
	}
}

int main(void) {
	pthread_t thrd; 
	if(pthread_create(&thrd, NULL, thread_func, NULL) != 0) {
		perror("[x] Tao thread that bai\n");
		exit(1);
	}
	(void) pthread_join(thrd, NULL);
	return 0;
}