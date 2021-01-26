/* 
** gallery data module holds array for all gallery pages 
** the array holds objects with the following fields
** topIcon: for the top icons for displayed main gallery item
** galleryType: to specify where to classify the item into either "main" or "series" e.t.c
** title: for setting the item title
** poster: for the poster image rather backgrund image of the item
*/
const GalleryData = [
    {
        topIcon: "igTv",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.fabb1-1.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/140364101_249357796584178_4544463485876182292_n.jpg?_nc_ht=instagram.fabb1-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=hQlg67smabsAX-P8_PH&tp=1&oh=7ed2179dac02460d93394d1debe7cd11&oe=603657CD"
    },
    {
        topIcon: "collection",
        galleryType: ["main", "series"],
        title: "DJ Herself",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/139015123_135962201593325_1543394052460518995_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=jKxFJVtZ6iwAX-LP8D2&tp=1&oh=7b787b1fc2c251d22015041d129a4520&oe=60334E01"
    },
    {
        topIcon: "igVideo",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.fabb1-1.fna.fbcdn.net/v/t51.2885-15/e35/p320x320/140926895_101369001909299_4225991968117081073_n.jpg?_nc_ht=instagram.fabb1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=a4AiCgC3Q2gAX_a4Rl0&tp=1&oh=5819019dabdb84b09515f30cfe2984d8&oe=600F0FEC"
    },
    {
        topIcon: "igTv",
        galleryType: ["main", "series"],
        title: "Partyy",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.139.359.359a/139462761_475204140547876_3448222339634125732_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=J7bXSaHh6gUAX9-L5HC&tp=1&oh=e24f6f6dc378d61446a3da922f1acd95&oe=600C766E"
    },
    {
        topIcon: "",
        galleryType: ["main", "series"],
        title: "Blue Dress",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/138593252_857643878410082_3669767356566162358_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=ja5B_U_IikYAX8ReCpI&tp=1&oh=e1e9d06d127991fa5d88b26e4efbdc95&oe=60322D65"
    },
    {
        topIcon: "igTv",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.168.432.432a/137701036_734287564184888_3496908501792717421_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=WuYnEH1G1BYAX-hKnjE&tp=1&oh=98f6949416406516a86e0edd9a0cb44d&oe=600CEA85"
    },
    {
        topIcon: "",
        galleryType: ["main", "series"],
        title: "Look At Me",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.76.1440.1440a/s640x640/137354429_1041158329684007_8180348977112567208_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=tp-dGFWlRuwAX_zPLog&tp=1&oh=8d59f7d7e334738718ac780319849191&oe=6035B666"
    },
    {
        topIcon: "collection",
        galleryType: ["main", "series"],
        title: "BooM",
        poster: "https://instagram.fabb1-1.fna.fbcdn.net/v/t51.2885-15/e35/p320x320/140926895_101369001909299_4225991968117081073_n.jpg?_nc_ht=instagram.fabb1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=a4AiCgC3Q2gAX_a4Rl0&tp=1&oh=5819019dabdb84b09515f30cfe2984d8&oe=600F0FEC"
    },
    {
        topIcon: "igVideo",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.280.720.720a/s640x640/136767123_722503141728195_3783077729476995597_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=LljOh_hgJOMAX-R8bh7&tp=1&oh=ad9fc179324bb56a9fac394392c28ed0&oe=600CBD88"
    },
    {
        topIcon: "",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/139015123_135962201593325_1543394052460518995_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=jKxFJVtZ6iwAX-LP8D2&tp=1&oh=7b787b1fc2c251d22015041d129a4520&oe=60334E01"
    },
    {
        topIcon: "igVideo",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/135848911_1346648132346994_3636296591547385559_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=0442pOQAGU8AX_aoyc2&tp=1&oh=cb79fac67738961566db9076a0f55784&oe=600CD951"
    },
    {
        topIcon: "collection",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.fabb1-1.fna.fbcdn.net/v/t51.2885-15/e35/p320x320/140926895_101369001909299_4225991968117081073_n.jpg?_nc_ht=instagram.fabb1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=a4AiCgC3Q2gAX_a4Rl0&tp=1&oh=5819019dabdb84b09515f30cfe2984d8&oe=600F0FEC"
    },
    {
        topIcon: "igVideo",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.90.720.720a/s640x640/135511922_431158081363081_7702050377198840745_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=NyBu9f22CFsAX9VWeZJ&tp=1&oh=c3d8580681b374c7f136b64100120ddd&oe=600C773A"
    },
    {
        topIcon: "",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/135415180_404939590847953_8556570008455314741_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=txrqGCA_AFUAX8Z30Gr&tp=1&oh=a81919d2e1c8efda445ac3a3537b235c&oe=6033BC1F"
    },
    {
        topIcon: "collection",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/134951801_1049388818808073_7113538822731771454_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=pPkiOBNXY4QAX_hHHkj&tp=1&oh=9154cc60a53d77b4e9f05b35c37ab214&oe=60355656"
    },
    {
        topIcon: "igVideo",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.89.720.720a/s640x640/135089706_1705643109602306_7604280592461648642_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=g6gk-aVbmS8AX-JLU-E&tp=1&oh=3a23535c558c969b19c4f18f03c6435b&oe=600CA681"
    },
    {
        topIcon: "",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/134813935_1059139117904396_3705264481268280813_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=tsV4QKH4S3cAX87YDle&tp=1&oh=e4eaaa4ecb48c4e06c59be15d86ae327&oe=6032A304"
    },
    {
        topIcon: "",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/133981015_120731743223092_1649435989874931921_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=f7JzD0t2OwMAX-IkGrW&tp=1&oh=36a5cdae2c91aec9eca33167a1082fbe&oe=603507FB"
    },
    {
        topIcon: "",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/134138201_825184014993718_7622634939633892469_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=cXkTN3up720AX-EW28w&tp=1&oh=b15ecd176599c53c0b31c0ee91c36677&oe=60323B80"
    },
    {
        topIcon: "",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c180.0.1080.1080a/s640x640/133730963_406929983878050_9142073904437761341_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=z0JLz02neWoAX8-DSGj&tp=1&oh=574f217016c26e1ad7f40b7374096d7a&oe=6034BD88"
    },
    {
        topIcon: "",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/133468791_154041746171511_1384411837026668473_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=-eJqTy_BZNkAX_0zc_A&tp=1&oh=c4f29ed05a9c5469ba3af916a600b934&oe=6033180C"
    },
    {
        topIcon: "",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/133207029_2710777355839281_2116130757896783166_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=r_hw_kJYwEUAX-tgo64&tp=1&oh=974dd536d8e7faa466d50905d0048fa2&oe=6032D5F6"
    },
    {
        topIcon: "",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/133197757_443366096801108_4397852971542647831_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=l9Hz2Q2Sk-cAX-mKvqB&tp=1&oh=9ee270da183989e4b9c8f4ca387711bc&oe=6034FD85"
    },
    {
        topIcon: "",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/132644729_857516618402467_4850321599656503821_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=c-Ot9m4eFmQAX-lEiS4&tp=1&oh=7875699268b14e4457e01390d110b102&oe=60354ECC"
    },
    {
        topIcon: "",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.118.944.944a/s640x640/132811010_2100085596795695_4535128344938177180_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=O6t2yMjLPFQAX_YPsLr&tp=1&oh=0cb5411cf219e10bd3dae434fa03a5e7&oe=6032FDFC"
    },
    {
        topIcon: "",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c180.0.1080.1080a/s640x640/132280794_204874961300828_3805254528904586847_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=BZ6lwZyD9dwAX_P-q5W&tp=1&oh=d15003e093910e5c9512a9084e9f9dab&oe=60326753"
    },
    {
        topIcon: "",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/132207642_408768903666353_7926101004681768073_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=J0eWFfUoqbkAX9chhBu&tp=1&oh=13534bb7e7d699559fd499592163e817&oe=60321CC0"
    },
    {
        topIcon: "igVideo",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.90.720.720a/s640x640/132270729_175206621016684_5603223180688022073_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=RLKvn2jcTlQAX8Tp2PE&tp=1&oh=af59e47e19f8d7d5f873584f4982e949&oe=600C7FB9"
    },
    {
        topIcon: "",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.155.1440.1440a/s640x640/132013324_2789736464634413_4005638657409075943_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=w2p3EXLKj5gAX9t0vGj&tp=1&oh=885d7b81de0d380d738e4bc5bde63582&oe=603419E5"
    },
    {
        topIcon: "",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c2.0.1435.1435a/s640x640/132002543_899235987486530_8550501275049904556_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Y8l8Iz-UJ90AX-syftQ&tp=1&oh=864db4b5a0032cdf05358cf53f38aea3&oe=60320560"
    },
    {
        topIcon: "",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.57.1440.1440a/s640x640/131691841_1083455662127144_5991546007907550322_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=Y0xDT-RrUR4AX8QzEdh&tp=1&oh=e2f33445e3a69e4c840451eeab1c1a5d&oe=603206BA"
    },
    {
        topIcon: "",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c180.0.1080.1080a/s640x640/131472032_1337943356568015_2469901044723205317_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=Unuw91ydFVEAX-knxSe&tp=1&oh=cab678e882bfa9b086fd58694b0ae4c7&oe=60329045"
    },
    {
        topIcon: "igVideo",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/e35/c157.0.405.405a/131890984_428360571547161_4395222842192976334_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=QvhKaYWi8QUAX9UPIrG&tp=1&oh=be3eed49110dfd9a6ce142fa3f1f2f0b&oe=600CE422"
    },
    {
        topIcon: "igVideo",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/131515955_387195899012662_3293085336675243735_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=fhUdRRV39kYAX-NUUTg&tp=1&oh=392509c45524c6be13c8eb5ae7e67d64&oe=600C96DB"
    },
    {
        topIcon: "",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/131887701_119506409986565_7512139942511466568_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LpIMDawW3UgAX8HG58y&tp=1&oh=eec78625ab0872016c2e2584afe6f3a9&oe=603311DD"
    },
    {
        topIcon: "igVideo",
        galleryType: ["main"],
        title: "",
        poster: "https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/131692949_854520572039462_1749823687174486862_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=qJH2qz1-QXAAX-qSvC2&tp=1&oh=3b87bdd4d6ebd33fdac573c85bf0bc98&oe=600C9EFD"
    }
  ];
  
  export default GalleryData;