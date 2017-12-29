const users = [
    {
        id: 0,
        username: 'yuval',
        password: '123456',
        email: 'yuvalgab2007@gmail.com',
        fullName: 'Yuval Gabian',
    }
];

module.exports = {
    create(newUser) {
        users.push({ id: users.length, ...newUser});
    },

    login({ username, password }) {
        const existUser = users.find(u => u.username === username && u.password === password);
        return !!existUser;
    }
};