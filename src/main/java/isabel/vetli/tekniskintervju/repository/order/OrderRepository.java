package isabel.vetli.tekniskintervju.repository.order;

import isabel.vetli.tekniskintervju.model.order.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
