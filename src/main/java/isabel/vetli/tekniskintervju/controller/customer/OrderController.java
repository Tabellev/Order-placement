package isabel.vetli.tekniskintervju.controller.customer;

import isabel.vetli.tekniskintervju.model.order.Order;
import isabel.vetli.tekniskintervju.service.OrderService;
import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Component
@Path("/order")
public class OrderController {
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GET
    @Path("/{orderNumber}")
    @Produces(MediaType.APPLICATION_JSON)
    public Order getOrderByOrderNumber(@PathParam("orderNumber") long orderNumber) {
        return orderService.getOrderByOrderNumber(orderNumber);
    }

}
