const emojisByClass = {
    wrong: '🟥',
    pass: '🟨',
    success: '🟩',
    default: '⬜',
}

const categoryEmoji = {
    movie: '🎬',
    music: '🎵',
    game: '🎮',
    sport: '🏆',
};

const getGameStatsText = (gameStats, category) => {
    const { answers, questionDay } = gameStats;

    const answersText = [0, 1, 2, 3, 4, 5].map((number) => {
        if (answers[number])
            return emojisByClass[answers[number].class];

        return emojisByClass.default;
    });

    return `Respho Sonuç #${questionDay}
${categoryEmoji[category]} -> ${answersText.join(" ")}
https://lordeveck.github.io/respho/
`;
};

export default getGameStatsText;
