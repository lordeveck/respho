import toastr from 'toastr';

const isAnswerValid = ({ answers, answer, selectedLetters }) => {
    if (!answer) {
        toastr.error('Lütfen bir kelime giriniz.');
        return false;
    }

    if (answer.length < 2) {
        toastr.error('Girdiğiniz kelime en az 2 harf içermelidir.');
        return false;
    }

    if (answer.length > 10) {
        toastr.error('Girdiğiniz kelime en fazla 10 harf içermelidir.');
        return false;
    }

    if (selectedLetters.length === 1) {
        if (!answer.startsWith(selectedLetters[0])) {
            toastr.error('Kelime, seçili harf ile başlamıyor.');
            return false;
        }

        // if (selectedMode === 'dailyMode' && !answers.length) {
        //     if (dailyWords.includes(answer)) {
        //         toastr.error('İlk kelimeniz bulunacak kelimelerden biri olamaz.');
        //         return false;
        //     }
        // }
    } else {
        let answerClone = answer;

        const isValid = selectedLetters.every((randomLetter) => {
            if (answerClone.includes(randomLetter)) {
                answerClone = answerClone.replace(randomLetter, '');
                return true;
            }
            return false;
        });

        if (!isValid) {
            toastr.error('Kelime, seçili harfleri içermiyor.');
            return false;
        };
    }

    if (answers.includes(answer)) {
        toastr.error('Bu kelimeyi daha önce girdiniz.')
        return false;
    }

    return true;
};

export default isAnswerValid;
