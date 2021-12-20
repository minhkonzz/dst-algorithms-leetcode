#include <stdio.h>
#include <pthread.h>
#include <windows.h>

int msleep(unsigned int ms) {
	return usleep(ms * 1000); 
}

int tmp; 

void * task1(void * arg) {
	int random; 
	while(1) {
		random = rand();
		printf("Task1: %d\n", random);
		tmp = random;
		if(random > 31000) break;
		msleep(500);
	}
}

void * task2(void * arg) {
	int random = 0; 
	while(1) {
		if(tmp > random) {
			random = tmp;
			Beep(400, 400);
			printf(">>>>> ");
		}
		printf("Task2: %d\n", random);
		if(random > 31000) break;
		msleep(450);
	}
}

int main() {
	pthread_t thrd1, thrd2; 
	if(pthread_create(&thrd1, NULL, task1, NULL) != 0) {
		perror("[x] tao task1 that bai");
	}	
	if(pthread_create(&thrd2, NULL, task2, NULL) != 0) {
		perror("[x] tao task2 that bai");
	}
	(void) pthread_join(thrd1, NULL); 
	(void) pthread_join(thrd2, NULL);
	return 0;
}