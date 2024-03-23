#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <conio.h>
#include <unistd.h>

void * thread1_func(void * arg) {
	int * a = (int*)arg;
	int i, n; 
	while(1) {
		i = 0;
		printf("\n[.] nhap so phan tu mang a: "); 
		scanf("%d%*c", &n);
		if(n <= 0 || n > 10) break;
		while (i < n) {
			printf("a[%d] = ", i); 
			scanf("%d", a+i);
			i++;
		}
		printf("\n[.] mang a: ");
		i = 0;
		while(i < n) {
			printf("%d ", *(a+i));
			i++;
		}
	}
}

void * thread2_func(void * arg) {
	int * b = (int*)arg;
	int i, n; 
	while(1) {
		i = 0;
		n = rand() % (12 + 1 - 0) + 0;
		printf("\n[.] so phan tu mang b: %d\n", n);
		if(n <= 0 || n > 10) break;
		while (i < n) {
			sleep(2);
			*(b+i) = rand();
			printf("\nb[%d] = %d\n", i, *(b+i));
			i++;
		}
		i = 0;
		printf("\n[.] mang b: ");
		while (i < n) {
			printf("%d ", *(b+i));
			i++;
		}
	}
}

int main() {
	int a[10], b[10];
	pthread_t thrd1, thrd2; 
	if(pthread_create(&thrd1, NULL, thread1_func, a) != 0) 
		perror("[x] Khoi tao thread 1 that bai");
	if(pthread_create(&thrd2, NULL, thread2_func, b) != 0)
		perror("[x] Khoi tao thread 2 that bai");
	(void) pthread_join(thrd1, NULL);
	(void) pthread_join(thrd2, NULL);
	return 0;
}