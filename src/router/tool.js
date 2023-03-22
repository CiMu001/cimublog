// 半自动加载Tool文档路由
const toolRoute = [];
const tools = [
    {
        name: 'HoverBoard.vue',
        path: 'hoverBoard'
    },{
        name: 'NoteApp.vue',
        path: 'noteapp'
    },{
        name: 'StringGenerator.vue',
        path: 'stringGenerator'
    },{
        name: 'TodoList.vue',
        path: 'todoList'
    },{
        name: 'BulletChat.vue',
        path: 'bulletChat'
    },{
        name: 'AnimatedCountdown.vue',
        path: 'countdown'
    },{
        name: 'DrawingApp.vue',
        path: 'drawing'
    },{
        name: 'ThemeClock.vue',
        path: 'clock'
    },{
        name: 'DrinkWater.vue',
        path: 'drink'
    },{
        name: 'RandomChoice.vue',
        path: 'randomChoice'
    },{
        name: 'EventKeycode.vue',
        path: 'eventkeycode'
    },
];

tools.forEach(item => {
    toolRoute.push(
        {
            path: `/uselessTool/${item.path}`,
            name: `tool${item.path}`,
            component: () => import('../components/demo/' + item.name),
            meta: { ...item }
        }
    )
})

export default toolRoute
