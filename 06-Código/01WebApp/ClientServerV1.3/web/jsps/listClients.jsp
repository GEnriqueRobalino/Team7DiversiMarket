<%-- 
    Document   : index
    Created on : 22/05/2023, 12:33:19
    Author     : Gabriel
--%>

<%@page import="ec.edu.espe.clientserver.model.Client"%>
<%@page import="ec.edu.espe.clientserver.modelDAO.ClientDAO"%>
<%@page import="ec.edu.espe.clientserver.model.Product"%>
<%@page import="ec.edu.espe.clientserver.modelDAO.ProductDAO"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
              rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
              crossorigin="anonymous">
        <title>JSP Page</title>
    </head>
    <body>
        <div class="container mt-4">
            <h1 class="text-center mt-4">Lista de Clientes</h1>
            <table class="table table-dark mt-4">
                <thead>
                    <tr>
                        <th class="text-center">ID</th>
                        <th class="text-center">Nombre</th>
                        <th class="text-center">Cédula</th>
                        <th class="text-center">Email</th>
                        <th class="text-center">Editar</th>
                        <th class="text-center">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <% 
                        ClientDAO clientDAO = new ClientDAO();
                        List<Client> list = clientDAO.listClients();
                        for (Client client : list) {
                    %>
                    <tr>
                        <td class="text-center"><%= client.getId()%></td>
                        <td class="text-center"><%= client.getName()%></td>
                        <td class="text-center"><%= client.getCedula()%></td>
                        <td class="text-center"><%= client.getEmail()%></td>
                        <td class="text-center">
                            <a href="Controlador?accion=updateClient&id=<%= client.getId()%>">
                                <button class="btn btn-primary">
                                    Editar
                                </button>
                            </a>
                        </td>
                        <td class="text-center">
                            <a href="Controlador?accion=deleteClient&id=<%= client.getId()%>">
                                <button class="btn btn-danger">
                                    Eliminar
                                </button>
                            </a>
                        </td>
                    </tr>
                    <% } %>
                </tbody>
            </table>
            <a href="Controlador?accion=addClient">
                <button class="btn btn-success">
                    Agregar
                </button>
            </a>
            <a href="Controlador?accion=''">
                <button class="btn btn-danger">
                    Regresar
                </button>
            </a>                
        </div>
    </body>
</html>



