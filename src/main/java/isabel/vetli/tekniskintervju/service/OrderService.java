package isabel.vetli.tekniskintervju.service;

import isabel.vetli.tekniskintervju.model.customer.Customer;
import isabel.vetli.tekniskintervju.model.order.Order;
import isabel.vetli.tekniskintervju.model.order.OrderType;
import isabel.vetli.tekniskintervju.repository.customer.CustomerRepository;
import isabel.vetli.tekniskintervju.repository.order.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private OrderRepository orderRepository;

}
