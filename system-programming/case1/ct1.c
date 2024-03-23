#include <stdio.h>
#include <pthread.h>
#include <conio.h>

void * thread_func(void * arg) {
	char c; 
	FILE * f;
	while((f = fopen("dulieu.txt", "w+")) != NULL) {
		printf("Nhap ky tu: ");
		c = getchar();
		fflush(stdin);
		fprintf(f, "%c", c);
		fclose(f);
		if(c == '!') break;
	}
}

int main() {
	pthread_t thrd; 
	if(pthread_create(&thrd, NULL, thread_func, NULL) != 0) {
		perror("[x] Tao thread that bai\n");
		exit(1);
	}
	(void) pthread_join(thrd, NULL);
	return 0;
}
