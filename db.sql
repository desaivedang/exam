create table Book_Tb(
    id INT primary key,
    b_name VARCHAR(50),
    author VARCHAR(50),
    book_type VARCHAR(50),
    price INT,
    publishedDate DATE,
    lang VARCHAR(50)
)


select b_name from Book_Tb where author=?;

insert into Book_Tb values (?,?,?,?,?,?,?);

Update Book_Tb set price=?, lang=?
where id=?;


