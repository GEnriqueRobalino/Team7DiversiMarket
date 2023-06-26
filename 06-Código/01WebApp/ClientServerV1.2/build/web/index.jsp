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
    <style>
        body {
            background-color: #f1f1f1;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            text-align: center;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            margin-top: 100px;
        }
        
        h1 {
            color: #333;
        }
        
        h2 {
            color: #666;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Bienvenido a DiversiMarket</h1>
        
        <h2>Opciones:</h2>
        <a href="Controlador?accion=addProducts"><button class="btn btn-success">Añadir Productos</button></a>
        <a href="Controlador?accion=addClient"><button class="btn btn-success">Añadir Clientes</button></a>
        <a href="Controlador?accion=listProducts"><button class="btn btn-success">Ver Productos</button></a>
        <a href="Controlador?accion=listClients"><button class="btn btn-success">Ver Clientes</button></a>
    </div>
</body>
</html>
