DELIMITER ^

DROP PROCEDURE IF EXISTS insert_book_author^
CREATE PROCEDURE insert_book_author (
    $isbn varchar(255),
    $title varchar(255),
    $total_num int,
    $first_name varchar(255),
    $last_name varchar(255),
    $publisher varchar(255),
    $publication_year int
)
BEGIN
    INSERT INTO `author` (first_name, last_name)
        SELECT $first_name, $last_name
        FROM DUAL
        WHERE NOT EXISTS (
            SELECT 1 FROM `author`
            WHERE first_name = $first_name
            AND last_name = $last_name
        )
        LIMIT 1;
    INSERT INTO `book` (isbn, title, publisher, publication_year, total_num)
        VALUES (
            $isbn,
            $title,
            $publisher,
            $publication_year,
            $total_num
            );
    INSERT INTO `author_of_book` (isbn, author_id)
        SELECT $isbn, author_id
            FROM `author`
            WHERE first_name = $first_name
            AND last_name = $last_name;
END^

DELIMITER ;