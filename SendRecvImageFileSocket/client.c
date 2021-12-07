#include <winsock2.h>
#include <stdio.h>
#include <conio.h>
#include <string.h>

typedef struct header {
	long data_len; 
} hdr;

void send_file(FILE * fp, int sockfd) {
	fseek(fp, 0, SEEK_END); 
	unsigned long file_size = ftell(fp);
	char * buffer = (char*)malloc(sizeof(char) * file_size);
	rewind(fp);
	if(fread(buffer, sizeof(char), file_size, fp) != file_size) {
		perror("Loi doc bin file");
		exit(1);
	} 
	hdr h; 
	h.data_len = file_size;
	send(sockfd, (const char *)(&h), sizeof(h), 0); 
	send(sockfd, buffer, file_size, 0);
	printf("[+] Gui file thanh cong\n");
}

int main(void) {
	
	WSADATA wsaData;
	SOCKET sockfd;
	SOCKADDR_IN serAddr;
	char * ip = "127.0.0.1"; 
	int port = 1000;
	
	int iRc = WSAStartup(MAKEWORD(2, 2), &wsaData);
	FILE * fp;
	char * file_name = "image.png";
	
	sockfd = socket(AF_INET, SOCK_STREAM, 0);
	if(sockfd < 0) {
		perror("[.] Loi khi tao socket\n"); 
		exit(1);
	}
	printf("[+] Tao socket thanh cong\n"); 

  serAddr.sin_family  = AF_INET;
  serAddr.sin_addr.s_addr = inet_addr(ip);
  serAddr.sin_port = htons(port);
  
  iRc = connect(sockfd, (LPSOCKADDR)&serAddr, sizeof(serAddr));
  if(iRc == -1) {
  	perror("[.] Loi ket noi voi server\n");
  	exit(1);
	}
	printf("[+] Ket noi thanh cong den server!\n");
	
	if((fp = fopen(file_name, "rb"))  == NULL) {
		perror("[.] Khong doc duoc file\n");
		exit(1);
	}
	
	send_file(fp, sockfd);
	
	closesocket(sockfd);
	WSACleanup();
	printf("[+] Thoat ket noi!\n");
	return 0;
}