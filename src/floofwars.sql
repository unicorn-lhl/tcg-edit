-- phpMyAdmin SQL Dump
-- version 3.3.9.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 15, 2013 at 02:39 PM
-- Server version: 5.1.70
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `floofwars`
--

-- --------------------------------------------------------

--
-- Table structure for table `abilities`
--

CREATE TABLE IF NOT EXISTS `abilities` (
  `ability_id` int(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) COLLATE utf8_bin NOT NULL,
  `description` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`ability_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=3 ;

--
-- Dumping data for table `abilities`
--

INSERT INTO `abilities` (`ability_id`, `name`, `description`) VALUES
(1, 'Trample', ''),
(2, 'Crazy Stare', 0x32202b207a7a7a202d2054617267657420666c6f6f6620686173202d31204f6f662074686973207475726e);

-- --------------------------------------------------------

--
-- Table structure for table `cards`
--

CREATE TABLE IF NOT EXISTS `cards` (
  `card_id` int(8) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) COLLATE utf8_bin NOT NULL,
  `type` int(4) NOT NULL,
  `flavour` text COLLATE utf8_bin NOT NULL,
  `card_no` int(4) NOT NULL,
  `set_no` int(4) NOT NULL,
  `rarity` int(4) NOT NULL,
  PRIMARY KEY (`card_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=2 ;

--
-- Dumping data for table `cards`
--

INSERT INTO `cards` (`card_id`, `name`, `type`, `flavour`, `card_no`, `set_no`, `rarity`) VALUES
(1, 'Badass', 1, 0x546869732061696e277420796f7572206c6974746c6520706f6e792e, 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `card_abilities`
--

CREATE TABLE IF NOT EXISTS `card_abilities` (
  `card_id` int(8) NOT NULL,
  `ability_id` int(4) NOT NULL,
  `cost` varchar(255) COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `card_abilities`
--

INSERT INTO `card_abilities` (`card_id`, `ability_id`, `cost`) VALUES
(1, 1, ''),
(1, 2, '');

-- --------------------------------------------------------

--
-- Table structure for table `card_costs`
--

CREATE TABLE IF NOT EXISTS `card_costs` (
  `card_id` int(8) NOT NULL,
  `cost` varchar(255) COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `card_costs`
--


-- --------------------------------------------------------

--
-- Table structure for table `card_family`
--

CREATE TABLE IF NOT EXISTS `card_family` (
  `card_id` int(4) NOT NULL,
  `family_id` int(8) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `card_family`
--

INSERT INTO `card_family` (`card_id`, `family_id`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `card_species`
--

CREATE TABLE IF NOT EXISTS `card_species` (
  `card_id` int(8) NOT NULL,
  `species_id` int(4) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `card_species`
--

INSERT INTO `card_species` (`card_id`, `species_id`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `family`
--

CREATE TABLE IF NOT EXISTS `family` (
  `family_id` int(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`family_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=2 ;

--
-- Dumping data for table `family`
--

INSERT INTO `family` (`family_id`, `name`) VALUES
(1, 'Hawrsee');

-- --------------------------------------------------------

--
-- Table structure for table `rarity`
--

CREATE TABLE IF NOT EXISTS `rarity` (
  `rarity_id` int(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`rarity_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1 ;

--
-- Dumping data for table `rarity`
--


-- --------------------------------------------------------

--
-- Table structure for table `sets`
--

CREATE TABLE IF NOT EXISTS `sets` (
  `set_id` int(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`set_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1 ;

--
-- Dumping data for table `sets`
--


-- --------------------------------------------------------

--
-- Table structure for table `species`
--

CREATE TABLE IF NOT EXISTS `species` (
  `species_id` int(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`species_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=2 ;

--
-- Dumping data for table `species`
--

INSERT INTO `species` (`species_id`, `name`) VALUES
(1, 'Donkey');

-- --------------------------------------------------------

--
-- Table structure for table `types`
--

CREATE TABLE IF NOT EXISTS `types` (
  `type_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`type_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=3 ;

--
-- Dumping data for table `types`
--

INSERT INTO `types` (`type_id`, `name`) VALUES
(1, 'floof'),
(2, 'resource');
