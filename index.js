class Dictionary {
    constructor(name) {
        this.name = name;
        this.words = {};
    }

    add(word, description) {
        if (!this.words[word])
            this.words[word] = {word, description};
    }

    remove(word) {
        delete this.words[word];
    }

    get(word) {
        return this.words[word];
    }

    showAllWords() {
        return Object.values(this.words).forEach(i => console.log(`${i.word} - ${i.description}`));
    }
}

const dictionary = new Dictionary("Толковый словарь");
dictionary.add("JavaScript", "популярный язык программирования");
dictionary.add("Веб-разработчик", "Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие");
dictionary.add("Веб-разработчик", "Проверка метода Add");
dictionary.remove("JavaScript");
dictionary.showAllWords();

