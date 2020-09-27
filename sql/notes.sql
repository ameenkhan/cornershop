CREATE SCHEMA `cornershop` ;
USE cornershop;

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `prod_id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `unit` int NOT NULL,
  `price_unit` decimal(6,2) NOT NULL,
  PRIMARY KEY (`prod_id`),
  CONSTRAINT `unit` CHECK (`unit` in (0,1))
);

SELECT * FROM PRODUCTS;

INSERT INTO PRODUCTS
VALUES (0, "new_prod", 0, 34.45555);

INSERT INTO PRODUCTS
VALUES (0, "new_prod", 4, 12.99);

SELECT now();

DROP TABLE IF EXISTS `order_meta`;
CREATE TABLE `order_meta`(
  `order_id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) DEFAULT NULL,
  `phone_no` VARCHAR(30) DEFAULT NULL,
  `o_date` DATETIME NOT NULL,
  `status` INT DEFAULT 0,
  PRIMARY KEY(`order_id`),
  CONSTRAINT `status_specified` CHECK (`status` IN (0, 1)),
  CONSTRAINT `contact_not_null` CHECK (
	(`email` IS NOT NULL OR `phone_no` IS NOT NULL)
  )
);

INSERT INTO ORDER_META (`o_date`, `status`, `email`)
VALUES (now(), 0, "me@me.com");

SELECT * FROM ORDER_META;

DROP TABLE IF EXISTS `ORDER_DETAILS`;
CREATE TABLE `ORDER_DETAILS`(
  `order_id` INT,
  `prod_id` INT,
  `price_unit` DECIMAL(10,2) NOT NULL,
  `quantity` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY(`order_id`, `prod_id`)
);

ALTER TABLE `ORDER_DETAILS`
ADD FOREIGN KEY (`order_id`) REFERENCES `ORDER_META`(`order_id`),
ADD FOREIGN KEY (`prod_id`) REFERENCES `PRODUCTS`(`prod_id`);

INSERT INTO order_details (order_id, prod_id, price_unit, quantity)
VALUES (1, 1, 23.99, 5);

SELECT * FROM order_details;
