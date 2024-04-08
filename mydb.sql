-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.28-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for demo_jwt
CREATE DATABASE IF NOT EXISTS `demo_jwt` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `demo_jwt`;

-- Dumping structure for table demo_jwt.group
CREATE TABLE IF NOT EXISTS `Group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table demo_jwt.group: ~4 rows (approximately)
INSERT INTO `Group` (`id`, `name`, `description`, `createdAt`, `updatedAt`) VALUES
	(1, 'Dev', 'developer', '2024-02-27 14:00:58', '2024-02-27 14:00:58'),
	(2, 'Leader', 'Leader', '2024-02-29 15:31:07', '2024-02-29 15:31:07'),
	(3, 'Customer', 'Customer', '2024-02-29 15:31:07', '2024-02-29 15:31:07'),
	(4, 'Guest', 'View only', '2024-03-01 12:29:15', '2024-03-01 12:29:15');

-- Dumping structure for table demo_jwt.group_role
CREATE TABLE IF NOT EXISTS `Group_Role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `groupId` int(11) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table demo_jwt.group_role: ~13 rows (approximately)
INSERT INTO `Group_Role` (`id`, `groupId`, `roleId`, `createdAt`, `updatedAt`) VALUES
	(26, 1, 26, '2024-03-04 10:08:08', '2024-03-04 10:08:08'),
	(27, 1, 25, '2024-03-04 10:08:08', '2024-03-04 10:08:08'),
	(28, 1, 20, '2024-03-04 10:08:08', '2024-03-04 10:08:08'),
	(29, 1, 14, '2024-03-04 10:08:08', '2024-03-04 10:08:08'),
	(30, 1, 6, '2024-03-04 10:08:08', '2024-03-04 10:08:08'),
	(31, 1, 5, '2024-03-04 10:08:08', '2024-03-04 10:08:08'),
	(32, 1, 4, '2024-03-04 10:08:08', '2024-03-04 10:08:08'),
	(33, 1, 3, '2024-03-04 10:08:08', '2024-03-04 10:08:08'),
	(34, 1, 2, '2024-03-04 10:08:08', '2024-03-04 10:08:08'),
	(35, 1, 1, '2024-03-04 10:08:08', '2024-03-04 10:08:08'),
	(36, 3, 14, '2024-03-04 10:09:47', '2024-03-04 10:09:47'),
	(37, 3, 5, '2024-03-04 10:09:47', '2024-03-04 10:09:47'),
	(38, 3, 1, '2024-03-04 10:09:47', '2024-03-04 10:09:47');

-- Dumping structure for table demo_jwt.project
CREATE TABLE IF NOT EXISTS `Project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `startDate` varchar(255) DEFAULT NULL,
  `customerId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table demo_jwt.project: ~0 rows (approximately)

-- Dumping structure for table demo_jwt.project_user
CREATE TABLE IF NOT EXISTS `Project_User` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `projectId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table demo_jwt.project_user: ~0 rows (approximately)

-- Dumping structure for table demo_jwt.role
CREATE TABLE IF NOT EXISTS `Role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table demo_jwt.role: ~10 rows (approximately)
INSERT INTO `Role` (`id`, `url`, `description`, `createdAt`, `updatedAt`) VALUES
	(1, '/user/read', 'show all users', '2024-02-27 14:02:15', '2024-02-27 14:02:15'),
	(2, '/user/create', 'edit user', '2024-02-27 14:02:15', '2024-02-27 14:02:15'),
	(3, '/user/update', 'delete user', '2024-02-27 14:03:25', '2024-02-27 14:03:25'),
	(4, '/user/delete', NULL, '2024-03-02 05:06:42', '2024-03-02 05:06:42'),
	(5, '/group/read', NULL, '2024-03-02 05:06:42', '2024-03-02 05:06:42'),
	(6, '/role/create', 'Create roles', '2024-03-03 12:42:45', '2024-03-03 12:42:45'),
	(14, '/role/read', 'Read all roles', '2024-03-03 14:20:15', '2024-03-03 14:20:15'),
	(20, '/role/delete', '', '2024-03-03 14:29:57', '2024-03-03 14:29:57'),
	(25, '/role/by-group', '', '2024-03-03 16:56:58', '2024-03-03 16:56:58'),
	(26, '/role/assign-to-group', 'Assign roles to group', '2024-03-04 09:54:17', '2024-03-04 09:54:17');


-- Dumping structure for table demo_jwt.user
CREATE TABLE IF NOT EXISTS `User` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `groupId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table demo_jwt.user: ~18 rows (approximately)
INSERT INTO `User` (`id`, `email`, `password`, `username`, `address`, `sex`, `phone`, `groupId`, `createdAt`, `updatedAt`) VALUES
	(1, 'thinhvq18112002@gmail.com', '$2a$10$lKwpHdg/zKglvtmz6izBYO2cO8Y.OIcDLbZnGgRm5Y8jNsjyvpSea', 'vincent18', NULL, NULL, '0797322972', 1, '2024-02-27 12:59:24', '2024-02-27 12:59:24'),
	(2, 'thinhtapao18112002@gmail.com', '$2a$10$SnlsNRcCdeu4eNiwl0fytugcLjKwgT8MjSlXjb4QFwpBvuc7j2Eg.', 'vincent', NULL, NULL, '0797322973', 0, '2024-02-28 13:25:03', '2024-02-28 13:25:03'),
	(3, 'thinhvq181102@gmail.com', '$2a$10$dhdmpHBhQB.6jIhobYpTtu7Mmuls1olYQlZVfz8lmeA91Io08Ekeq', 'kaiser', NULL, NULL, '0899774352', 0, '2024-02-28 13:30:16', '2024-02-28 13:30:16'),
	(5, 'thinh18112002@gmail.com', '$2a$10$b.cQ3XzDmsqEoxdZv3IOiuYPvSvGrEp2WYLT3FaN.e/eJ4TYMaEh6', 'sdfsd', NULL, NULL, '0899774250', 0, '2024-02-28 13:55:01', '2024-02-28 13:55:01'),
	(6, 'thinhvq18112002@gmail.c', '$2a$10$Of4iMy9NoWrxvlmm61YA2O2ajVTCgWG62SPrmGIBXaJOdtfQp55Eq', '123456', NULL, NULL, '0899774350', 0, '2024-02-28 14:16:24', '2024-02-28 14:16:24'),
	(7, 'thinhvq18112002@gmail.coms', '$2a$10$WRL.Hajw5/806nI4YLHxyefOR/gTJMYaPcm5qDHS6l8a841n4pVr.', '123', NULL, NULL, '0899774354', 3, '2024-02-28 14:19:11', '2024-03-04 16:25:07'),
	(8, 'thinhvq181120021@gmail.com', '$2a$10$Of5sAtI4LYCp2pud84kVmOXNTB7qpXvWJuq59CqCWTzkIQvhBZ6KO', 'vincent1', NULL, NULL, '0899774351', 1, '2024-02-29 05:28:04', '2024-03-04 16:24:55'),
	(12, 'test1', 'ádasd', 'ádas', 'ádasdasd', '', '123', 3, '2024-02-29 17:01:17', '2024-02-29 17:01:17'),
	(13, 'test1a', 'ádasd', 'ádas', 'ádasdasd', '', '0899774350a', 3, '2024-02-29 17:25:57', '2024-02-29 17:25:57'),
	(15, 'thinhvq1811200@gmail.com', 'ádasd', 'hkjhk', 'ádadas', '', '0899774359', 3, '2024-03-01 02:22:30', '2024-03-01 02:22:30'),
	(16, 'thinhvq1811202@gmail.com', 'fsdfsf', 'sdfsdfsd', 'ádadas', 'Male', '0899776350', 3, '2024-03-01 02:24:04', '2024-03-01 02:24:04'),
	(17, 'thinhvq0811202@gmail.com', 'ádasd', 'sdfsdfsd', 'ádadas', 'Female', '0894776350', 3, '2024-03-01 02:24:31', '2024-03-01 02:24:31'),
	(18, 'thinhvq1112002@gmail.com', '$2a$10$30EEgAWBqqWv7Hj3F5Fy3Otu8yoCWYZWkIAUrNeqK908KP/0FacNW', 'sdfsdf', 'ádadas', 'Male', '089774350', 3, '2024-03-01 02:31:09', '2024-03-01 02:31:09'),
	(19, 'thinhvq112002@gmail.com', '$2a$10$xQNwaSbbAtdEPWHnGC/PYOorrmBbqLdEveio1JhJWnoxIzPzoyXVu', 'jhkjkjjk', 'ádadas', 'Male', '08974350', 3, '2024-03-01 04:50:41', '2024-03-01 04:50:41'),
	(20, 'thinhvq1@gmail.com', '$2a$10$xQNwaSbbAtdEPWHnGC/PYOI4X027srwS8KxGHNV14Zyx0YbzPA9kq', 'jhkjkjjk', 'ádadas', 'Male', '074350', 3, '2024-03-01 05:00:19', '2024-03-01 05:00:19'),
	(21, 'thinhvq18112002áda@gmail.com', '$2a$10$xQNwaSbbAtdEPWHnGC/PYOfjZlci6YuP.A/uehPkBxj0lW10B70WG', 'Vincent', 'ádadas', 'Male', '08949774350', 3, '2024-03-01 05:04:30', '2024-03-01 07:22:40'),
	(23, 'thinhvq1ád8112002@gmail.com', '$2a$10$kIKxC50OPZmuztA4fFAfb.WUCjzxV.XxGSBSi.Wn98T3K.Jbg6/cS', 'ádasd', NULL, NULL, '08997743áda50', 4, '2024-03-01 11:33:07', '2024-03-01 11:33:07'),
	(24, 'thinhvq181128002@gmail.com', '$2a$10$kIKxC50OPZmuztA4fFAfb.WUCjzxV.XxGSBSi.Wn98T3K.Jbg6/cS', 'ggjhjg', NULL, NULL, '08997743580', 4, '2024-03-01 11:37:08', '2024-03-01 11:37:08');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
