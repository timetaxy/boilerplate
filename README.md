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
