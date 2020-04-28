-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 28 avr. 2020 à 18:10
-- Version du serveur :  10.4.11-MariaDB
-- Version de PHP : 7.2.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `brief3`
--

-- --------------------------------------------------------

--
-- Structure de la table `administrator`
--

CREATE TABLE `administrator` (
  `adminName` varchar(254) NOT NULL,
  `adminEmail` varchar(254) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `administrator`
--
INSERT INTO `administrator` (`adminName`, `adminEmail`) VALUES ('mohamedj', 'mohamed@gmail.com');

-- --------------------------------------------------------

--
-- Structure de la table `customer`
--

CREATE TABLE `customer` (
  `costumerName` varchar(254) NOT NULL,
  `costumerEmail` varchar(254) DEFAULT NULL,
  `creditCardInfo` varchar(254) DEFAULT NULL,
  `shippingInfo` varchar(254) DEFAULT NULL,
  `accountBalance` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `customer`
--
INSERT INTO `customer` (`costumerName`, `costumerEmail`, `creditCardInfo`, `shippingInfo`, `accountBalance`) VALUES ('mohamed', 'mohamed@gmail.com', 'visa', 'fedex', '999');

-- --------------------------------------------------------

--
-- Structure de la table `orderdetails`
--

CREATE TABLE `orderdetails` (
  `orderId` int(11) NOT NULL,
  `productId` int(11) DEFAULT NULL,
  `productName` varchar(254) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `subTotal` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `orderdetails`
--
INSERT INTO `orderdetails` (`orderId`, `productId`, `productName`, `quantity`, `subTotal`) VALUES ('3', '4', 'gggggg', '5', '99');
-- --------------------------------------------------------

--
-- Structure de la table `shippinginfo`
--

CREATE TABLE `shippinginfo` (
  `shippingId` int(11) NOT NULL,
  `shippingType` varchar(254) DEFAULT NULL,
  `shippingCost` int(11) DEFAULT NULL,
  `shippingRegionId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `shippinginfo`
--
INSERT INTO `shippinginfo` (`shippingId`, `shippingType`, `shippingCost`, `shippingRegionId`) VALUES ('2', 'aaaaaa', '0', '1234');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `userId` int(254) NOT NULL,
  `password` varchar(254) DEFAULT NULL,
  `loginStatus` varchar(254) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `user`
--
INSERT INTO `user` (`userId`, `password`, `loginStatus`) VALUES ('1', 'azerty', 'hhhh');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `administrator`
--
ALTER TABLE `administrator`
  ADD PRIMARY KEY (`adminName`);

--
-- Index pour la table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`costumerName`);

--
-- Index pour la table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD PRIMARY KEY (`orderId`);

--
-- Index pour la table `shippinginfo`
--
ALTER TABLE `shippinginfo`
  ADD PRIMARY KEY (`shippingId`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `orderdetails`
--
ALTER TABLE `orderdetails`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `shippinginfo`
--
ALTER TABLE `shippinginfo`
  MODIFY `shippingId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(254) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
