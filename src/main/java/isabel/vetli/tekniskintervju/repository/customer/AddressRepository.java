package isabel.vetli.tekniskintervju.repository.customer;

import isabel.vetli.tekniskintervju.model.customer.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {
}
