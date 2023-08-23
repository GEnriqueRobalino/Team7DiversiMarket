<%-- 
    Document   : addProduct
    Created on : 22/05/2023, 12:37:14
    Author     : Gabriel
--%>

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
            <h1 class="text-center">Agregar Cliente</h1>
            <form action="Controlador">
                <div class="row mt-4">
                    <div class="col">
                        <label>Id: </label>
                        <input type="number" name="id" class="form-control" />
                    </div>
                    <div class="col">
                        <label>Nombres: </label>
                        <input type="text" name="name" class="form-control" />
                    </div>
                    <div class="col">
                        <label>Cedula: </label>
                        <input type="text" name="cedula" class="form-control" />
                    </div>
                    <div class="col">
                        <label>Email: </label>
                        <input type="text" name="email" class="form-control" />
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col">
                        <p class="text-center">
                            <button
                                type="submit"
                                value="AgregarCliente"
                                name="accion"
                                class="btn btn-success"
                                >
                                Agregar
                            </button>
                            <button
                                type="submit"
                                value=""
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

