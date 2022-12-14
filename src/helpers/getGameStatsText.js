const emojisByClass = {
    wrong: '๐ฅ',
    pass: '๐จ',
    success: '๐ฉ',
    default: 'โฌ',
}

const categoryEmoji = {
    movie: '๐ฌ',
    music: '๐ต',
    game: '๐ฎ',
    sport: '๐',
};

const getGameStatsText = (gameStats, category) => {
    const { answers, questionDay } = gameStats;

    const answersText = [0, 1, 2, 3, 4, 5].map((number) => {
        if (answers[number])
            return emojisByClass[answers[number].class];

        return emojisByClass.default;
    });

    return `Respho Sonuรง #${questionDay}
${categoryEmoji[category]} -> ${answersText.join(" ")}
https://lordeveck.github.io/respho/
`;
};

export default getGameStatsText;
