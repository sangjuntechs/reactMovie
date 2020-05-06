# ReactWeb Project

리액트를 이용한 프로젝트.
2020/05/04 시작.
### `2020/05/04`

리액트 작동 원리를 파악하기 위해 src의 css와 로고 등을 삭제하고 index.js에 div를 삽입.

react는 컴포넌트에서 html소스를 바로 삽입하여 html로 밀어넣는 버츄얼 방식이다.

컴포넌트의 사용법과 jsx에 대한 이해.

app.js에 array형식으로 컴포넌트를 가져와 사용해봄.
컴포넌트의 작동 방식에 대한 이해.

컴포넌트는 각각에 대한 key value 즉, 각 다른 개체로 존재해야 한다.

PropType에 대한 이해.

## `2020/05/06`

state에 대한 이해 state는 '동적인 정보'를 사용할
때 효과적 즉 변하는 정보를 사용
'render' method를 통해 그 것을 호출
state는 그대로 직접적으로 사용하 지 않고 setState를 통해 state안의 정보를 호출한다.

mount update unmount
axious의 사용 : npm에서 다운로드 해야함.

async await 비동기에 대한 이해

movie.js 오류 찾아야함 오후 06:03

movie.js 8줄에 Movie.proptypes 에서 Proptypes의 오타가 존재했음.
같은 실수를 했었으므로 주의 필요. fix bug compelete


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
