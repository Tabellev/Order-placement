package isabel.vetli.tekniskintervju.service;

import isabel.vetli.tekniskintervju.model.order.Order;
import isabel.vetli.tekniskintervju.repository.order.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Order getOrderByOrderNumber(long orderNumber) {
        Optional<Order> order = orderRepository.findById(orderNumber);
        return order.orElse(null);
    }

}
