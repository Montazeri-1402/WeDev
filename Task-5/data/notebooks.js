class NoteClass {
    constructor() {
        this.noteBooksList = [
            {
                id: "1",
                bookName: "وصایای امام",
                pageLength: "300",
                time: "1397",
                size: "500"
            },
            {
                id: "2",
                bookName: "فارسی",
                pageLength: "150",
                time: "1400",
                size: "200"
            },
            {
                id: "3",
                bookName: "ریاضی کاربردی",
                pageLength: "350",
                time: "1390",
                size: "450"
            },
            {
                id: "4",
                bookName: "عربی",
                pageLength: "250",
                time: "1402",
                size: "600"
            }
        ];
    }

    static deleteNoteBookById(bookId) {
        // Use the class name to access noteBooksList
        NoteClass.noteBooksList = NoteClass.noteBooksList.filter(book => book.id !== bookId);
        return NoteClass.noteBooksList;
    }

    deleteNoteBookByIndex(bookIndex) {
        // Implement this method as needed
    }
}

module.exports = NoteClass;
