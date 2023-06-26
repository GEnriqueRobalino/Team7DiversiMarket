<%-- 
    Document   : updateProduct
    Created on : 22/05/2023, 12:38:36
    Author     : Gabriel
--%>

<%@page import="ec.edu.espe.clientserver.model.Client"%>
<%@page import="ec.edu.espe.clientserver.modelDAO.ClientDAO"%>
<%@page import="ec.edu.espe.clientserver.model.Product"%>
<%@page import="ec.edu.espe.clientserver.modelDAO.ProductDAO"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous"
            />
        <title>JSP Page</title>
    </head>
    <body>
        <div class="container mt-4">
            <% ClientDAO clientDAO = new ClientDAO();
                int id = Integer.parseInt((String) request.getAttribute("id"));
                Client client = (Client) clientDAO.listClient(id);%>
            <h1 class="text-center mt-4">Modificar Cliente</h1>
            <form action="Controlador">
                <div class="row mt-4">
                    <input type="hidden" name="idClient" value="<%= client.getId()%>" />
                    <div class="col">
                        <label>Nombre: </label>
                        <input
                            type="text"
                            name="name"
                            value="<%= client.getName()%>"
                            class="form-control"
                            />
                    </div>
                    <div class="col">
                        <label>Cédula: </label>
                        <input
                            type="text"
                            name="cedula"
                            value="<%= client.getCedula()%>"
                            class="form-control"
                            />
                    </div>
                    <div class="col">
                        <label>Email: </label>
                        <input
                            type="text"
                            name="email"
                            value="<%= client.getEmail()%>"
                            class="form-control"
                            />
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col">
                        <p>
                            <button
                                type="submit"
                                value="ModificarCliente"
                                name="accion"
                                class="btn btn-primary"
                                >
                                Confirmar
                            </button>
                            <button
                                type="submit"
                                value="listClients"
                                name="accion"
                                class="btn btn-danger"
                                >
                                Cancelar
                            </button>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    </body>
</html>

