# presentation-react-server-side-rendering

progression:

- no server side
- basic server side
- lifecycle
- redux - basic
- redux - preloaded state
- redux - circular json
- router - basic
- router - redux

elements to tweak

- server/index.js - server entrypoint
- client/src/index.js - client entrypoint
- client/src/component/App/index.js - App component, used both on the client and on the server side
- client/src/redux/reducers/profile/index.js - circular initialstate on reducer

### build

```yarn build```

### run

```yarn nodemon server/dist```