let editingBookId =
  null;


document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderBooks();


    const form =
      document.getElementById(
        "book-form"
      );


    const message =
      document.getElementById(
        "form-message"
      );


    form.addEventListener(
      "submit",
      handleSubmit
    );


    function handleSubmit(
      event
    ) {

      event.preventDefault();


      const book =
        getFormData();


      const errors =
        validateBook(
          book
        );


      if (
        errors.length > 0
      ) {

        showMessage(
          errors.join(
            " "
          ),
          "error"
        );

        return;

      }


      if (
        editingBookId === null
      ) {

        const newBook =
          addBook(
            book
          );

        console.log(
          "Libro agregado:",
          newBook
        );


        showMessage(
          "Libro guardado correctamente.",
          "success"
        );

      }

      else {

        const updatedBook =
          updateBook(
            editingBookId,
            book
          );

        console.log(
          "Libro actualizado:",
          updatedBook
        );


        showMessage(
          "Libro actualizado correctamente.",
          "success"
        );


        editingBookId =
          null;


        document.querySelector(
          "#book-form button[type='submit']"
        ).textContent =
          "Guardar libro";

      }



      form.reset();


      renderBooks();


      renderBooks();

    }


    function getFormData() {

      return {

        title:
          document
            .getElementById(
              "title"
            )
            .value
            .trim(),


        author:
          document
            .getElementById(
              "author"
            )
            .value
            .trim(),


        year:
          Number(
            document
              .getElementById(
                "year"
              )
              .value
          ),


        genre:
          document
            .getElementById(
              "genre"
            )
            .value
            .trim()

      };

    }


    function validateBook(
      book
    ) {

      const errors =
        [];


      if (
        !book.title
      ) {

        errors.push(
          "El título es obligatorio."
        );

      }


      if (
        !book.author
      ) {

        errors.push(
          "El autor es obligatorio."
        );

      }


      if (

        !Number.isInteger(
          book.year
        )

        ||

        book.year <= 0

      ) {

        errors.push(
          "Ingrese un año válido."
        );

      }


      if (
        !book.genre
      ) {

        errors.push(
          "El género es obligatorio."
        );

      }


      return errors;

    }


    function showMessage(
      text,
      type
    ) {

      message.textContent =
        text;


      message.className =
        `form-message ${type}`;

    }

  }
);


function loadBookForEdit(
  book
) {

  editingBookId =
    book.id;


  document.getElementById(
    "title"
  ).value =
    book.title;


  document.getElementById(
    "author"
  ).value =
    book.author;


  document.getElementById(
    "year"
  ).value =
    book.year;


  document.getElementById(
    "genre"
  ).value =
    book.genre;


  document.querySelector(
    "#book-form button[type='submit']"
  ).textContent =
    "Actualizar libro";

}