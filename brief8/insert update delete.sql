INSERT INTO `user` (`userId`, `password`, `loginStatus`) VALUES ('1', 'azerty', 'hhhh');
UPDATE `user` SET `password` = '12345678', `loginStatus` = 'lllll' WHERE `user`.`userId` = 1;
DELETE FROM `user` WHERE userId=1;




INSERT INTO `shippinginfo` (`shippingId`, `shippingType`, `shippingCost`, `shippingRegionId`) VALUES ('2', 'aaaaaa', '0', '1234');
UPDATE `shippinginfo` SET `shippingType` = 'BBBBB' WHERE `shippinginfo`.`shippingId` = 2;
DELETE FROM `shippinginfo` WHERE shippingId=2;




INSERT INTO `orderdetails` (`orderId`, `productId`, `productName`, `quantity`, `subTotal`) VALUES ('3', '4', 'gggggg', '5', '99'); 
UPDATE `orderdetails` SET `productName` = 'yyyyy', `quantity` = '6' WHERE `orderdetails`.`orderId` = 3; 
DELETE FROM `orderdetails` WHERE orderId=3;




INSERT INTO `customer` (`costumerName`, `costumerEmail`, `creditCardInfo`, `shippingInfo`, `accountBalance`) VALUES ('mohamed', 'mohamed@gmail.com', 'visa', 'fedex', '999');
UPDATE `customer` SET `creditCardInfo` = 'mastercard' WHERE `customer`.`costumerName` = 'mohamed';
DELETE FROM `customer` WHERE costumerName='mohamed';




INSERT INTO `administrator` (`adminName`, `adminEmail`) VALUES ('mohamedj', 'mohamed@gmail.com');
UPDATE `administrator` SET `adminName` = 'mohamed' WHERE `administrator`.`adminName` = 'mohamedj';
DELETE FROM `administrator` WHERE adminName='mohamed';



creatremove user

CREATE USER 'mohamed'@'localhost' IDENTIFIED BY '1234';
DROP USER IF EXISTS mohamed;

permission

GRANT CREATE ON brief3.orderdetails TO ‘mohamed’@'localhost';
GRANT INSERT ON brief3.orderdetails TO ‘mohamed’@'localhost';



