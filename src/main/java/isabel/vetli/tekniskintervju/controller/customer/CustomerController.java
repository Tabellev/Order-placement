package isabel.vetli.tekniskintervju.controller.customer;

import isabel.vetli.tekniskintervju.model.customer.Customer;
import isabel.vetli.tekniskintervju.service.CusomerService;
import org.springframework.stereotype.Component;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Component
@Path("/customer")
public class CustomerController {

    private final CusomerService cusomerService;

    public CustomerController(CusomerService cusomerService) {
        this.cusomerService = cusomerService;
    }

    @GET
    @Path("/{firstName}/{lastName}/{phoneNumber}")
    @Produces(MediaType.APPLICATION_JSON)
    public Customer getCustomerByNameAndPhoneNumber(@PathParam("firstName") String firstName, @PathParam("lastName") String lastName, @PathParam("phoneNumber") String phoneNumber) {
        return cusomerService.getCustomerByNameAndPhone(firstName, lastName, phoneNumber);
    }

    @GET
    @Path("/{firstName}/{lastName}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Customer> getCustomerByName(@PathParam("firstName") String firstName, @PathParam("lastName") String lastName) {
        return cusomerService.getCustomersByName(firstName, lastName);
    }

    @GET
    @Path("find/{phoneNumber}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Customer> getCustomerByPhoneNumbe(@PathParam("phoneNumber") String phoneNumber) {
        return cusomerService.getCustomersByPhoneNumber(phoneNumber);
    }

    @GET
    @Path("/{customerid}")
    @Produces(MediaType.APPLICATION_JSON)
    public Customer getCustomer(@PathParam("customerid") long customerid) {
        return cusomerService.getCustomer(customerid);
    }

    @POST
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public void saveCustomer(Customer customer) {
        cusomerService.saveCustomer(customer);
    }

}
