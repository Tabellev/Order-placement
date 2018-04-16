package isabel.vetli.tekniskintervju.model.customer;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import isabel.vetli.tekniskintervju.model.order.Order;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "customer")
public class Customer {
    private long id;
    private String firstName;
    private String lastName;
    private Address currentAddress;
    private Address newAddress;
    private String phoneNumber;
    private String email;
    private List<Order> customerOrders;

    public Customer() {
    }

    public Customer(String firstName, String lastName, Address currentAddress, Address newAddress, String phoneNumber, String email, List<Order> customerOrders) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.currentAddress = currentAddress;
        this.newAddress = newAddress;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.customerOrders = customerOrders;
    }

    @Id
    @GeneratedValue
    public long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    @OneToOne(cascade = CascadeType.ALL, targetEntity = Address.class)
    @JoinColumn(name = "current_address_id")
    public Address getCurrentAddress() {
        return currentAddress;
    }

    @OneToOne(cascade = CascadeType.ALL, targetEntity = Address.class)
    @JoinColumn(name = "new_address_id")
    public Address getNewAddress() {
        return newAddress;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setCurrentAddress(Address currentAddress) {
        this.currentAddress = currentAddress;
    }

    public void setNewAddress(Address newAddress) {
        this.newAddress = newAddress;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("customer")
    public List<Order> getCustomerOrders() {
        if(customerOrders == null) {
            return new ArrayList<>();
        }
        return customerOrders;
    }

    public void setCustomerOrders(List<Order> customerOrders) {
        this.customerOrders = customerOrders;
    }

    public void addOrder(Order order) {
        if(customerOrders == null) {
            customerOrders = new ArrayList<>();
        }

        customerOrders.add(order);
        order.setCustomer(this);
    }

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", currentAddress=" + currentAddress +
                ", newAddress=" + newAddress +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
