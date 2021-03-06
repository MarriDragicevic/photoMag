-- phpMyAdmin SQL Dump
-- version 4.2.0
-- http://www.phpmyadmin.net
--
-- Värd: localhost
-- Tid vid skapande: 17 feb 2015 kl 09:56
-- Serverversion: 5.6.17
-- PHP-version: 5.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Databas: `photoMag2`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `footer`
--

CREATE TABLE IF NOT EXISTS `footer` (
  `name` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `postalcode` int(11) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `info` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellstruktur `images`
--

CREATE TABLE IF NOT EXISTS `images` (
`iid` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `alt` varchar(255) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `uploaded` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Tabellstruktur `menus`
--

CREATE TABLE IF NOT EXISTS `menus` (
  `menu_name` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `machine_name` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `menus`
--

INSERT INTO `menus` (`menu_name`, `machine_name`) VALUES
('my_menu', 'my_menu_machine_name');

-- --------------------------------------------------------

--
-- Tabellstruktur `menu_links`
--

CREATE TABLE IF NOT EXISTS `menu_links` (
`mlid` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `menu` varchar(255) NOT NULL,
  `plid` int(11) DEFAULT NULL,
  `weight` int(11) DEFAULT '0'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumpning av Data i tabell `menu_links`
--

INSERT INTO `menu_links` (`mlid`, `title`, `path`, `menu`, `plid`, `weight`) VALUES
(1, 'ewqweqwewq', 'eqwweqwe', 'my_menu_machine_name', NULL, 0);

-- --------------------------------------------------------

--
-- Tabellstruktur `pages`
--

CREATE TABLE IF NOT EXISTS `pages` (
`pid` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `img_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `video_id` int(11) DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumpning av Data i tabell `pages`
--

INSERT INTO `pages` (`pid`, `title`, `body`, `img_id`, `user_id`, `video_id`, `created`) VALUES
(1, 'qweqweqwqw', 'qweqweqwe', NULL, 1, NULL, '2015-02-13 15:51:59');

-- --------------------------------------------------------

--
-- Tabellstruktur `url_alias`
--

CREATE TABLE IF NOT EXISTS `url_alias` (
`aid` int(11) NOT NULL,
  `path` varchar(255) NOT NULL,
  `pid` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumpning av Data i tabell `url_alias`
--

INSERT INTO `url_alias` (`aid`, `path`, `pid`) VALUES
(1, 'eqwweqwe', 1);

-- --------------------------------------------------------

--
-- Tabellstruktur `users`
--

CREATE TABLE IF NOT EXISTS `users` (
`uid` int(11) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `description` text,
  `joined` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumpning av Data i tabell `users`
--

INSERT INTO `users` (`uid`, `fname`, `lname`, `email`, `pass`, `description`, `joined`) VALUES
(1, 'Marjana', 'Dragicevic', 'marri@live.se', '0000', NULL, '2015-01-23 09:24:05');

-- --------------------------------------------------------

--
-- Tabellstruktur `video`
--

CREATE TABLE IF NOT EXISTS `video` (
`vid` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `alt` varchar(255) DEFAULT NULL,
  `description` text,
  `user_id` int(11) NOT NULL,
  `uploaded` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `images`
--
ALTER TABLE `images`
 ADD PRIMARY KEY (`iid`), ADD KEY `user_id` (`user_id`);

--
-- Index för tabell `menus`
--
ALTER TABLE `menus`
 ADD PRIMARY KEY (`machine_name`);

--
-- Index för tabell `menu_links`
--
ALTER TABLE `menu_links`
 ADD PRIMARY KEY (`mlid`), ADD KEY `plid` (`plid`), ADD KEY `path` (`path`);

--
-- Index för tabell `pages`
--
ALTER TABLE `pages`
 ADD PRIMARY KEY (`pid`), ADD KEY `user_id` (`user_id`), ADD KEY `img_id` (`img_id`), ADD KEY `video_id` (`video_id`);

--
-- Index för tabell `url_alias`
--
ALTER TABLE `url_alias`
 ADD PRIMARY KEY (`aid`), ADD UNIQUE KEY `path` (`path`), ADD KEY `pid` (`pid`);

--
-- Index för tabell `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`uid`), ADD UNIQUE KEY `email` (`email`);

--
-- Index för tabell `video`
--
ALTER TABLE `video`
 ADD PRIMARY KEY (`vid`), ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `images`
--
ALTER TABLE `images`
MODIFY `iid` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT för tabell `menu_links`
--
ALTER TABLE `menu_links`
MODIFY `mlid` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT för tabell `pages`
--
ALTER TABLE `pages`
MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT för tabell `url_alias`
--
ALTER TABLE `url_alias`
MODIFY `aid` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT för tabell `users`
--
ALTER TABLE `users`
MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT för tabell `video`
--
ALTER TABLE `video`
MODIFY `vid` int(11) NOT NULL AUTO_INCREMENT;
--
-- Restriktioner för dumpade tabeller
--

--
-- Restriktioner för tabell `images`
--
ALTER TABLE `images`
ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`uid`);

--
-- Restriktioner för tabell `menu_links`
--
ALTER TABLE `menu_links`
ADD CONSTRAINT `menu_links_ibfk_1` FOREIGN KEY (`plid`) REFERENCES `menu_links` (`mlid`);

--
-- Restriktioner för tabell `pages`
--
ALTER TABLE `pages`
ADD CONSTRAINT `pages_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`uid`),
ADD CONSTRAINT `pages_ibfk_2` FOREIGN KEY (`img_id`) REFERENCES `images` (`iid`),
ADD CONSTRAINT `pages_ibfk_3` FOREIGN KEY (`video_id`) REFERENCES `video` (`vid`);

--
-- Restriktioner för tabell `url_alias`
--
ALTER TABLE `url_alias`
ADD CONSTRAINT `url_alias_ibfk_1` FOREIGN KEY (`pid`) REFERENCES `pages` (`pid`);

--
-- Restriktioner för tabell `video`
--
ALTER TABLE `video`
ADD CONSTRAINT `video_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`uid`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
