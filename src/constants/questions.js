const questions = {
    movie: [
        {
            img: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            imgFrom: 'https://www.imdb.com/',
            trailer: 'https://www.youtube.com/watch?v=tGpTpVyI_OQ',
            answers: ['PULP FICTION', 'UCUZ ROMAN'],
            director: 'Quentin Tarantino',
            topCast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson', 'Bruce Willis'],
        },
        {
            img: 'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
            answers: ['SE7EN', 'YEDI', 'SEVEN'],
            descriptions: [
                {
                    name: 'Yönetmen',
                    value: 'David Fincher',
                    isLink: false,
                },
                {
                    name: 'Oyuncular',
                    value: 'Brad Pitt, Morgan Freeman, Gwyneth Paltrow, Kevin Spacey',
                    isLink: false,
                },
                {
                    name: 'Fragman',
                    value: 'https://www.youtube.com/watch?v=znmZoVkCjpI',
                    isLink: true,
                    brand: 'YouTube'
                },
                {
                    name: 'Resim Kaynağı',
                    value: 'https://www.imdb.com/title/tt0114369',
                    isLink: true,
                    brand: 'IMDB',
                },
            ],
        },
        {
            img: 'https://m.media-amazon.com/images/M/MV5BMjE0MTY2MDI3NV5BMl5BanBnXkFtZTcwNTc1MzEzMQ@@._V1_FMjpg_UX1000_.jpg',
            answers: ['G.O.R.A', 'GORA'],
            descriptions: [
                {
                    name: 'Yönetmen',
                    value: 'Ömer Faruk Sorak',
                    isLink: false,
                },
                {
                    name: 'Oyuncular',
                    value: 'Cem Yılmaz, Özge Özberk, Ozan Güven, Şafak Sezer',
                    isLink: false,
                },
                {
                    name: 'Fragman',
                    value: 'https://www.youtube.com/watch?v=UTUiQ9NWZcM',
                    isLink: true,
                    brand: 'YouTube'
                },
                {
                    name: 'Resim Kaynağı',
                    value: 'https://www.imdb.com/title/tt0384116',
                    isLink: true,
                    brand: 'IMDB',
                },
            ],
        },
        {
            img: 'https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000_.jpg',
            answers: ['THE GREEN MILE', 'YEŞIL YOL', 'THE GREEN MILE', 'GREEN MILE'],
            descriptions: [
                {
                    name: 'Yönetmen',
                    value: 'Frank Darabont',
                    isLink: false,
                },
                {
                    name: 'Oyuncular',
                    value: 'Tom Hanks, Michael Clarke Duncan, David Morse',
                    isLink: false,
                },
                {
                    name: 'Fragman',
                    value: 'https://www.youtube.com/watch?v=Bg7epsq0OIQ',
                    isLink: true,
                    brand: 'YouTube'
                },
                {
                    name: 'Resim Kaynağı',
                    value: 'https://www.imdb.com/title/tt0120689',
                    isLink: true,
                    brand: 'IMDB',
                },
            ],
        },
        {
            img: 'https://m.media-amazon.com/images/M/MV5BNzg4MjQxNTQtZmI5My00YjMwLWJlMjUtMmJlY2U2ZWFlNzY1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg',
            answers: ['STAR WARS', 'YILDIZ SAVAŞLARI'],
            descriptions: [
                {
                    name: 'Yönetmen',
                    value: 'George Lucas',
                    isLink: false,
                },
                {
                    name: 'Oyuncular',
                    value: 'Mark Hamill, Harrison Ford, Carrie Fisher, Alec Guinness',
                    isLink: false,
                },
                {
                    name: 'Fragman',
                    value: 'https://www.youtube.com/watch?v=vZ734NWnAHA',
                    isLink: true,
                    brand: 'YouTube'
                },
                {
                    name: 'Resim Kaynağı',
                    value: 'https://www.imdb.com/title/tt0076759',
                    isLink: true,
                    brand: 'IMDB',
                },
            ],
        },
        {
            img: 'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
            answers: ['BACK TO THE FUTURE', 'GELECEĞE DÖNÜŞ'],
            descriptions: [
                {
                    name: 'Yönetmen',
                    value: 'Robert Zemeckis',
                    isLink: false,
                },
                {
                    name: 'Oyuncular',
                    value: 'Michael J. Fox, Christopher Lloyd',
                    isLink: false,
                },
                {
                    name: 'Fragman',
                    value: 'https://www.youtube.com/watch?v=qvsgGtivCgs',
                    isLink: true,
                    brand: 'YouTube'
                },
                {
                    name: 'Resim Kaynağı',
                    value: 'https://www.imdb.com/title/tt0088763',
                    isLink: true,
                    brand: 'IMDB',
                },
            ],
        },
        {
            img: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
            answers: ['INTERSTELLAR', 'YILDIZLARARSI'],
            descriptions: [
                {
                    name: 'Yönetmen',
                    value: 'Christopher Nolan',
                    isLink: false,
                },
                {
                    name: 'Oyuncular',
                    value: 'Matthew McConaughey, Anne Hathaway, Jessica Chastain, Mackenzie Foy',
                    isLink: false,
                },
                {
                    name: 'Fragman',
                    value: 'https://www.youtube.com/watch?v=zSWdZVtXT7E',
                    isLink: true,
                    brand: 'YouTube'
                },
                {
                    name: 'Resim Kaynağı',
                    value: 'https://www.imdb.com/title/tt0816692',
                    isLink: true,
                    brand: 'IMDB',
                },
            ],
        },
        {
            img: 'https://m.media-amazon.com/images/M/MV5BMzkyZGFlOWQtZjFlMi00N2YwLWE2OWQtYTgxY2NkNmM1NjMwXkEyXkFqcGdeQXVyNjY1NTM1MzA@._V1_.jpg',
            answers: ["HARRY POTTER AND THE SORCERER'S STONE", "HARRY POTTER VE FELSEFE TAŞI"],
            descriptions: [
                {
                    name: 'Yönetmen',
                    value: 'Chris Columbus',
                    isLink: false,
                },
                {
                    name: 'Oyuncular',
                    value: 'Daniel Radcliffe, Rupert Grint, Emma Watson ',
                    isLink: false,
                },
                {
                    name: 'Fragman',
                    value: 'https://www.youtube.com/watch?v=VyHV0BRtdxo',
                    isLink: true,
                    brand: 'YouTube'
                },
                {
                    name: 'Resim Kaynağı',
                    value: 'https://www.imdb.com/title/tt0241527',
                    isLink: true,
                    brand: 'IMDB',
                },
            ],
        },
    ],
    music: [
        {
            img: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            imgFrom: 'https://www.imdb.com/',
            trailer: 'https://www.youtube.com/watch?v=tGpTpVyI_OQ',
            answers: ['PULP FICTION', 'UCUZ ROMAN'],
            director: 'Quentin Tarantino',
            topCast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson', 'Bruce Willis'],
        },
        {
            img: 'https://i.scdn.co/image/ab67616d0000b2737c05e69390ab7c628a83cee7',
            answers: ['METALLICA'],
            descriptions: [
                {
                    name: 'Albüm',
                    value: '...And Justice For All',
                    isLink: false,
                },
                {
                    name: 'Grup Üyeleri',
                    value: 'James Hetfield, Kirk Hammet, Lars Ulrich, Robert Trujillo',
                    isLink: false,
                },
                {
                    name: 'Albüm Linki',
                    value: 'https://open.spotify.com/album/6Eycw3dwcDMEFSqkUvLQ7g',
                    isLink: true,
                    brand: 'Spotify'
                },
                {
                    name: 'Şarkı Önerisi',
                    value: 'https://open.spotify.com/track/6jv5Og00Okb2IMEHuzNTkV?si=9856ed2d38cf42b9',
                    isLink: true,
                    brand: 'Spotify'
                },
            ],
        },
        {
            img: 'https://i.scdn.co/image/ab67616d0000b273e70bc4d7d71d4bfacb08a088',
            answers: ['BARIŞ MANÇO'],
            descriptions: [
                {
                    name: 'Albüm',
                    value: 'Mançoloji',
                    isLink: false,
                },
                {
                    name: 'Tarz',
                    value: 'Anadolu Rock',
                    isLink: false,
                },
                {
                    name: 'Albüm Linki',
                    value: 'https://open.spotify.com/album/3RHbYmN366gxJKYr1n11Yn',
                    isLink: true,
                    brand: 'Spotify'
                },
                {
                    name: 'Şarkı Önerisi',
                    value: 'https://open.spotify.com/track/3rl9FGvJfdfbaVfHCF7oM2?si=938f508488db48cd',
                    isLink: true,
                    brand: 'Spotify'
                },
            ],
        },
        {
            img: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36',
            answers: ['THE WEEKND', 'WEEKND'],
            descriptions: [
                {
                    name: 'Albüm',
                    value: 'After Hours',
                    isLink: false,
                },
                {
                    name: 'Tarz',
                    value: 'Pop',
                    isLink: false,
                },
                {
                    name: 'Albüm Linki',
                    value: 'https://open.spotify.com/album/4yP0hdKOZPNshxUOjY0cZj',
                    isLink: true,
                    brand: 'Spotify'
                },
                {
                    name: 'Şarkı Önerisi',
                    value: 'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b?si=fd4c0fbf5f9b4fe4',
                    isLink: true,
                    brand: 'Spotify'
                },
            ],
        },
        {
            img: 'https://i.scdn.co/image/ab67616d0000b273ecd10eea07796a0edf4fb609',
            answers: ['EZHEL', 'EZEL', 'AIS EZHEL'],
            descriptions: [
                {
                    name: 'Albüm',
                    value: 'Müptezhel',
                    isLink: false,
                },
                {
                    name: 'Tarz',
                    value: 'Rap',
                    isLink: false,
                },
                {
                    name: 'Albüm Linki',
                    value: 'https://open.spotify.com/album/5mo701EsMb8GFdF4YL3NG8',
                    isLink: true,
                    brand: 'Spotify'
                },
                {
                    name: 'Şarkı Önerisi',
                    value: 'https://open.spotify.com/track/0R0o8uOkDz40XsR6uwThfQ?si=1705f02946b441f5',
                    isLink: true,
                    brand: 'Spotify'
                },
            ],
        },
        {
            img: 'https://i.scdn.co/image/ab67616d0000b2735675e83f707f1d7271e5cf8a',
            answers: ['IMAGINE DRAGONS'],
            descriptions: [
                {
                    name: 'Albüm',
                    value: 'Evolve',
                    isLink: false,
                },
                {
                    name: 'Tarz',
                    value: 'Pop Rock - Elektronik',
                    isLink: false,
                },
                {
                    name: 'Albüm Linki',
                    value: 'https://open.spotify.com/album/33pt9HBdGlAbRGBHQgsZsU',
                    isLink: true,
                    brand: 'Spotify'
                },
                {
                    name: 'Şarkı Önerisi',
                    value: 'https://open.spotify.com/track/1zB4vmk8tFRmM9UULNzbLB?si=59edfe7e2cb04704',
                    isLink: true,
                    brand: 'Spotify'
                },
            ],
        },
        {
            img: 'https://i.scdn.co/image/ab67616d0000b2736ec24cd9406bdeee20a36a4f',
            answers: ['SERDAR ORTAÇ'],
            descriptions: [
                {
                    name: 'Albüm',
                    value: 'Mesafe',
                    isLink: false,
                },
                {
                    name: 'Tarz',
                    value: 'Pop',
                    isLink: false,
                },
                {
                    name: 'Albüm Linki',
                    value: 'https://open.spotify.com/album/0wJbxaUr4FeCXU0gi4kcVa',
                    isLink: true,
                    brand: 'Spotify'
                },
                {
                    name: 'Şarkı Önerisi',
                    value: 'https://open.spotify.com/track/7IExKuaQ33gtHIOYQz6zb6?si=a50a061a9eed430f',
                    isLink: true,
                    brand: 'Spotify'
                },
            ],
        },
        {
            img: 'https://i.scdn.co/image/ab67616d0000b2731d97ca7376f835055f828139',
            answers: ['DAFT PUNK'],
            descriptions: [
                {
                    name: 'Albüm',
                    value: 'Random Access Memories',
                    isLink: false,
                },
                {
                    name: 'Tarz',
                    value: 'Elektronik - Funk',
                    isLink: false,
                },
                {
                    name: 'Albüm Linki',
                    value: 'https://open.spotify.com/album/4m2880jivSbbyEGAKfITCa',
                    isLink: true,
                    brand: 'Spotify'
                },
                {
                    name: 'Şarkı Önerisi',
                    value: 'https://open.spotify.com/track/2cGxRwrMyEAp8dEbuZaVv6?si=98de33043f804408',
                    isLink: true,
                    brand: 'Spotify'
                },
            ],
        }
    ],
    game: [
        {
            img: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            imgFrom: 'https://www.imdb.com/',
            trailer: 'https://www.youtube.com/watch?v=tGpTpVyI_OQ',
            answers: ['PULP FICTION', 'UCUZ ROMAN'],
            director: 'Quentin Tarantino',
            topCast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson', 'Bruce Willis'],
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/tr/b/be/Grand_Theft_Auto_V_oyununun_kapa%C4%9F%C4%B1.jpg',
            answers: ['GTA V', 'GTA 5', 'GTAV', 'GTA5', 'GRAND THEFT AUTO V', 'GRAND THEFT AUTO 5'],
            descriptions: [
                {
                    name: 'Yapımcı',
                    value: 'Rockstar Games',
                    isLink: false,
                },
                {
                    name: 'Yönetmen',
                    value: 'Leslie Benzies, Imran Sarwar',
                    isLink: false,
                },
                {
                    name: 'Fragman',
                    value: 'https://www.youtube.com/watch?v=QkkoHAzjnUs',
                    isLink: true,
                    brand: 'YouTube'
                },
                {
                    name: 'Fiyat',
                    value: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/',
                    isLink: true,
                    brand: 'Steam'
                }
            ],
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/tr/5/53/TheWitcher3-WildHunt.KapakResmi.png',
            answers: ['WITCHER 3', 'WITCHER3', 'WITCHERIII', 'WITHCER III'],
            descriptions: [
                {
                    name: 'Yapımcı',
                    value: 'CD Projekt RED',
                    isLink: false,
                },
                {
                    name: 'Yönetmenler',
                    value: 'Artem Sharipov, Konrad Tomaszkiewicz, Mateusz Kanik, Sebastian Stępień',
                    isLink: false,
                },
                {
                    name: 'Fragman',
                    value: 'https://www.youtube.com/watch?v=c0i88t0Kacs',
                    isLink: true,
                    brand: 'YouTube'
                },
                {
                    name: 'Fiyat',
                    value: 'https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/',
                    isLink: true,
                    brand: 'Steam'
                }
            ],
        },
        {
            img: 'https://www.donanimhaber.com/images/images/haber/137337/1400x1400pubg-nin-yeni-adi-pubg-battlegrounds-oldu.jpg',
            answers: ['PUBG: BATTLEGROUNDS', 'PUBG', 'BABICI'],
            descriptions: [
                {
                    name: 'Yapımcı',
                    value: 'Krafton Game Union',
                    isLink: false,
                },
                {
                    name: 'Yönetmen',
                    value: 'Brendan Greene',
                    isLink: false,
                },
                {
                    name: 'Fragman',
                    value: 'https://www.youtube.com/watch?v=fDLAFIhfFy4',
                    isLink: true,
                    brand: 'YouTube'
                },
                {
                    name: 'Fiyat',
                    value: 'https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/',
                    isLink: true,
                    brand: 'Steam'
                }
            ],
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Subnautica_cover_art.png/220px-Subnautica_cover_art.png',
            answers: ['SUBNAUTICA'],
            descriptions: [
                {
                    name: 'Yapımcı',
                    value: 'Unknown Worlds Entertainment',
                    isLink: false,
                },
                {
                    name: 'Yönetmen',
                    value: 'Charlie Clevelan',
                    isLink: false,
                },
                {
                    name: 'Fragman',
                    value: 'https://www.youtube.com/watch?v=Rz2SNm8VguE',
                    isLink: true,
                    brand: 'YouTube'
                },
                {
                    name: 'Fiyat',
                    value: 'https://store.steampowered.com/app/264710/Subnautica/',
                    isLink: true,
                    brand: 'Steam'
                }
            ],
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Assassin%27s_Creed_Valhalla_cover.jpg/220px-Assassin%27s_Creed_Valhalla_cover.jpg',
            answers: ["ASSASSIN'S CREED VALHALLA", "ASSASSINS CREED VALHALLA", "VALHALLA"],
            descriptions: [
                {
                    name: 'Yapımcı',
                    value: 'Ubisoft',
                    isLink: false,
                },
                {
                    name: 'Yönetmenler',
                    value: 'Ashraf Ismail, Eric Baptizat',
                    isLink: false,
                },
                {
                    name: 'Fragman',
                    value: 'https://www.youtube.com/watch?v=gwMy_fsNkZ0',
                    isLink: true,
                    brand: 'YouTube'
                },
                {
                    name: 'Fiyat',
                    value: 'https://store.epicgames.com/tr/p/assassins-creed-valhalla',
                    isLink: true,
                    brand: 'Epic Games'
                }
            ],
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/tr/thumb/2/2b/Cyberpunk_2077_kutu_foto.jpg/240px-Cyberpunk_2077_kutu_foto.jpg',
            answers: ["CYBERPUNK 2077", "CYBERPUNK"],
            descriptions: [
                {
                    name: 'Yapımcı',
                    value: 'CD Projekt Red',
                    isLink: false,
                },
                {
                    name: 'Yönetmen',
                    value: 'Adam Badowski',
                    isLink: false,
                },
                {
                    name: 'Fragman',
                    value: 'https://www.youtube.com/watch?v=8X2kIfS6fb8',
                    isLink: true,
                    brand: 'YouTube'
                },
                {
                    name: 'Fiyat',
                    value: 'https://store.steampowered.com/app/1091500/Cyberpunk_2077/',
                    isLink: true,
                    brand: 'Steam'
                }
            ],
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/God_of_War_4_cover.jpg/220px-God_of_War_4_cover.jpg',
            answers: ["GOD OF WAR", "GOD OF WAR 2018"],
            descriptions: [
                {
                    name: 'Yapımcı',
                    value: 'Santa Monica Studio',
                    isLink: false,
                },
                {
                    name: 'Yönetmen',
                    value: 'Cory Barlog',
                    isLink: false,
                },
                {
                    name: 'Fragman',
                    value: 'https://www.youtube.com/watch?v=K0u_kAWLJOA',
                    isLink: true,
                    brand: 'YouTube'
                },
                {
                    name: 'Fiyat',
                    value: 'https://store.steampowered.com/app/1593500/God_of_War/',
                    isLink: true,
                    brand: 'Steam'
                }
            ],
        }
    ],
    sport: [
        {
            img: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            imgFrom: 'https://www.imdb.com/',
            trailer: 'https://www.youtube.com/watch?v=tGpTpVyI_OQ',
            answers: ['PULP FICTION', 'UCUZ ROMAN'],
            director: 'Quentin Tarantino',
            topCast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson', 'Bruce Willis'],
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Alexsandro_de_Souza.jpg',
            answers: ['ALEXSANDRO DE SOUZA', 'ALEX DE SOUZA', 'ALEX'],
            descriptions: [
                {
                    name: 'Uyruk',
                    value: 'Brezilya',
                    isLink: false,
                },
                {
                    name: 'Oynadığı Bazı Takımlar',
                    value: 'Cortiba, Fenerbahçe, Palmeiras, Flamengo',
                    isLink: false,
                },
            ],
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LeBron_James_-_51959723161_%28cropped%29.jpg/220px-LeBron_James_-_51959723161_%28cropped%29.jpg',
            answers: ['LEBRON JAMES', 'LEBRON', 'KING JAMES'],
            descriptions: [
                {
                    name: 'Uyruk',
                    value: 'Amerika',
                    isLink: false,
                },
                {
                    name: 'Oynadığı Bazı Takımlar',
                    value: 'Cleveland Cavaliers, Miami Heat, Los Angeles Lakers',
                    isLink: false,
                },
            ],
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Ronaldinho_11feb2007.jpg/170px-Ronaldinho_11feb2007.jpg',
            answers: ['RONALDO DE ASSIS MOREIRA', 'RONALDINHO', 'RONALDINHO GAUCHO'],
            descriptions: [
                {
                    name: 'Uyruk',
                    value: 'Brezilya',
                    isLink: false,
                },
                {
                    name: 'Oynadığı Bazı Takımlar',
                    value: 'Gremio, PSG, Barcelona, Milan',
                    isLink: false,
                },
            ],
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg',
            answers: ['LEWIS CARL DAVIDSON HAMILTON', 'LEWIS HAMILTON', 'HAMILTON'],
            descriptions: [
                {
                    name: 'Uyruk',
                    value: 'Birleşik Krallık',
                    isLink: false,
                },
                {
                    name: 'Takım',
                    value: 'Mercedes-AMG Petronas',
                    isLink: false,
                },
            ],
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Usain_Bolt_Olympics_Celebration.jpg/220px-Usain_Bolt_Olympics_Celebration.jpg',
            answers: ['USAIN ST. LEO BOLT', 'USAIN BOLT', 'USAIN LEO BOLT'],
            descriptions: [
                {
                    name: 'Uyruk',
                    value: 'Jamaika',
                    isLink: false,
                },
                {
                    name: 'Önemli An',
                    value: 'https://www.youtube.com/watch?v=x9M3a88-b7c',
                    isLink: true,
                    brand: 'YouTube'
                },
            ],
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Kevin_De_Bruyne_201807091.jpg/220px-Kevin_De_Bruyne_201807091.jpg',
            answers: ['KEVIN DE BRUYNE', 'DE BRUYNE', 'DEBRUYNE'],
            descriptions: [
                {
                    name: 'Uyruk',
                    value: 'Belçika',
                    isLink: false,
                },
                {
                    name: 'Oynadığı Bazı Takımlar',
                    value: 'Genk, Chelsea, Wolfsburg, Manchester City',
                    isLink: false,
                },
            ],
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Didier_Drogba_2013_%281%29.JPG/250px-Didier_Drogba_2013_%281%29.JPG',
            answers: ['DIDIER YVES DROGBA TEBILY', 'DIDIER DROGBA', 'DROGBA'],
            descriptions: [
                {
                    name: 'Uyruk',
                    value: 'Fildişi Sahili',
                    isLink: false,
                },
                {
                    name: 'Oynadığı Bazı Takımlar',
                    value: 'Le Mans, Marsilya, Chelsea, Galatasaray',
                    isLink: false,
                },
            ],
        },
    ],
};

export default questions;
