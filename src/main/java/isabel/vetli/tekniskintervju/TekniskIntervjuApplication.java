package isabel.vetli.tekniskintervju;

import isabel.vetli.tekniskintervju.model.customer.Address;
import isabel.vetli.tekniskintervju.model.customer.Customer;
import isabel.vetli.tekniskintervju.model.order.Order;
import isabel.vetli.tekniskintervju.model.order.OrderType;
import isabel.vetli.tekniskintervju.repository.customer.AddressRepository;
import isabel.vetli.tekniskintervju.repository.customer.CustomerRepository;
import isabel.vetli.tekniskintervju.repository.order.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.Console;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Optional;

@SpringBootApplication
public class TekniskIntervjuApplication implements CommandLineRunner {

    @Autowired
    private AddressRepository addressRepository;
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private OrderRepository orderRepository;


    public static void main(String[] args) {
        SpringApplication.run(TekniskIntervjuApplication.class, args);
    }


    private void addCustomer() {
        Address currentAddress = new Address("Raukveien", 1, "Oslo", "0680");
        Address newAddress = new Address("Parkveien", 61, "Oslo", "0250");

        Customer customer = new Customer("Isabel", "Vestli", currentAddress, newAddress, "12345678", "epost", new ArrayList<>());

        customerRepository.save(customer);
    }

    private Customer getCustomer() {
        Optional<Customer> customer = customerRepository.findById(1L);
        return customer.orElse(null);
    }

    @Override
    public void run(String... args) throws Exception {
        //saveCustomer();
        //addOrders();
        Customer customer = getCustomer();
        System.out.println(customer);
    }

    private void addOrders() {
        Customer customer = getCustomer();
        long orderdate = LocalDate.now().toEpochDay();
        Order order1 = new Order(customer, OrderType.CLEANING, orderdate, "Må vaske tak");
        Order order2 = new Order(customer, OrderType.MOVING, orderdate, "Har piano");
        customer.addOrder(order1);
        customer.addOrder(order2);

        orderRepository.save(order1);
        orderRepository.save(order2);
    }
}
