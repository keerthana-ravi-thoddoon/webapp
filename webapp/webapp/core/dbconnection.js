const Sequelize = require('sequelize');
const db = {}
const sequelize = new Sequelize("userdb", "root", "password", 
{

  host:"localhost", dialect: "mysql", operatorsAliases: 0,

  pool:{
    max: 5,
    min: 0,
    acquire: 30000,
    idle:10000
  }
}
)
db.Sequelize = Sequelize;
db.sequelize = sequelize;

try{
 let users =
 " CREATE TABLE IF NOT EXISTS `users` ("+
   " `id` int(11) NOT NULL AUTO_INCREMENT,"+
   " `firstname` varchar(20) DEFAULT NULL,"+
   "`lastname` varchar(20) DEFAULT NULL," +
   " `password` varchar(128) DEFAULT NULL,"+
   "`email` varchar(50) DEFAULT NULL," +
   " `created` date DEFAULT NULL,"+
   " PRIMARY KEY (`id`),"+
   " KEY `id` (`id`)"+
  ") ENGINE=InnoDB AUTO_INCREMENT=119 DEFAULT CHARSET=latin1;"

  let books = 
  "CREATE TABLE IF NOT EXISTS `books` ("+
   " `ID` int(11) NOT NULL AUTO_INCREMENT,"+
   " `userid` int(11) DEFAULT NULL,"+
    "`isbn` varchar(15) NOT NULL,"+
   " `title` varchar(100) NOT NULL,"+
   " `authors` varchar(40) NOT NULL,"+
   " `publication_date` date DEFAULT NULL,"+
   " `quantity` int(11) NOT NULL,"+
   " `PRICE` double NOT NULL,"+
   " PRIMARY KEY (`ID`),"+
   " KEY `userid` (`userid`),"+
   " CONSTRAINT `books_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`id`)"+
   ") ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;" 

   let carts = 
   "CREATE TABLE IF NOT EXISTS `carts` ("+
   " `ID` int(11) NOT NULL AUTO_INCREMENT,"+
    "`bookid` int(11) DEFAULT NULL,"+
    "`userid` int(11) DEFAULT NULL,"+
    "`quantity` int(11) NOT NULL,"+
    "PRIMARY KEY (`ID`),"+
    "KEY `userid` (`userid`),"+
    "KEY `bookid` (`bookid`),"+
    "CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`id`),"+
    "CONSTRAINT `carts_ibfk_2` FOREIGN KEY (`bookid`) REFERENCES `books` (`ID`)"+
  ") ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;"
  
  let images =
  "CREATE TABLE IF NOT EXISTS `images` ("+
    "`id` int(11) NOT NULL AUTO_INCREMENT,"+
    "`bookid` int(11) NOT NULL,"+
    "`imagedata` varchar(500) NOT NULL,"+
    "PRIMARY KEY (`id`),"+
    "KEY `bookid` (`bookid`),"+
    "CONSTRAINT `images_ibfk_1` FOREIGN KEY (`bookid`) REFERENCES `books` (`ID`)"+
  ") ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;"

  sequelize.query(users).then(x => {
    sequelize.query(books).then(y => {
        sequelize.query(carts);
        sequelize.query(images);
    })
});
  
  
}
catch{

}

module.exports = db;