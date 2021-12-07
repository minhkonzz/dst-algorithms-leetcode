#include <stdio.h>
#include <winsock2.h>
#include <conio.h>
#include <string.h>

typedef struct header {
	long data_len;
} hdr;


void write_file(FILE * fp, SOCKET socket) {
	hdr h; 
	recv(socket, (const char *)(&h), sizeof(h), 0); 
	char * buffer = (char*)malloc(h.data_len * sizeof(char));
	recv(socket, buffer, h.data_len, 0);
	if(fwrite(buffer, sizeof(char), h.data_len, fp) != h.data_len) {
		perror("Loi ghi file");
		exit(1);
	}
	else 
	 	printf("[+] Ghi file thanh cong!\n");
}

int main(void) {
	
	WSADATA wsaData;
	SOCKET sockfd, new_sock;
	SOCKADDR_IN serAddr, cliAddr;
	char * ip = "127.0.0.1"; 
	int port = 1000;
	int iRc;
	int addr_size;
	
	FILE * fp;
	char * file_path = "write_image.bin";

	iRc = WSAStartup(MAKEWORD(2, 2), &wsaData);
	sockfd = socket(AF_INET, SOCK_STREAM, 0);
	if(sockfd < 0) {
		perror("[.] Loi tao socket\n"); 
		exit(1);
	}
	printf("[+] Tao socket thanh cong\n"); 

  serAddr.sin_family  = AF_INET;
  serAddr.sin_addr.s_addr = inet_addr(ip);
  serAddr.sin_port = htons(port);

  iRc = bind(sockfd, (LPSOCKADDR)&serAddr, sizeof(serAddr));
  if(iRc < 0) {
  	perror("[.] Loi binding\n"); 
  	exit(1);
	}
  printf("[+] Binding thanh cong\n"); 
  
  printf("[+] Cho ket noi tu client!...\n");
  iRc = listen(sockfd, 10);
  if(iRc == 0)
  	printf("[+] Lang nghe ket noi\n");
  else {
  	perror("[.] Loi lang nghe ket noi\n");
  	exit(1);
	}
  
	addr_size = sizeof(cliAddr);
  new_sock = accept(sockfd, (LPSOCKADDR)&cliAddr, &addr_size);
  printf("[.] Client da ket noi toi!\n");
  
  if((fp = fopen(file_path, "wb"))  == NULL) {
		perror("[.] Khong doc duoc file\n");
		exit(1);
	}
	  
  write_file(fp, new_sock);
  
	closesocket(new_sock);
	closesocket(sockfd);
	WSACleanup();
  getch();
  return 0;
}
