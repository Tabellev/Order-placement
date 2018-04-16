package isabel.vetli.tekniskintervju.repository.customer;

import isabel.vetli.tekniskintervju.model.customer.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

    @Query("SELECT c FROM Customer c WHERE LOWER(c.firstName) = LOWER(:firstName) AND LOWER(c.lastName) = LOWER(:lastName) AND LOWER(c.phoneNumber) = LOWER(:phoneNumber)")
    Optional<Customer> findByNameAndPhone(@Param("firstName") String firstName, @Param("lastName") String lastName, @Param("phoneNumber") String phoneNumber);

    @Query("SELECT c FROM Customer c WHERE LOWER(c.firstName) = LOWER(:firstName) AND LOWER(c.lastName) = LOWER(:lastName)")
    List<Customer> findByName(@Param("firstName") String firstName, @Param("lastName") String lastName);

    @Query("SELECT c FROM Customer c WHERE LOWER(c.phoneNumber) = LOWER(:phoneNumber)")
    List<Customer> findByPhoneNumber(@Param("phoneNumber") String phoneNumber);
}
