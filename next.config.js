// module.exports = {
//     async rewrites() {
//         return [
//             {
//                 source: '/',
//                 destination: '/about',
//             },
//         ];
//     },
// };


module.exports = {
    async rewrites() {
        return [
            {
                source: '/about',
                destination: '/pages/about/index',
            },
            {
                source: '/contact',
                destination: '/pages/contact/index',
            },
            {
                source: '/portfolio',
                destination: '/pages/portfolio/index',
            },
            {
                source: '/resume',
                destination: '/pages/resume/index',
            }
        ]
    }
};