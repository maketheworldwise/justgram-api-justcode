# justgram-api-justcode

> 인스타그램에서 이용되고 있는 데이터의 구조를 생성하고, API 엔드포인트를 만들어 클라이언트에게 전달하는 과정을 구성하는 프로젝트이며, 습득한 개발 지식을 실제로 적용해보는 과정을 통해 웹개발 지식과 실제 개발이 이루어지는 과정을 동기화하는 과제

## 🚀 Mission 1

**유저 회원가입 하기**

<details>
<summary>과제 설명</summary>
<div markdown="1">
<br>

- Node.js에서 제공하는 built-in 모듈인 http를 사용해서 API를 구현
- app.js라는 파일을 만들고, JUSTGRAM 회원들의 정보를 저장할 수 있는 배열(users)과, 회원들이 작성한 게시물을 저장할 수 있는 배열(posts)을 파일 상단에 작성

```javascript
// app.js

const users = [];
const posts = [];
```

- 위에서 선언한 빈 배열에 미션 진행에 필요한 테스트 데이터를 추가

```javascript
// app.js

const users = [
  {
    id: 1,
    name: "Rebekah Johnson",
    email: "Glover12345@gmail.com",
    password: "123qwe",
  },
  {
    id: 2,
    name: "Fabian Predovic",
    email: "Connell29@gmail.com",
    password: "password",
  },
];

const posts = [
  {
    id: 1,
    title: "간단한 HTTP API 개발 시작!",
    content: "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
    userId: 1,
  },
  {
    id: 2,
    title: "HTTP의 특성",
    content: "Request/Response와 Stateless!!",
    userId: 1,
  },
];
```

- 알맞은 API 호출 URL을 설정하여서 클라이언트와(httpie/postman) 통신을 성공하도록 구성
- 데이터를 새롭게 저장하는 요청을 보낼때는 http method 중에 POST를 사용

```sh
$ http -v POST 127.0.0.1:8000
```

- 알맞은 http 메소드를 선정하여서 유저의 정보를 백엔드 서버에 전달
- 전달받은 데이터를 users 배열에 추가해서 회원정보를 API 시스템 내에 저장한 후에, 생성됬을 때에 알맞는 http 상태코드를 반환
- http response로 반환하는 JSON 데이터의 형태가 다음과 같은 구조 구성

```json
{
  "message": "userCreated"
}
```

</div>
</details>

## 🚀 Mission 2

**게시글 등록하기**

<details>
<summary>과제 설명</summary>
<div markdown="1">
<br>

- 알맞은 API 호출 URL을 설정하여서 클라이언트와(httpie/postman) 통신을 성공하도록 구성
- 데이터를 새롭게 저장하는 요청을 보낼때는 http method 중에 POST를 사용

```sh
$ http -v **POST** 127.0.0.1:8000
```

- 알맞은 http 메소드를 선정하여서 게시글 내용 및 유저의 id 값을 백엔드 서버에 전달
- 전달받은 데이터를 posts 배열에 추가해서 게시물 정보를 API 시스템 내에 저장한 후에, 생성됬을 때에 알맞는 http 상태코드를 반환
- http response로 반환하는 JSON 데이터의 형태가 다음과 같은 구조를 갖도록 구성

```json
{
  "message": "postCreated"
}
```

</div>
</details>

## 🚀 Mission 3

**게시글 목록 조회하기**

<details>
<summary>과제 설명</summary>
<div markdown="1">
<br>

- 알맞은 API 호출 URL을 설정하여서 클라이언트와(httpie/postman) 통신을 성공하도록 구성
- 조회 요청을 보낼때는 http method 중에 GET을 사용

```sh
$ http -v GET 127.0.0.1:8000
```

- 데이터가 호출될 때의 알맞는 http 상태코드를 반환
- http response로 반환하는 데이터의 형태가 다음과 같은 구조를 갖도록 구성

```json
{
  "data" : [
    {
      "userID"           : 1,
      "userName"         : "Rebekah Johnson"
      "postingId"        : 1,
      "postingTitle"     : "간단한 HTTP API 개발 시작!",
      "postingContent"   : "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현."
    },
    {
      "userID"           : 2,
      "userName"         : "Fabian Predovic"
      "postingId"        : 2,
      "postingTitle"     : "HTTP의 특성",
      "postingContent"   : "Request/Response와 Stateless!!"
    },
    {
      "userID"           : 3,
      "userName"         : "new user 1"
      "postingId"        : 3,
      "postingImageUrl"  : "내용 1",
      "postingContent"   : "sampleContent3"
    },
    {
      "userID"           : 4,
      "userName"         : "new user 2"
      "postingId"        : 4,
      "postingImageUrl"  : "내용 2",
      "postingContent"   : "sampleContent4"
    }
  ]
}
```

</div>
</details>

## 🚀 Mission 4

**게시글 수정하기**

<details>
<summary>과제 설명</summary>
<div markdown="1">
<br>

- 알맞은 API 호출 URL을 설정하여서 클라이언트와(httpie/postman) 통신을 성공하도록 구성
- 업데이트하는 요청을 보낼때는 http method 중에 PATCH를 사용

```sh
$ http -v PATCH 127.0.0.1:8000
```

- posts 배열에 있는 post 객체의 데이터를 수정하고, 데이터가 수정 될 때의 알맞는 http 상태코드를 반환
- postingId가 1번인 게시물의 내용을 “노드”로 수정한다면, http response로 반환하는 데이터의 형태가 다음과 같은 구조를 갖도록 구성

```json
{
  "data": {
    "userId": 1,
    "userName": "Rebekah Johnson",
    "postingId": 1,
    "postingTitle": "간단한 HTTP API 개발 시작!",
    "postingContent": "노드"
  }
}
```

</div>
</details>

## 🚀 Mission 5

**게시글 삭제하기**

<details>
<summary>과제 설명</summary>
<div markdown="1">
<br>

- 알맞은 API 호출 URL을 설정하여서 클라이언트와(httpie/postman) 통신을 성공하도록 구성
- 삭제 요청을 보낼때는 http method 중에 DELETE를 사용

```sh
$ http -v DELETE 127.0.0.1:8000
```

- posts 배열에 담겨 있는 데이터를 삭제하고, 데이터가 삭제 될 때에 알맞는 http 상태코드를 반환
- http response로 반환하는 JSON 데이터의 형태가 다음과 같은 구조를 갖도록 구성

```json
{
  "message": "postingDeleted"
}
```

</div>
</details>

## 🚀 Mission 6

**유저와 게시글 조회하기**

<details>
<summary>과제 설명</summary>
<div markdown="1">
<br>

- 알맞은 API 호출 URL을 설정하여서 클라이언트와(httpie/postman) 통신을 성공하도록 구성
- 하나의 유저가 작성한 여러개의 게시글을 보여주는 상세 페이지용 API를 작성
- 데이터가 호출될 때에 알맞는 http 상태코드를 반환
- 사용자 ID가 1번인 유저 정보를 요청했을 때, Http response로 반환하는 데이터의 형태가 다음과 같은 구조를 갖도록 구성

```json
{
  "data": {
    "userID": 1,
    "userName": "Rebekah Johnson",
    "postings": [
      {
        "postingId": 1,
        "postingName": "간단한 HTTP API 개발 시작!",
        "postingContent": "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현."
      },
      {
        "postingId": 2,
        "postingTitle": "HTTP의 특성",
        "postingContent": "Request/Response와 Stateless!!"
      },
      {
        "postingId": 3,
        "postingName": "새롭게 추가된 포스팅",
        "postingContent": "새롭게 추가된 포스팅 내용"
      }
    ]
  }
}
```

</div>
</details>

---

## 참고

- [nodemon](https://www.npmjs.com/package/nodemon)

---

## Q & A

**Q1) `delete posts[findIndexOfPostToBeDeleted]` 왜 null 값이 남아있을까?**

- `console.log(typeOf posts)` : 객체 (object)
- `delete` :
  - 객체의 property 를 지워주는 기능을 수행
  - 배열 재정리 과정이 없어 배열의 길이가 변경되지 않음.

**Q2) `filter()` vs `splice()` ?**

- filter(), splice() 모두 O(n)의 시간복잡도를 가지기 때문에 차이는 거의 없다고 해도 무방하지만, 벤치마크 상으로는 30% 정도 splice 가 앞선다는 내용 존재
- [Remove object in array using filter and splice which one is best approach in JavaScript?](https://stackoverflow.com/questions/44435141/remove-object-in-array-using-filter-and-splice-which-one-is-best-approach-in-jav/64776462#64776462)
