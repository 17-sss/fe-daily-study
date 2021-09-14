# Heap - Complete binary Tree

## MaxHip

![화면 캡처 2021-09-10 225713](https://user-images.githubusercontent.com/68339352/132864904-8fdbd1f6-abf6-4a07-846b-2c091e077c87.png)


부모노드는 자식노드들보다 항상 크다. 


enqeue => `O(logN)`


pop => 가장큰 숫자가 나온다. `O(logN)`
Top : O(1)
build Heap : O(n)

1. 가장 위의 head 를 pop
2. 트리중 가장 마지막에 있던 애를 


-> array 로 표현가능
![화면 캡처 2021-09-10 225713](https://user-images.githubusercontent.com/68339352/132865876-a49e4ca1-bf3b-41a8-baaf-0f1bc0e927b3.png)

부모노드 ->  idx - 1 / 2 


JS Heap 구현 
