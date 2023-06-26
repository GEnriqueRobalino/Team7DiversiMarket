<%-- 
    Document   : index
    Created on : 24 jun. 2023, 14:27:49
    Author     : Gabriel
--%>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>DiversiMarket</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
              rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
              crossorigin="anonymous">
    <link href="css/estilos.css" rel="stylesheet" type="text/css"/>
</head>
<body>
    <div class="container">
        <div class="logo-container">
            <img class="logo-image" src="recursos/logodm.png" alt="Logo de la tienda">
        </div>
        
        <h1>Bienvenido a DiversiMarket</h1>
        
        <h2>Opciones:</h2>
        <a href="Controlador?accion=addProducts"><button class="btn btn-success">Añadir Productos</button></a>
        <a href="Controlador?accion=addClient"><button class="btn btn-success">Añadir Clientes</button></a>
        <a href="Controlador?accion=listProducts"><button class="btn btn-success">Ver Productos</button></a>
        <a href="Controlador?accion=listClients"><button class="btn btn-success">Ver Clientes</button></a>
    </div>
</body>
</html>

