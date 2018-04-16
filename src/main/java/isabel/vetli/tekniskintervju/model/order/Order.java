package isabel.vetli.tekniskintervju.model.order;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import isabel.vetli.tekniskintervju.model.customer.Customer;
import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Order {

    private long id;
    private Customer customer;
    private String orderType;
    private long orderDate;
    private String note;

    public Order() {
    }

    public Order(Customer customer, OrderType orderType, long orderDate, String note) {
        this.customer = customer;
        this.orderType = orderType.name();
        this.orderDate = orderDate;
        this.note = note;
    }

    @Id
    @GeneratedValue
    public long getId() {
        return id;
    }

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "customer_id")
    @JsonIgnoreProperties("order")
    public Customer getCustomer() {
        return customer;
    }

    public String getOrderType() {
        return orderType;
    }

    public long getOrderDate() {
        return orderDate;
    }

    public String getNote() {
        return note;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public void setOrderType(String orderType) {
        this.orderType = orderType;
    }

    public void setOrderDate(long orderDate) {
        this.orderDate = orderDate;
    }

    public void setNote(String note) {
        this.note = note;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", customer=" + customer +
                ", orderType=" + orderType +
                ", orderDate=" + orderDate +
                ", note='" + note + '\'' +
                '}';
    }
}
