# node_boilerplate

보일러 플레이트
구태의연 하게 항상 하는 것
nodejs 이전에는 브라우저에서만
expressjs nodejs 쉽게 시작 프레임워크 중 하나

# npm i express mongoose

model > schema

#unstaging

# git rm --cached node_modules -r

//github local connect to remote
secureshell ssh
https://docs.github.com/en/authentication/connecting-to-github-with-ssh
key gen
ssh agent on
ssh key add to agent

# npm i body-parser --save

mongo test
brew install mongosh
mongosh "mongodb+srv://cluster0.sqdrj.mongodb.net/myFirstDatabase" --username [userId]

# npm i nodemon --save-dev

---

heroku : platform service, it's run above aws
= aws.elastic beanstalk
컨트롤 : aws more than heroku
시간 : heroku
비용 : aws

---

# npm i bcrypt --save

save 전 mongo model 에 전처리로 암호화

# https://www.npmjs.com/package/bcrypt

# npm i jsonwebtoken --save

# npm i cookie-parser --save

---

react는 프레임워크가 아닌 라이브러리, 2013 facebook
components 모듈과 유사하게 재사용성 우수
virtual dom, real dom과 달리 바뀐 것만 update, virtual dom의 snapshot 기준 increment 만 real dom에서 update

babel es5 문법으로 변환
webpack 복잡한 구조를 번들링 flatten

mkdir server < backend 모두 이동
mkdir client < npx create-react-app .
if err occur : c compirer install, googling

npm : node package manager : 라이브러리 저장 역할, 빌드 npm run build
-g 아니면 모두 local down

npx : npm registry 에서 바로 이용 찾아서lookup 다운없이 실행 시켜 줌, 이전 npm install -g create-react-app
diskspace 절약, 항상 최신 버전
client 디렉토리에서 npm run start

메인페이지 구성
index.js <App/> 임포트해서 렌더링 해준 것 > elementId root > index.html. div element

webpack 관리 src 하위만, (public은 아님), 이미지 같은 것 src 하위에 넣을 것

mkdir and <structure detail>
actions, reducer : for Redux
components/view/LandingPage,LoginPage,NavBar,RegisterPage,Footer : for Page
components/view/Sections : css, component
App.js : Routing 처리
Config.js : 환경변수
Auth(hoc) : 해당유저 권환체크 해당 component로 가기 전 체크
hoc, utils : Higher Order omponent, 여러 곳에서 사용하는 것

삭제:App.test.js, logo.svg

extension react snippet install

페이지간 이동시 react router dom 을 사용
https://reacttraining.com/
https://v5.reactrouter.com/web/example/basic

cd client
npm i react-router-dom --save

npm run start
App.js , switch not exported issue, 현재 버전v6, 참고사이트 버전 v5
npm uninstall react-router-dom
npm install react-router-dom@5

refactoring
<Route path="/register">
<RegisterPage />
</Route>

<Route exact path="/register" component={RegisterPage} />

---

jquery 사용할때 ajax http service
/client npm i axios --save

cors
cross origin resource sharing
다른 도메인 통신 경우(포트 포함)

각 소스에 cors 정책 or Proxy 로 해결
https://create-react-app.dev/docs/proxying-api-requests-in-development/

---

Configuring the Proxy Manually#
$ npm install http-proxy-middleware --save
$ # or
$ yarn add http-proxy-middleware
Next, create src/setupProxy.js and place the following contents in it:

Copy
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
// ...
};

---

but it is not working
delete the file, and setting proxy in package.json file

proxy server: 중간 인터넷 접속 제어 / 캐쉬이용 빠른 인터넷 / 보안 제공 / 이용제한 사이트 접근 가능

---

concurrently: back front on at once
in server dir
npm install concurrently --save
package json 기동할 곳(aerver)에서 script 추가
"devcon":"concurrently \"npm run back\" \"npm run start --prefix ../client\""

---

css framework
material ui / react bootstrap / semantic ui / ant design / materialize
추천
https://ant.design - 단점: 용량이 크다, 스타일 깔끔, 엔터프라이즈 환경적 디자인, 편하다
https://ant.design/docs/react/getting-started

in client dir
npm i antd --save
index.js < import "antd/dist/antd.css";

---

# redux?

redux 상태state관리 라이브러리
state container?
props :property, 컨포넌트간 연결, 부모>자식 단방향만, immutable 부모에서 자식으로 내렸을 때 값 바뀔 수 없다 다시 내려줘야 함
형식 <Test messages={messages}/>
state :mutable 값 변경 가능, 값 변경시 리렌더링됨
형식 state={message:''}

redux가 없으면 산발적으로 state를 주고 받아야 하지만, redux에서 한 곳에 보관 관리 해줌
결과적으로 없을 때는 component 변경된 상태를 한단계씩 이동하여 주고 받아야 하지만, redux store에서 바로 접근 할 수 있도록 해준다.
redux 데이터 플로우 : action-reducer-store-react component-action...
:strict unidirectinal 단방향
reducer:이전state와 action obj 받은 후 nextstate를 return
store :state를 랩핑, 여러 state관리 매서드 제공

---

#redux install
in client
npm i redux react-redux redux-promise redux-thunk --save

promise, thunk : 미들웨어, 잘 쓰도록 도와줌
store 안의 state를 변경 dispatch.action 객체 형식 plainobject 일반reduxstore/ promise > redux-promise/ functions >redux-thunk

##reduxup부터 install은 됨
redux 연결 : index.js Provider import, wrapping

reducer 세팅
redux devTools chrome extension install

store의 변하는 값 마지막에 반환하는 것이 reducer, 각 state별로 존재
combinereducer는 root reducer에서 하나로 합쳐줌 : \_reducers\.index.js

---

react & reacthook,
class components:더 많은 기능, 코드복잡, 성능 느림
& functional components:기능은 한정, 코드 간단, 성능 향상
react 16.8 hook 이후 functional component에서도 라이프사이클 등 기능 쓸 수 있게 됨

functional : const[a,b]=useState("") / useEffect()

class : constructor(props) / componentDidMount()
실행순서constrctor render componentDidmount

---

## 원래 로그인 formik yup 사용하면 더 다이나믹해짐

---

## 참고 react:생태계 vs vue:쉬움, 문법 간단
