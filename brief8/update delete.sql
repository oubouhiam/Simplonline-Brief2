---User---

UPDATE `user` SET `password` = '12345678', `loginStatus` = 'lllll' WHERE `user`.`userId` = 1;
DELETE FROM `user` WHERE userId=1;

---shippinginfo---

UPDATE `shippinginfo` SET `shippingType` = 'BBBBB' WHERE `shippinginfo`.`shippingId` = 2;
DELETE FROM `shippinginfo` WHERE shippingId=2;


---orderdetails---

UPDATE `orderdetails` SET `productName` = 'yyyyy', `quantity` = '6' WHERE `orderdetails`.`orderId` = 3; 
DELETE FROM `orderdetails` WHERE orderId=3;


---customer---

UPDATE `customer` SET `creditCardInfo` = 'mastercard' WHERE `customer`.`costumerName` = 'mohamed';
DELETE FROM `customer` WHERE costumerName='mohamed';


---administrator---

UPDATE `administrator` SET `adminName` = 'mohamed' WHERE `administrator`.`adminName` = 'mohamedj';
DELETE FROM `administrator` WHERE adminName='mohamed';



---creat-remove-user---

CREATE USER 'mohamed'@'localhost' IDENTIFIED BY '1234';
DROP USER IF EXISTS mohamed;

---permission---

GRANT CREATE ON brief3.orderdetails TO ‘mohamed’@'localhost';
GRANT INSERT ON brief3.orderdetails TO ‘mohamed’@'localhost';



