package ec.edu.espe.clientserver.controller;

import ec.edu.espe.clientserver.model.Client;
import ec.edu.espe.clientserver.model.Product;
import ec.edu.espe.clientserver.modelDAO.ClientDAO;
import ec.edu.espe.clientserver.modelDAO.ProductDAO;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Gabriel
 */
public class Controlador extends HttpServlet {

    String listProduct = "jsps/listProducts.jsp";
    String listClient = "jsps/listClients.jsp";
    String addClient = "jsps/addClients.jsp";
    String addProduct = "jsps/addProducts.jsp";
    String updateProduct = "jsps/updateProducts.jsp";
    String updateClient = "jsps/updateClients.jsp";

    Client client = new Client();
    Product product = new Product();
    ProductDAO productDAO = new ProductDAO();
    ClientDAO clientDAO = new ClientDAO();
    int id;


    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Controlador</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet Controlador at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String access = "";
        String acction = request.getParameter("accion");
        switch (acction) {
            case "addClient": {
                access = addClient;
            }
            break;
            case "AgregarCliente": {
                int id = Integer.parseInt(request.getParameter("id"));
                String name = request.getParameter("name");
                int cedula = Integer.parseInt(request.getParameter("cedula"));
                String email = request.getParameter("email");
                client.setId(id);
                client.setName(name);
                client.setCedula(cedula);
                client.setEmail(email);
                clientDAO.addClient(client);
            }
            break;
            
            case "listClients":{
                access = listClient;
            }
            break;
            
            case "listProducts":{
                access = listProduct;
            }
            break;
            case "addProducts": {
                access = addProduct;
            }
            break;
            case "Agregar": {
                int id = Integer.parseInt(request.getParameter("id"));
                String name = request.getParameter("name");
                float price = Float.parseFloat(request.getParameter("price"));
                int quantity = Integer.parseInt(request.getParameter("quantity"));
                float profit = productDAO.calculateProfits(quantity, price);
                product.setId(id);
                product.setName(name);
                product.setPrice(price);
                product.setQuantity(quantity);
                product.setProfit(profit);
                productDAO.addProduct(product);
            }
            break;
            case "updateProduct": {
                request.setAttribute("id", request.getParameter("id"));
                access = updateProduct;
            }
            break;
            case "Actualizar": {
                product = new Product();
                id = Integer.parseInt(request.getParameter("idProduct"));
                String name = request.getParameter("name");
                float price = Float.parseFloat(request.getParameter("price"));
                int quantity = Integer.parseInt(request.getParameter("quantity"));
                float profit = productDAO.calculateProfits(quantity, price);
                product.setId(id);
                product.setName(name);
                product.setPrice(price);
                product.setQuantity(quantity);
                product.setProfit(profit);
                productDAO.updateProduct(product);
            }
            break;
            case "deleteProduct": {
                id = Integer.parseInt(request.getParameter("id"));
                product.setId(id);
                productDAO.deleteProduct(id);
            }
            break;
            
            case "updateClient": {
                request.setAttribute("id", request.getParameter("id"));
                access = updateClient;
            }
            break;
            case "ModificarCliente": {
                client = new Client();
                id = Integer.parseInt(request.getParameter("idClient"));
                String name = request.getParameter("name");
                int cedula = Integer.parseInt(request.getParameter("cedula"));
                String email = request.getParameter("email");
                client.setId(id);
                client.setName(name);
                client.setCedula(cedula);
                client.setEmail(email);
                clientDAO.updateClient(client);
            }
            break;
            case "deleteClient": {
                id = Integer.parseInt(request.getParameter("id"));
                client.setId(id);
                clientDAO.deleteClient(id);
            }
            break;           

        }
        RequestDispatcher view = request.getRequestDispatcher(access);
        view.forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
