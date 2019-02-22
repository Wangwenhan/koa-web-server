export default [{
    name: 'authenticate',
    method: 'POST',
    desc: '登录',
    path: '/user/login',
    mockPath: '/user/login',
    params: {},
    options: {
        unSignature: true
    }
}, {
    name: 'register',
    method: 'POST',
    desc: '注册',
    path: '/user/register',
    mockPath: '/user/register',
    params: {},
    options: {
        unSignature: true
    }
}]