/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.espe.clientserver.modelDAO;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import static com.mongodb.client.model.Filters.eq;
import ec.edu.espe.clientserver.connectionDB.MongoDBConnection;
import ec.edu.espe.clientserver.interfaces.ClientCrud;
import ec.edu.espe.clientserver.model.Client;
import ec.edu.espe.clientserver.model.Product;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import org.bson.Document;

/**
 *
 * @author Gabriel
 */
public class ClientDAO implements ClientCrud {

    MongoDBConnection connectionMySQL = new MongoDBConnection();
    Connection connection;
    PreparedStatement preparedStatement;
    ResultSet resultSet;
    Client client = new Client();

    @Override
    public List listClients() {

        List<Client> clients = new ArrayList<>();
        try {
            MongoDBConnection mongoDBConnection = new MongoDBConnection();

            MongoDatabase database = mongoDBConnection.connection();
            MongoCollection collection = database.getCollection("Clientes");
            MongoCursor<Document> cursor = collection.find().iterator();
            while (cursor.hasNext()) {
                
                client = new Client();

                JsonObject jsonObject = new JsonParser().parse(cursor.next().toJson()).getAsJsonObject();
                
                client.setId(jsonObject.get("id").getAsInt());
                client.setName(jsonObject.get("name").getAsString());
                client.setCedula(jsonObject.get("cedula").getAsInt());
                client.setEmail(jsonObject.get("email").getAsString());
                clients.add(client);
                
                
            }
        } catch (Exception e) {
            System.out.println("Error" + e);
        }
        
        return clients;
    }

    @Override
    public Client listClient(int id) {

        try {
            MongoDBConnection mongoDBConnection = new MongoDBConnection();
            MongoDatabase database = mongoDBConnection.connection();
            MongoCollection collection = database.getCollection("Clientes");
            MongoCursor<Document> cursor = collection.find(eq("id", id)).iterator();
            while (cursor.hasNext()) {

                JsonObject jsonObject = new JsonParser().parse(cursor.next().toJson()).getAsJsonObject();

                System.out.println(jsonObject);

                client.setId(jsonObject.get("id").getAsInt());
                client.setName(jsonObject.get("name").getAsString());
                client.setCedula(jsonObject.get("cedula").getAsInt());
                client.setEmail(jsonObject.get("email").getAsString());

            }
        } catch (Exception e) {
            System.out.println("Error " + e);
        }
        return client;
    }

    @Override
    public boolean addClient(Client client) {

        System.err.println(client);
        try {
            MongoDBConnection mongoDBConnection = new MongoDBConnection();
            MongoDatabase database = mongoDBConnection.connection();
            MongoCollection collection = database.getCollection("Clientes");

            String query = "{"
                    + "id: " + client.getId() + ","
                    + "name: " + "'" + client.getName() + "'" + ","
                    + "cedula: " + client.getCedula() + ","
                    + "email: " + "'"+ client.getEmail() + "'" + ","
                    + "}";

            collection.insertOne(Document.parse(query));

        } catch (Exception e) {
            System.out.println("Error " + e);
        }
        return false;
    }

    @Override
    public boolean updateClient(Client client) {
        String query = "{"
                    + "id: " + client.getId() + ","
                    + "name: " + "'" + client.getName() + "'" + ","
                    + "cedula: " + client.getCedula() + ","
                    + "email: " + "'"+ client.getEmail() + "'" + ","
                    + "}";
        try {
            MongoDBConnection mongoDBConnection = new MongoDBConnection();
            MongoDatabase database = mongoDBConnection.connection();
            MongoCollection collection = database.getCollection("Clientes");

            System.err.println(client.getName());

            collection.updateOne(eq("id", client.getId()), new Document("$set", Document.parse(query)));

        } catch (Exception e) {
            System.out.println("Error " + e);
        }
        return false;
    }

    @Override
    public boolean deleteClient(int id) {
        try {
            MongoDBConnection mongoDBConnection = new MongoDBConnection();
            MongoDatabase database = mongoDBConnection.connection();
            MongoCollection collection = database.getCollection("Clientes");

            collection.deleteOne(eq("id", id));

        } catch (Exception e) {
            System.out.println("Error " + e);
        }
        return false;
    }

    @Override
    public float calculateProfits(int quantity, float price) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

}
