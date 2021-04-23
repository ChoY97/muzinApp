<h1 align = "center">
📱 muzinApp 📱
</h1>
<br/><br/>

## 📋 Contents
- 💻 Login
- 💻 User

<br/><br/>

## 💻Login Screen
<img src = "https://user-images.githubusercontent.com/82933290/115818885-b7943780-a438-11eb-9ac2-69063f858909.png" width ="12%" align = "left">&nasp;&nasp;&nasp;
<img src = "https://user-images.githubusercontent.com/82933290/115820393-adc00380-a43b-11eb-9c53-d19b93a37d6b.png" width ="12%" align = "left">&nasp;&nasp;&nasp;
<img src = "https://user-images.githubusercontent.com/82933290/115819707-69803380-a43a-11eb-958b-6444cbda86b6.png" width ="12%" align = "left">

<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

- 화면 구성
- 화면 비율 1(로그인 텍스트 1 : input 2 (id 1 : pw 1)  : 버튼 3)
- text --> 로그인
- input --> id
- input --> pw --> secureTextEntry 설정하여 입력 값을 가려줌
- Button --> Login 버튼
- 버튼 클릭시 useState를 통하여 정해놓은 id, pw 값이 아닐경우 알림창이 나오며 
- 동일한 경우 페이지가 이동하며 id, pw값을 초기화

<br/><br/>

## 💻 User
<img src = "https://user-images.githubusercontent.com/82933290/115821027-f6c48780-a43c-11eb-951f-9ad322f0f86c.png" width ="12%" align = "left">
<img src = "https://user-images.githubusercontent.com/82933290/115821048-047a0d00-a43d-11eb-8b84-ab9d472d72b6.png" width ="12%" align = "left">

<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

- 화면 구성
- 화면 비율 1( 진모터스 텍스트 1 : 가로 스크롤 뷰 1 : 그리드 레이아웃 5 (1 ( 1 : 1 : 1 : 1) ) )
- 스크롤 뷰 -> ScrollView 설정에 horizontal = {true} 설정하여 세로스크롤 뷰를 가로로 스크롤 뷰로 변경
- 그리드 레이아웃 -> 뷰 style에 flexDirection = 'row' 를 설정하여 그리드 뷰 형성
