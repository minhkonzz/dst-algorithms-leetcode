#include <stdio.h>
#include <stdlib.h>
#include <conio.h>
#define ESC 27

typedef struct queue {
  char * chars;
  int front; 
  int rear; 
} queue;

short bytes = 0; 
void init(queue * q);
int is_empty(queue q);
int enqueue(queue * q, char c);
char dequeue(queue * q);

int main(void) {
  int res, i; 
  char c = '\t';  
  queue q; 
  init(&q);
  printf("let's type any chracter to put into queue");
  while(1) {
    if(_kbhit()) {
      c = _getch();
      if((int)c != ESC) {
	res = enqueue(&q, c);
	if(res == 1)
          printf("\ncharacter '%c' is putted into queue", c);
	else 
	  printf("\ncannot put character '%c' into queue", c);
      }
      else break;
    }
  }
  if(bytes != 0) {
    printf("\nqueue -> front: ");
    while(is_empty(q) == 0) {
      c = dequeue(&q);
      printf("%c ", c);
    }
    printf(":back\nExited");
  }
  else printf("\nqueue empty\nExited");
  return 0;
}

void init(queue * q) {
  q->chars = NULL;
  q->front = 0; 
  q->rear = -1; 
}

int is_empty(queue q) {
  return (q.front > q.rear ? 1 : 0);
}

int enqueue(queue * q, char c) {
  q->chars = (char*)realloc(q->chars, bytes++);
  if(q->chars != NULL) {
    q->rear++;
    *(q->chars+(q->rear)) = c;
    return 1; 
  }
  return 0;
}

char dequeue(queue * q) {
  char c = *(q->chars+(q->front));
  q->front++;
  if(q->front > q->rear) {
    q->front = 0; 
    q->rear = -1; 
  }
  return c; 
}
