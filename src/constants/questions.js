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
                    value: 'Daniel Radcliffe, Rupert Grint, Emma Watson',
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
        {
            img: 'https://m.media-amazon.com/images/M/MV5BZGQzMWY0NGYtMGE4MS00YmExLTkyOWItNzQxOWUzODkxNzAyXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_FMjpg_UX1000_.jpg',
            answers: ["ÖLÜMLÜ DÜNYA", "MORTAL WORLD"],
            descriptions: [
                {
                    name: 'Yönetmen',
                    value: 'Ali Atay',
                    isLink: false,
                },
                {
                    name: 'Oyuncular',
                    value: 'Ahmet Mümtaz Taylan, Sarp Apak, Irem Sak, Feyyaz Yiğit',
                    isLink: false,
                },
                {
                    name: 'Fragman',
                    value: 'https://www.youtube.com/watch?v=jHlLVxkG-XY',
                    isLink: true,
                    brand: 'YouTube'
                },
                {
                    name: 'Resim Kaynağı',
                    value: 'https://www.imdb.com/title/tt7748244',
                    isLink: true,
                    brand: 'IMDB',
                },
            ],
        },
        {
            img: 'https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_.jpg',
            answers: ["A CLOCKWORK ORANGE", "CLOCKWORK ORANGE", "OTOMATIK PORTAKAL"],
            descriptions: [
                {
                    name: 'Yönetmen',
                    value: 'Stanley Kubrick',
                    isLink: false,
                },
                {
                    name: 'Oyuncular',
                    value: 'Malcolm McDowell, Patrick Magee, Michael Bates',
                    isLink: false,
                },
                {
                    name: 'Fragman',
                    value: 'https://www.youtube.com/watch?v=T54uZPI4Z8A',
                    isLink: true,
                    brand: 'YouTube'
                },
                {
                    name: 'Resim Kaynağı',
                    value: 'https://www.imdb.com/title/tt0066921',
                    isLink: true,
                    brand: 'IMDB',
                },
            ],
        },
        {
            img: 'https://m.media-amazon.com/images/M/MV5BZDg0YzNmODEtYTk1Ny00Y2Y0LWJiZDItMzFhMTFjYTQyM2FlXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg',
            answers: ["TOSUN PAŞA", "TOSUN PASA"],
            descriptions: [
                {
                    name: 'Yönetmen',
                    value: 'Kartal Tibet',
                    isLink: false,
                },
                {
                    name: 'Oyuncular',
                    value: 'Kemal Sunal, Müjde Ar, Adile Naşit, Şener Şen',
                    isLink: false,
                },
                {
                    name: 'Fragman',
                    value: 'https://www.youtube.com/watch?v=OxSz6qzM2G4',
                    isLink: true,
                    brand: 'YouTube'
                },
                {
                    name: 'Resim Kaynağı',
                    value: 'https://www.imdb.com/title/tt0253828',
                    isLink: true,
                    brand: 'IMDB',
                },
            ],
        },
        {
            img: 'https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg',
            answers: ["JAWS", "DENIZIN DIŞLERI"],
            descriptions: [
                {
                    name: 'Yönetmen',
                    value: 'Steven Spielberg',
                    isLink: false,
                },
                {
                    name: 'Oyuncular',
                    value: 'Roy Scheider, Robert Shaw, Richard Dreyfuss, Lorraine Gary',
                    isLink: false,
                },
                {
                    name: 'Fragman',
                    value: 'https://www.youtube.com/watch?v=U1fu_sA7XhE',
                    isLink: true,
                    brand: 'YouTube'
                },
                {
                    name: 'Resim Kaynağı',
                    value: 'https://www.imdb.com/title/tt0073195',
                    isLink: true,
                    brand: 'IMDB',
                },
            ],
        },
        {
            img: 'https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg',
            answers: ["AVATAR"],
            descriptions: [
                {
                    name: 'Yönetmen',
                    value: 'James Cameron',
                    isLink: false,
                },
                {
                    name: 'Oyuncular',
                    value: 'Sam Worthington, Zoe Saldana, Sigourney Weaver',
                    isLink: false,
                },
                {
                    name: 'Fragman',
                    value: 'https://www.youtube.com/watch?v=7HHPYrFApKs',
                    isLink: true,
                    brand: 'YouTube'
                },
                {
                    name: 'Resim Kaynağı',
                    value: 'https://www.imdb.com/title/tt0499549',
                    isLink: true,
                    brand: 'IMDB',
                },
            ],
        },
        {
            img: 'https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
            answers: ["DEADPOOL", "DEADPOOL 1", "DEADPOOL1"],
            descriptions: [
                {
                    name: 'Yönetmen',
                    value: 'Tim Miller',
                    isLink: false,
                },
                {
                    name: 'Oyuncular',
                    value: 'Ryan Reynolds, Morena Baccarin, T.J. Miller',
                    isLink: false,
                },
                {
                    name: 'Fragman',
                    value: 'https://www.youtube.com/watch?v=ONHBaC-pfsk',
                    isLink: true,
                    brand: 'YouTube'
                },
                {
                    name: 'Resim Kaynağı',
                    value: 'https://www.imdb.com/title/tt1431045',
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
        },
        {
            img: 'https://i.scdn.co/image/ab67616d0000b2737795a558f68bf11b1077ab8b',
            answers: ['MÜSLÜM GÜRSES', "MUSLUM GURSES"],
            descriptions: [
                {
                    name: 'Albüm',
                    value: 'Küskünüm',
                    isLink: false,
                },
                {
                    name: 'Tarz',
                    value: 'Arabesk',
                    isLink: false,
                },
                {
                    name: 'Albüm Linki',
                    value: 'https://open.spotify.com/album/1BsLgh8u0QAyn1GIlvHmGO',
                    isLink: true,
                    brand: 'Spotify'
                },
                {
                    name: 'Şarkı Önerisi',
                    value: 'https://open.spotify.com/track/0aTxurHLM42uBcAxjsZLES?si=0b7fcd944aa945f5',
                    isLink: true,
                    brand: 'Spotify'
                },
            ],
        },
        {
            img: 'https://i.scdn.co/image/ab67616d0000b2735e9767ffdb710d4d134990d4',
            answers: ['TARKAN'],
            descriptions: [
                {
                    name: 'Albüm',
                    value: 'Dudu',
                    isLink: false,
                },
                {
                    name: 'Tarz',
                    value: 'Pop',
                    isLink: false,
                },
                {
                    name: 'Albüm Linki',
                    value: 'https://open.spotify.com/album/7iAF2p1sEHQ6ixJHRdiTXn',
                    isLink: true,
                    brand: 'Spotify'
                },
                {
                    name: 'Şarkı Önerisi',
                    value: 'https://open.spotify.com/track/15xj7p5uDk9sDnNbQtgZ8Y?si=e62eb36335e14576',
                    isLink: true,
                    brand: 'Spotify'
                },
            ],
        },
        {
            img: 'https://i.scdn.co/image/ab67616d0000b273ea7caaff71dea1051d49b2fe',
            answers: ['PINK FLOYD'],
            descriptions: [
                {
                    name: 'Albüm',
                    value: 'Dark Side of the Moon',
                    isLink: false,
                },
                {
                    name: 'Tarz',
                    value: 'Progresif Rock- Saykodelik',
                    isLink: false,
                },
                {
                    name: 'Albüm Linki',
                    value: 'https://open.spotify.com/album/4LH4d3cOWNNsVw41Gqt2kv',
                    isLink: true,
                    brand: 'Spotify'
                },
                {
                    name: 'Şarkı Önerisi',
                    value: 'https://open.spotify.com/track/4xHWH1jwV5j4mBYRhxPbwZ?si=49eb55f301314e4e',
                    isLink: true,
                    brand: 'Spotify'
                },
            ],
        },
        {
            img: 'https://i.scdn.co/image/ab67616d0000b273de437d960dda1ac0a3586d97',
            answers: ['MICHAEL JACKSON'],
            descriptions: [
                {
                    name: 'Albüm',
                    value: 'Thriller',
                    isLink: false,
                },
                {
                    name: 'Tarz',
                    value: 'Pop',
                    isLink: false,
                },
                {
                    name: 'Albüm Linki',
                    value: 'https://open.spotify.com/album/2ANVost0y2y52ema1E9xAZ',
                    isLink: true,
                    brand: 'Spotify'
                },
                {
                    name: 'Şarkı Önerisi',
                    value: 'https://open.spotify.com/track/5ChkMS8OtdzJeqyybCc9R5?si=6ca2add1fc8d44a6',
                    isLink: true,
                    brand: 'Spotify'
                },
            ],
        },
        {
            img: 'https://i.scdn.co/image/ab67616d0000b273b6b4fa5df889449450f74860',
            answers: ['EDIS'],
            descriptions: [
                {
                    name: 'Albüm',
                    value: 'An',
                    isLink: false,
                },
                {
                    name: 'Tarz',
                    value: 'Pop',
                    isLink: false,
                },
                {
                    name: 'Albüm Linki',
                    value: 'https://open.spotify.com/album/4mDY6XHkagFeJIFwMJ7Lgz',
                    isLink: true,
                    brand: 'Spotify'
                },
                {
                    name: 'Şarkı Önerisi',
                    value: 'https://open.spotify.com/track/4YNFjooq5vbXPVhrLJR5Px?si=e8deff6a1fef4999',
                    isLink: true,
                    brand: 'Spotify'
                },
            ],
        },
        {
            img: 'https://i.scdn.co/image/ab67616d0000b273465be6cda98a1a6950a12964',
            answers: ['50 CENT', '50CENT', 'FIFTY CENT'],
            descriptions: [
                {
                    name: 'Albüm',
                    value: "Get Rich or Die Tryin'",
                    isLink: false,
                },
                {
                    name: 'Tarz',
                    value: 'Gangsta Rap, Hip Hop',
                    isLink: false,
                },
                {
                    name: 'Albüm Linki',
                    value: 'https://open.spotify.com/album/4ycNE7y1rp5215g1kkqk1P',
                    isLink: true,
                    brand: 'Spotify'
                },
                {
                    name: 'Şarkı Önerisi',
                    value: 'https://open.spotify.com/track/3G0yz3DZn3lfraledmBCT0?si=74bb157ee3ab49d3',
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
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/tr/2/22/Death_Stranding.jpg',
            answers: ["DEATH STRANDING"],
            descriptions: [
                {
                    name: 'Yapımcı',
                    value: 'Sony Interactive Entertainment',
                    isLink: false,
                },
                {
                    name: 'Yönetmen',
                    value: 'Hideo Kojima',
                    isLink: false,
                },
                {
                    name: 'Fragman',
                    value: 'https://www.youtube.com/watch?v=tCI396HyhbQ',
                    isLink: true,
                    brand: 'YouTube'
                },
                {
                    name: 'Fiyat',
                    value: 'https://store.steampowered.com/app/1190460/DEATH_STRANDING/',
                    isLink: true,
                    brand: 'Steam'
                }
            ],
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Portal_standalonebox.jpg',
            answers: ["PORTAL", "PORTAL 1"],
            descriptions: [
                {
                    name: 'Yapımcı',
                    value: 'Valve',
                    isLink: false,
                },
                {
                    name: 'Dizaynır',
                    value: 'Kim Swift',
                    isLink: false,
                },
                {
                    name: 'Fragman',
                    value: 'https://www.youtube.com/watch?v=zQhCTRHYBZQ',
                    isLink: true,
                    brand: 'YouTube'
                },
                {
                    name: 'Fiyat',
                    value: 'https://store.steampowered.com/app/400/Portal/',
                    isLink: true,
                    brand: 'Steam'
                }
            ],
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/en/4/46/Pro_Evolution_Soccer_2013_cover.jpg',
            answers: [
                "PRO EVOLUTION SOCCER 2013", "PRO EVOLUTION SOCCER 13",
                "PRO EVOLUTION SOCCER13", "PRO EVOLUTION SOCCER2013",
                "PES 13", "PES13"
            ],
            descriptions: [
                {
                    name: 'Yapımcı',
                    value: 'Konami',
                    isLink: false,
                },
                {
                    name: 'Dizaynır',
                    value: 'Konami',
                    isLink: false,
                },
                {
                    name: 'Fragman',
                    value: 'https://www.youtube.com/watch?v=wHAJdgUS1w4',
                    isLink: true,
                    brand: 'YouTube'
                },
            ],
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/tr/4/44/Red_Dead_Redemption_II.jpg',
            answers: [
                "RED DEAD REDEMPTION 2", "RED DEAD REDEMPTION II",
                "RED DEAD REDEMPTION2", "RED DEAD REDEMPTIONII",
                "RDR 2", "RDR2", "RDRII", "RDR II"
            ],
            descriptions: [
                {
                    name: 'Yapımcı',
                    value: 'Rockstar Studios',
                    isLink: false,
                },
                {
                    name: 'Senaristler',
                    value: 'Dan Houser, Michael Unsworth, Rupert Humphries',
                    isLink: false,
                },
                {
                    name: 'Fragman',
                    value: 'https://www.youtube.com/watch?v=eaW0tYpxyp0',
                    isLink: true,
                    brand: 'YouTube'
                },
                {
                    name: 'Fiyat',
                    value: 'https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/',
                    isLink: true,
                    brand: 'Steam'
                }
            ],
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/en/8/87/Forza_Horizon_4_cover.jpg',
            answers: [
                "FORZA HORIZON 4", "FORZA HORIZON4"
            ],
            descriptions: [
                {
                    name: 'Yapımcı',
                    value: 'Playground Games',
                    isLink: false,
                },
                {
                    name: 'Yönetmen',
                    value: 'Ralph Fulton',
                    isLink: false,
                },
                {
                    name: 'Fragman',
                    value: 'https://www.youtube.com/watch?v=5xy4n73WOMM',
                    isLink: true,
                    brand: 'YouTube'
                },
                {
                    name: 'Fiyat',
                    value: 'https://store.steampowered.com/app/1293830/Forza_Horizon_4/',
                    isLink: true,
                    brand: 'Steam'
                }
            ],
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/tr/7/7c/Doom_Eternal_kapak.png',
            answers: ["DOOM ETERNAL"],
            descriptions: [
                {
                    name: 'Yapımcı',
                    value: 'Bethesda Softworks',
                    isLink: false,
                },
                {
                    name: 'Yönetmen',
                    value: 'Hugo Martin',
                    isLink: false,
                },
                {
                    name: 'Fragman',
                    value: 'https://www.youtube.com/watch?v=6eMhs6VFG0o',
                    isLink: true,
                    brand: 'YouTube'
                },
                {
                    name: 'Fiyat',
                    value: 'https://store.steampowered.com/app/782330/DOOM_Eternal/',
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
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/4/40/R_federer.jpg',
            answers: ['ROGER FEDERER', 'FEDERER'],
            descriptions: [
                {
                    name: 'Uyruk',
                    value: 'İsviçre',
                    isLink: false,
                },
                {
                    name: 'Doğum Tarihi',
                    value: '8 Ağustos 1981 (41 yaşında)',
                    isLink: false,
                },
            ],
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Michael_Jordan_in_2014.jpg',
            answers: ['MICHAEL JORDAN', 'JORDAN'],
            descriptions: [
                {
                    name: 'Uyruk',
                    value: 'Amerika',
                    isLink: false,
                },
                {
                    name: 'Oynadığı Takımlar',
                    value: 'Washington Wizards, Chicago Bulls',
                    isLink: false,
                },
            ],
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/AUT_vs._TUR_2016-03-29_%28267%29.jpg',
            answers: ['CENK TOSUN', "TOSUN PASA", "TOSUN PAŞA"],
            descriptions: [
                {
                    name: 'Uyruk',
                    value: 'Türkiye',
                    isLink: false,
                },
                {
                    name: 'Oynadığı Bazı Takımlar',
                    value: 'Eintracht Frankfurt, Gaziantepspor, Beşiktaş, Everton',
                    isLink: false,
                },
            ],
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Ali_the_greatest_1976.jpg/220px-Ali_the_greatest_1976.jpg',
            answers: ['MUHAMMED ALI', "THE GREATEST", 'MOHAMMED ALI'],
            descriptions: [
                {
                    name: 'Uyruk',
                    value: 'Amerika',
                    isLink: false,
                },
                {
                    name: 'Doğum Tarihi',
                    value: '17 Ocak 1942',
                    isLink: false,
                },
                {
                    name: 'Ölüm Tarihi',
                    value: '3 Haziran 2016 (74 yaşında)',
                    isLink: false,
                },
            ],
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Verhoeven_Open_2016-Semih_Sayg%C4%B1ner.jpg/640px-Verhoeven_Open_2016-Semih_Sayg%C4%B1ner.jpg',
            answers: ['SEMIH SAYGINER',],
            descriptions: [
                {
                    name: 'Uyruk',
                    value: 'Türkiye',
                    isLink: false,
                },
                {
                    name: 'Doğum Tarihi',
                    value: '12 Kasım 1964 (54 yaşında)',
                    isLink: false,
                },
            ],
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Manchester_United_v_Newcastle_United%2C_11_September_2021_%2810%29.jpg',
            answers: ['CRISTIANO RONALDO DOS SANTOS AVEIRO', 'CRISTIANO RONALDO', 'RONALDO', 'CR7', 'CR 7'],
            descriptions: [
                {
                    name: 'Uyruk',
                    value: 'Portekiz',
                    isLink: false,
                },
                {
                    name: 'Oynadığı Bazı Takımlar',
                    value: 'Sporting CP, Manchester United, Real Madrid',
                    isLink: false,
                },
            ],
        },
    ],
};

export default questions;
