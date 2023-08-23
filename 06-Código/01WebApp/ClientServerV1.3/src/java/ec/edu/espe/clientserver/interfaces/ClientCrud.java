/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package ec.edu.espe.clientserver.interfaces;

import ec.edu.espe.clientserver.model.Client;
import java.util.List;

/**
 *
 * @author Gabriel
 */
public interface ClientCrud {
    public List listClients();

    public Client listClient(int id);

    public boolean addClient(Client client);

    public boolean updateClient(Client client);

    public boolean deleteClient(int id);

    /*Regla de negocio*/
    public float calculateProfits(int quantity, float price);
}
