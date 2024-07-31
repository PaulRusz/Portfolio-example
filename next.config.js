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
                destination: '/pages/about/index.js',
            },
            {
                source: '/contact',
                destination: '/pages/contact/index.js',
            },
            {
                source: '/portfolio',
                destination: '/pages/portfolio/index.js',
            },
            {
                source: '/resume',
                destination: '/pages/resume/index.js',
            }
        ]
    }
};