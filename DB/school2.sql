-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 15, 2021 at 04:51 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `school2`
--

-- --------------------------------------------------------

--
-- Table structure for table `matricula`
--

CREATE TABLE `matricula` (
  `id_student` int(11) NOT NULL,
  `id_UF` int(11) NOT NULL,
  `score` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `lastname1` varchar(40) NOT NULL,
  `lastname2` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `name`, `lastname1`, `lastname2`) VALUES
(1, 'Emilio', 'Rodríguez', 'Botier'),
(2, 'Tyrone', 'Botier', 'Ab'),
(3, 'Daniela', 'Espósito', 'I do not know');

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `lastname1` varchar(40) NOT NULL,
  `lastname2` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`id`, `name`, `lastname1`, `lastname2`) VALUES
(1, 'Ruben', 'Sánchez', 'IDK'),
(2, 'Alex', 'Ríos', 'IDK'),
(3, 'Tony', 'Manresa', 'IDK'),
(4, 'Nuria', 'Roldan', 'IDK');

-- --------------------------------------------------------

--
-- Table structure for table `uf`
--

CREATE TABLE `uf` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `id_teacher` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `uf`
--

INSERT INTO `uf` (`id`, `title`, `id_teacher`) VALUES
(1, 'Introdución a Php', 1),
(2, 'Introducion a Linux', NULL),
(3, 'Programación Orientada a objetos', 3),
(4, 'Introdución a Baase de Datos', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `matricula`
--
ALTER TABLE `matricula`
  ADD KEY `FK_student` (`id_student`),
  ADD KEY `FK_UF` (`id_UF`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `uf`
--
ALTER TABLE `uf`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_teacherid` (`id_teacher`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `uf`
--
ALTER TABLE `uf`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `matricula`
--
ALTER TABLE `matricula`
  ADD CONSTRAINT `FK_UF` FOREIGN KEY (`id_UF`) REFERENCES `uf` (`id`),
  ADD CONSTRAINT `FK_student` FOREIGN KEY (`id_student`) REFERENCES `student` (`id`);

--
-- Constraints for table `uf`
--
ALTER TABLE `uf`
  ADD CONSTRAINT `FK_teacherid` FOREIGN KEY (`id_teacher`) REFERENCES `teacher` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
