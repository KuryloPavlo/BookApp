interface initialBookStateI {
  availableGenres: string[] | null;
  books: BookI[] | null;
}

interface BookI {
  bookName: string;
  genre: string;
  cover: string;
  sections: SectionI[];
  id: number;
}

interface SectionI {
  name: string;
  text: string;
}
