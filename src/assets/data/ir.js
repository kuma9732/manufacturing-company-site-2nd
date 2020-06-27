const database =  [
    {
        id: 0,
        date: '2020年02月15日',
        title: '四半期報告書（2020年３月期第３四半期）',
    },
]

export default {
    fetch() {
        return database
    },
    find(id) {
        return database.find(el => el.id === id)
    },
    asyncFind(id, callback) {
        callback(database.find(el => el.id === id))
    }
}