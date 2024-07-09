use kdt13;
create table customer (
	id varchar(10) not null primary key,
	name varchar(10) not null,
	birthday date not null
	);

insert into customer (id, name, birthday) values
('aaa', '홍길동', '1990-03-17'),
('bbb', '성춘향', '1992-02-06'),
('ccc', '이몽룡', '1991-05-13');
    
use kdt13;
create table orderlist(
	id int auto_increment primary key not null,
	customer_id varchar(10) not null,
	product_name varchar(20) not null,
	quantity int,
	foreign key (customer_id) references customer(id)
	);

use kdt13;
insert into orderlist (customer_id, product_name, quantity) values
('aaa', '맥북프로', 1),
('bbb', '모니터', 10),
('ccc', '키보드', 3),
('bbb', '핸드폰', 2),
('ccc', '마우스', 10);

select * from orderlist;


select * from customer inner join 
orderlist on customer.id = orderlist.customer_id;

-- select * from customer as a inner join orderlist as b on a.id = b.customer_id

-- select a.id as order_id, a.name, b.product_name, b.quantity
-- from customer as a inner join orderlist as b
