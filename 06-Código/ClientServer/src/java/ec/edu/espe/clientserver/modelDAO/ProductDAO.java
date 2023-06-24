package ec.edu.espe.clientserver.modelDAO;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import static com.mongodb.client.model.Filters.eq;
import ec.edu.espe.clientserver.connectionDB.MongoDBConnection;
import ec.edu.espe.clientserver.interfaces.ProductCrud;
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
public class ProductDAO implements ProductCrud {

    MongoDBConnection connectionMySQL = new MongoDBConnection();
    Connection connection;
    PreparedStatement preparedStatement;
    ResultSet resultSet;
    Product product = new Product();

    @Override
    public List listProducts() {
       List<Product> produtos = new ArrayList<>();
        try {
            MongoDBConnection mongoDBConnection = new MongoDBConnection();
            
            MongoDatabase database = mongoDBConnection.connection();
            MongoCollection collection = database.getCollection("Productos");
            MongoCursor<Document> cursor = collection.find().iterator();
            while (cursor.hasNext()) {
                Product product = new Product();
                
                JsonObject jsonObject = new JsonParser().parse(cursor.next().toJson()).getAsJsonObject();
                
                System.out.println(jsonObject);
                
                product.setId(jsonObject.get("id").getAsInt());
                product.setName(jsonObject.get("name").getAsString());
                product.setPrice(jsonObject.get("price").getAsFloat());
                product.setQuantity(jsonObject.get("quantity").getAsInt());
                product.setProfit(jsonObject.get("profit").getAsFloat());
                produtos.add(product);
            }
        } catch (Exception e) {
            System.out.println("Error" + e);
        }
        return produtos;
    }

    @Override
    public Product listProduct(int id) {
        Product product = new Product();
        try {
            MongoDBConnection mongoDBConnection = new MongoDBConnection();
            ArrayList<Product> produtos = new ArrayList<>();
            MongoDatabase database = mongoDBConnection.connection();
            MongoCollection collection = database.getCollection("Productos");
            MongoCursor<Document> cursor = collection.find(eq("id", id)).iterator();
            while (cursor.hasNext()) {
                
  
                JsonObject jsonObject = new JsonParser().parse(cursor.next().toJson()).getAsJsonObject();
                
                System.out.println(jsonObject);
                
                product.setId(jsonObject.get("id").getAsInt());
                product.setName(jsonObject.get("name").getAsString());
                product.setPrice(jsonObject.get("price").getAsFloat());
                product.setQuantity(jsonObject.get("quantity").getAsInt());
                product.setProfit(jsonObject.get("profit").getAsFloat());
            }
        } catch (Exception e) {
            System.out.println("Error " + e);
        }
        return product;
    }

    @Override
    public boolean addProduct(Product product) {
        
        try {
            MongoDBConnection mongoDBConnection = new MongoDBConnection();
            ArrayList<Product> produtos = new ArrayList<>();
            MongoDatabase database = mongoDBConnection.connection();
            MongoCollection collection = database.getCollection("Productos");
            
            String query = "{"
                + "id: " + product.getId()+","
                + "name: " +"'"+ product.getName() + "'"+","
                + "price: " + product.getPrice() +","
                + "quantity: " + product.getQuantity() +","
                + "profit: " + calculateProfits(product.getQuantity(), product.getPrice() )+","
                + "}";
            
            collection.insertOne(Document.parse(query));
            
        } catch (Exception e) {
            System.out.println("Error " + e);
        }
        return false;
    }

    @Override
    public boolean updateProduct(Product product) {
        String query = "{"
                + "id: " + product.getId() +","
                + "name: " +"'"+ product.getName() + "'"+","
                + "price: " + product.getPrice() +","
                + "quantity: " + product.getQuantity() +","
                + "profit: " + product.getProfit()+","
                + "}";
        try {
            MongoDBConnection mongoDBConnection = new MongoDBConnection();
            MongoDatabase database = mongoDBConnection.connection();
            MongoCollection collection = database.getCollection("Productos");
            
            System.err.println(product.getName());
            
            collection.updateOne(eq("id", product.getId()), new Document("$set", Document.parse(query)));

        } catch (Exception e) {
            System.out.println("Error " + e);
        }
        return false;
    }

    @Override
    public boolean deleteProduct(int id) {
        try {
            MongoDBConnection mongoDBConnection = new MongoDBConnection();
            MongoDatabase database = mongoDBConnection.connection();
            MongoCollection collection = database.getCollection("Productos");
     
            collection.deleteOne(eq("id",id));
            
        } catch (Exception e) {
            System.out.println("Error " + e);
        }
        return false;
    }

    /*Regla de negocio*/
    @Override
    public float calculateProfits(int quantity, float price) {
        float profit;
        float IVA = (float) 0.12;
        profit = (quantity * price) * IVA;
        return profit;
    }

}
