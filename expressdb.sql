-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-11-2020 a las 15:02:22
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `expressdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `ID` int(11) NOT NULL,
  `correo` varchar(60) COLLATE latin1_general_ci NOT NULL,
  `clave` varchar(60) COLLATE latin1_general_ci NOT NULL,
  `nombre` varchar(60) COLLATE latin1_general_ci NOT NULL,
  `apellido` varchar(60) COLLATE latin1_general_ci NOT NULL,
  `perfil` varchar(60) COLLATE latin1_general_ci NOT NULL,
  `foto` varchar(60) COLLATE latin1_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`ID`, `correo`, `clave`, `nombre`, `apellido`, `perfil`, `foto`) VALUES
(1, 'pepito@gmail.com', '123', 'pepo', 'palta', 'encargado', 'palta.210155.jpg'),
(2, 'a@b.com', '123', 'james', 'von', 'encargado', 'von.234947.png'),
(3, 'a@b.com', '123', 'james', 'von', 'encargado', 'von.235025.png'),
(4, 'null', '123', 'james', 'von', 'encargado', 'von.235041.png'),
(5, 'NULL', '123', 'james', 'von', 'encargado', 'von.235049.png'),
(6, 'abc@gmail.com', '123', 'james', 'von', 'encargado', 'von.00056.png'),
(7, 'abc@gmail.com', '123', 'james', 'von', 'encargado', 'von.00130.png'),
(8, 'abc@gmail.com', '123', 'james', 'von', 'encargado', 'von.00138.png'),
(9, 'bbb@gmail.com', '123', 'james', 'von', 'encargado', 'von.00205.png'),
(10, 'albert@gmail.com', '123', 'albert', 'test', 'encargado', 'test.01426.png'),
(11, 'fercho@gmail.com', '123', 'fercho', 'perez', 'encargado', 'perez.03318.png'),
(12, 'fercho@gmail.com', '123456', 'fercho', 'perez', 'encargado', 'perez.140034.png'),
(13, 'AAAA@gmail.com', '123456', 'aga', 'perez', 'encargado', 'perez.140118.png'),
(14, 'ava@gmail.com', '123456', 'vala', 'perez', 'encargado', 'perez.140150.png'),
(15, 'admin@gmail.com', '123456', 'admin', 'perez', 'propietario', 'perez.154412.png'),
(16, 'kaka@gmail.com', '123456', 'acca', 'perez', 'propietario', 'perez.161339.png');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
