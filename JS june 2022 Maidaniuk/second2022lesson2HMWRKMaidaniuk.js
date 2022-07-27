// - Створити масив, наповнити його 10 елементами будь-якого типу,
//     вивести кожен елемент в консоль
//
let books = ["tarzan", "bibliya", "math 6", "kobzar", "golovolomky", "maungli", "Вантажівки", "graf_drakula", "gupalo Vasil", "fozzi"];
console.log(books);
console.log(books[0]);
console.log(books[1]);
console.log(books[2]);
console.log(books[3]);
console.log(books[4]);
console.log(books[5]);
console.log(books[6]);
console.log(books[7]);
console.log(books[8]);
console.log(books[9]);


// - Створити 3 об'єкти які описують книги. ' +
// 'Поля об'єкту : title ,pageCount, genre.
let book11 = {
    title: "Romeo",
    genre: "Roman",
    pageCount: 268
}
console.log(book11)
let book21 = {
    title: "dead",
    genre: "Fantasy",
    pageCount: 245
}
console.log(book21)
let book31 = {
    title: "!Z!ombi land",
    genre: "Horror",
    pageCount: 145
}
console.log(book31)

// - Створити 3 об'єкти які описують книги. Поля об'єкту :
//     title ,pageCount, genre, authors.
//     Поле "автори" - масив. Кожен автор має поля name,age
let book12 = {
    title: "Romeo",
    genre: "Roman",
    pageCount: 268,
    auhtors: ["Vilyam_Sheckspir", "Biron"]
};
console.log(book12);
let book22 = {
    title: "Mafiozi",
    genre: "Fantasy",
    pageCount: 245,
    auhtors: ["Mihailo Petrovich", "Mafiothi"]
}
console.log(book22)
let book32 = {
    title: "!Z!ombi land",
    genre: "Horror",
    pageCount: 145,
    authors: ["Antios", "Thelyas", "Mirons"]

}
console.log(book32)

// - Створити масив з 10 об'єктами які описують сутніть "користувач".' +
// ' Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user1 = {
    name: 'Taras',
    username: 'Minecrafter',
    password: 12471984
};
console.log(user1);

let user2 =
    {
        name: 'Yarik',
        username: 'BrawlStarser',
        password: 12471984
    }
console.log(user2)
console.log(user2.password);

let user3 =
    {
        name: 'Danilo',
        username: 'Chelik',
        password: 12471984
    }
console.log(user3)
console.log(user3.password);

let user4 = {
    name: 'Miroslav',
    username: 'Farich',
    password: 12471984
}
console.log(user4)
console.log(user4.password);

let user5 = {

    name: 'Olya',
    username: 'Programist',
    password: 12471984
}
console.log(user5)
console.log(user5.password);

let user6 = {
    name: 'Valintina',
    username: 'Barman',
    password: 12471984
}
console.log(user5);


let user7 = {
    name: 'Mikola',
    username: 'Cser',
    password: 12471984
}
console.log(user7);
console.log(user7['password']);

let user8 = {
    name: 'Vitaliy',
    username: 'Kolodka',
    password: 12471984
}
console.log(user8);
console.log(user8['password']);


let user9 = {
    name: 'Roma',
    username: 'Tumbochka',
    password: 12471984
}
console.log(user9);
console.log(user9.password);

let user10 = {
    name: 'Illuha',
    username: 'Vodichka',
    password: 12471984
}
console.log(user10);
console.log(user10['password']);