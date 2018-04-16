package isabel.vetli.tekniskintervju;

import isabel.vetli.tekniskintervju.controller.customer.CustomerController;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;
import javax.ws.rs.ApplicationPath;

@Configuration
@ApplicationPath("rest")
public class JerseyConfiguration extends ResourceConfig {
    public JerseyConfiguration() {

    }

    @PostConstruct
    public void setUp() {
        register(CustomerController.class);
        //register(GenericExceptionMapper.class);
    }
}
