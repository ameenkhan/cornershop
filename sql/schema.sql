CREATE SCHEMA `cornershop` ;
USE cornershop;

DROP TABLE IF EXISTS `PRODUCTS`;
CREATE TABLE `products` (
  `prod_id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `unit` int NOT NULL,
  `price_unit` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`prod_id`),
  CONSTRAINT `unit` CHECK (`unit` in (0,1))
);

DROP TABLE IF EXISTS `ORDER_META`;
CREATE TABLE `ORDER_META`(
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