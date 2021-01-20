create database Bandas;
use Bandas;

create table bandas (
id_banda int not null primary key auto_increment,
nombre varchar(100) not null,
integrantes int not null,
fecha_inicio date not null,
fecha_separacion date,
pais varchar(100) not null
)

create table canciones (
id_cancion int not null primary key auto_increment,
nombre varchar(100) not null,
duracion int not null,
album int not null,
banda int not null,
fecha_publicacion date not null
)

create table albumes (
id_album int not null primary key auto_increment,
nombre_album varchar(100) not null,
banda int not null,
fecha_publicacion date not null
)

-- insetar datos a las tablas creadas

-- tabla bandas

insert into bandas (nombre, integrantes, fecha_inicio, pais)
values ('mana', 5, '1994-06-12', 'Mexico')

insert into bandas (nombre, integrantes, fecha_inicio, pais)
values ('morat', 4, '2010-08-20', 'Colombia')

insert into bandas (nombre, integrantes, fecha_inicio, fecha_separacion, pais)
values ('Guns and roses', 3, '1985-06-20', '1997-07-30', 'Estados Unidos')

insert into bandas (nombre, integrantes, fecha_inicio, pais)
values ('highway', 3, '2015-06-25', 'Mexico')

insert into bandas (nombre, integrantes, fecha_inicio, fecha_separacion, pais)
values ('heroes', 4, '1994-08-19', '2015-05-15', 'argentina')

-- tabla canciones

insert into canciones (nombre, duracion, album, banda, fecha_publicacion) -- duracion en segundos  banda con id
values ('loco', 300, 3, 1, '2000-04-17')

insert into canciones (nombre, duracion, album, banda, fecha_publicacion)
values ('nubes negras', 250, 1, 2, '2012-02-02')

insert into canciones (nombre, duracion, album, banda, fecha_publicacion)
values ('white', 350, 5, 3, '1994-02-02')

insert into canciones (nombre, duracion, album, banda, fecha_publicacion)
values ('soul', 200, 2, 4, '2019-02-02')

insert into canciones (nombre, duracion, album, banda, fecha_publicacion)
values ('chicas', 300, 4, 5, '2013-03-10')

insert into canciones (nombre, duracion, album, banda, fecha_publicacion)
values ('la cama incendiada', 250, 9, 1, '2015-01-15')

-- tabla albumes

insert into albumes (nombre_album, banda, fecha_publicacion)
values ('destino', 1, '2000-04-17')

insert into albumes (nombre_album, banda, fecha_publicacion)
values ('amor', 2, '2012-02-02')

insert into albumes (nombre_album, banda, fecha_publicacion)
values ('matter', 3, '1994-02-02')

insert into albumes (nombre_album, banda, fecha_publicacion)
values ('luna lunera', 4, '2019-02-02')

insert into albumes (nombre_album, banda, fecha_publicacion)
values ('rodando', 5, '2013-03-10')

insert into albumes (nombre_album, banda, fecha_publicacion)
values ('cama incendiada', 1, '2015-01-15')

-- ejecutar queries

-- obtener todas las bandas

select nombre
from bandas;

-- obtener todas las bandas de tu pais

select nombre, pais  
from bandas 
where pais like '%colombia%'

-- obtener una banda solista

select  nombre, integrantes
from bandas
where integrantes = 1

-- obtener todas las canciones publicadas despues del 2015

select nombre, fecha_publicacion
from canciones
where fecha_publicacion like '%2015%'

-- obtener todas las canciones que duren mas de 3 minutos

select nombre, duracion
from canciones
where duracion >= 180

-- obtener todos los albumes

select nombre_album
from albumes
