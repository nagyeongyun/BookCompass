# :books: 서재 나침반  BookCompass
우리 동네 책 읽기 좋은 공간, 지금 바로 찾아보세요!
<br/>
우리 동네 도서관 정보 서비스, 서재 나침반
<br/><br/>

## :bulb: 프로젝트 소개
- 2020년 코로나를 기점으로 공공도서관의 이용객이 크게 감소했고, 현재 회복세에 있지만 아직 코로나 이전 수준에 크게 미치지 못합니다.
- 서재 나침반은 이러한 문제를 해결하고 독서 문화를 활성화하기 위해 기획되었습니다.
- 가까운 도서관과 도서 정보를 쉽게 접근할 수 있도록 하며 이용자들의 리뷰, 커뮤니티 공간을 제공합니다.
- 이를 통해 도서관 이용률을 높이고, 편리하고 쾌적한 독서 문화 촉진을 목표로 합니다.

## :busts_in_silhouette: 팀원
|김민규|김민석|김해강|나경윤|서승범|이정안|
|:----:|:----:|:----:|:----:|:----:|:----:|
|BE, 데이터분석|  BE  |BE|FE|FE|FE| 
|메인Map, 데이터 그래프|유저, 게시판|마이페이지, 리뷰|인트로, 유저, 마이페이지|게시판, 갤러리|메인페이지| 

## :wrench: 개발 환경
- 기술 스택
<div> 
&emsp;&emsp;<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=ffd35b"/>
<br/>
&emsp;&emsp;<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
<img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">
<img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
<br/>
&emsp;&emsp;<img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white">
<img src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white">
<img src="https://img.shields.io/badge/Plotly-%233F4F75.svg?style=for-the-badge&logo=plotly&logoColor=white">
</div>

- 버전 관리 : [GitLab](https://kdt-gitlab.elice.io/ai_track/class_10/data_project/team04/bookcompass)
- 디자인 : [Figma](https://www.figma.com/design/TvYfVPgD88WEqyyeMtMC7B/%EC%84%9C%EC%9E%AC-%EB%82%98%EC%B9%A8%EB%B0%98?node-id=0-1&t=CBwbMY2H977cPQQ8-0)
- ERD<br/>
&nbsp;<img src="https://github.com/nagyeongyun/BookCompass/assets/72790695/9d7b9a1e-2cd2-4ffc-a6ca-0bfc4a27a1c0" width="600" height="400">
- API : Swagger <br/>
&nbsp;<img src="https://github.com/nagyeongyun/BookCompass/assets/72790695/4330690b-9b03-43bf-9e15-919a410654e2" width="400" height="400">

## :file_folder: 프로젝트 구조
```
📦bookcompass
 ┣ 📂client
 ┃ ┣ 📂public
 ┃ ┃ ┣ 📂uploads
 ┃ ┃ ┗ 📜books_per_person_by_age.html
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┃ ┗ 📜Auth.js
 ┃ ┃ ┣ 📂assets
 ┃ ┃ ┃ ┣ 📂fonts
 ┃ ┃ ┃ ┗ 📂icons
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┃ ┗ 📜AuthModal.js
 ┃ ┃ ┃ ┣ 📂board
 ┃ ┃ ┃ ┃ ┗ 📜CommentSection.js
 ┃ ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┃ ┗ 📜DefaultModal.js
 ┃ ┃ ┃ ┣ 📂edit
 ┃ ┃ ┃ ┃ ┗ 📜EditInfo.js
 ┃ ┃ ┃ ┣ 📂main
 ┃ ┃ ┃ ┃ ┗ 📜ClickStar.js
 ┃ ┃ ┃ ┣ 📂mypage
 ┃ ┃ ┃ ┃ ┗ 📜BookMarkList.js
 ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┗ 📜AddInfo.js
 ┃ ┃ ┗ 📜App.js
 ┃ ┣ 📜.eslintrc.json
 ┃ ┗ 📜.prettierrc
 ┗ 📂server
 ┃ ┣ 📂controllers
 ┃ ┃ ┗ 📜authController.js
 ┃ ┣ 📂data
 ┃ ┃ ┗ 📜libraries.csv
 ┃ ┣ 📂middlewares
 ┃ ┃ ┗ 📜checklogin.js
 ┃ ┣ 📂models
 ┃ ┃ ┣ 📂types
 ┃ ┃ ┃ ┗ 📜short-id.js
 ┃ ┃ ┗ 📜commentSchema.js
 ┃ ┣ 📂passport
 ┃ ┃ ┣ 📂strategies
 ┃ ┃ ┃ ┗ 📜google.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂routes
 ┃ ┃ ┗ 📜authRoutes.js
 ┃ ┣ 📂services
 ┃ ┃ ┗ 📜authService.js
 ┃ ┣ 📂utils
 ┃ ┃ ┗ 📜revokeToken.js
 ┃ ┣ 📜.env
 ┃ ┣ 📜importMap.js
 ┃ ┣ 📜swagger.js
 ┃ ┗ 📜server.js
 ┣ 📜.gitignore
 ┗ 📜README.md
```

## :star: 프로젝트 기능
- Intro
  - 연령대 별 독서 인구, 서울시 독서문화 실태 조사, 서울시 공공 도서관 방문율 그래프화
- 유저
  - 로그인, 회원가입 + 구글 로그인
  - 아이디, 비밀번호 찾기
  - 비밀번호 변경
  - 회원 탈퇴
- 메인페이지
  - 서울시 도서관, 공원 정보 제공 (카카오맵 API)
  - 서울시 대기 정보 제공 (스케줄러를 이용해 매일 오전 6시에 업데이트)
  - 장소별 즐겨찾기, 리뷰 
- 내 주변 도서관
  - 설정한 동네에 해당하는 도서관, 공원 정보 및 리뷰 제공
- 도서 정보
  - 도서관별 보유 도서 수 및 인기 도서 순위 제공
- 게시판
  - 서평, 독서 프로그램 참여, 추천 장소, 도서 추천 등 커뮤니티 공간 제공
- 갤러리
  - 추천 독서 장소들의 이미지와 위치 정보를 갤러리화하여 제공
- 마이페이지
  - 내가 쓴 글, 댓글 목록 및 해당 게시물로 이동, 삭제
  - 즐겨찾기한 장소 확인 및 미니 지도 제공
  - 내가 쓴 리뷰 확인 및 삭제
  - 프로필 편집


## :computer: 페이지 구성

|Intro|데이터 분석|그래프|
|:----:|:----:|:----:|
|<img width="240" height="140" alt="1" src="https://github.com/nagyeongyun/BookCompass/assets/72790695/12377328-21b5-469a-bb91-919f0d2df1d2">|<img width="240" height="140" alt="2" src="https://github.com/nagyeongyun/BookCompass/assets/72790695/be18d6f2-580b-4861-93fb-5bf1b93d062d">|<img width="240" height="140" alt="3" src="https://github.com/nagyeongyun/BookCompass/assets/72790695/c595cb51-265d-470d-89e1-c3e3f37a2915">|
|**로그인**|**회원가입**|**비밀번호 변경**|
|<img width="240" height="140" alt="1" src="https://github.com/nagyeongyun/BookCompass/assets/72790695/72baca35-ed00-4228-af7a-5c107c81c786">|<img width="240" height="140" alt="3" src="https://github.com/nagyeongyun/BookCompass/assets/72790695/844f053a-589f-4010-8274-c201b29e8469">|<img width="240" height="140" alt="3" src="https://github.com/nagyeongyun/BookCompass/assets/72790695/318f0b84-d3fc-4ad6-bb1b-47f7eff32315">|
|**메인 - 도서관**|**매인 - 공원**|**메인 - 리뷰, 즐겨찾기**|
|<img width="240" height="140" alt="1" src="https://github.com/nagyeongyun/BookCompass/assets/72790695/b98ba1e6-0200-49d3-a32c-99cbc0879289">|<img width="240" height="140" alt="3" src="https://github.com/nagyeongyun/BookCompass/assets/72790695/5b4f3a02-89ff-419a-94ae-e77205facb04">|<img width="240" height="140" alt="3" src="https://github.com/nagyeongyun/BookCompass/assets/72790695/243fb3b0-cfa5-4e0e-b2a1-129861823a56">|
|**내 주변 도서관**|**도서 정보**|**갤러리**|
|<img width="240" height="140" alt="1" src="https://github.com/nagyeongyun/BookCompass/assets/72790695/6f8e466e-3439-4aad-ac18-9f4e93b3533e">|<img width="240" height="140" alt="3" src="https://github.com/nagyeongyun/BookCompass/assets/72790695/723af70d-938e-49fd-bf8a-8616d2208b7f">|<img width="240" height="140" alt="3" src="https://github.com/nagyeongyun/BookCompass/assets/72790695/7f8478bf-d94f-4a5b-a38d-2acd4d027cb7">|
|**게시판**|**게시물 보기**|**글쓰기**|
|<img width="240" height="140" alt="1" src="https://github.com/nagyeongyun/BookCompass/assets/72790695/1255ce5d-aec7-4139-829a-f9fae84897e0">|<img width="240" height="140" alt="3" src="https://github.com/nagyeongyun/BookCompass/assets/72790695/c3afaf41-1c42-404e-a62f-d725b9177a60">|<img width="240" height="140" alt="3" src="https://github.com/nagyeongyun/BookCompass/assets/72790695/bb7b3380-1bcf-4500-8eec-ba597232c7ff">|
|**마이페이지**|**즐겨찾기한 장소 보기**|**개인 정보 수정**|
|<img width="240" height="140" alt="1" src="https://github.com/nagyeongyun/BookCompass/assets/72790695/a1794bcf-b504-48d1-9765-f2f17d7192c6">|<img width="240" height="140" alt="3" src="https://github.com/nagyeongyun/BookCompass/assets/72790695/a2aec959-e592-4597-9308-9c052a3b1491">|<img width="240" height="140" alt="3" src="https://github.com/nagyeongyun/BookCompass/assets/72790695/0eaf7644-5b82-44b1-87e7-7a42d16bda9f">|


