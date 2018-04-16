package isabel.vetli.tekniskintervju.service;

import isabel.vetli.tekniskintervju.model.customer.Customer;
import isabel.vetli.tekniskintervju.repository.customer.CustomerRepository;
import org.hibernate.Hibernate;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.provider.HibernateUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class CusomerService {

    @Autowired
    CustomerRepository customerRepository;

    @Transactional
    public Customer getCustomer(long id) {
        Optional<Customer> customer = customerRepository.findById(id);
        customer.ifPresent(c -> Hibernate.initialize(c.getCustomerOrders()));
        return customer.orElse(null);
    }

    @Transactional
    public Customer getCustomerByNameAndPhone(String firstName, String lastName, String phoneNumber) {
        Optional<Customer> customer = customerRepository.findByNameAndPhone(firstName, lastName, phoneNumber);
        customer.ifPresent(c -> Hibernate.initialize(c.getCustomerOrders()));
        return customer.orElse(null);
    }

    @Transactional
    public List<Customer> getCustomersByName(String firstName, String lastName) {
        List<Customer> customers = customerRepository.findByName(firstName, lastName);
        customers.forEach(customer -> Hibernate.initialize(customer.getCustomerOrders()));
        return customers;
    }

    @Transactional
    public List<Customer> getCustomersByPhoneNumber(String phoneNumber) {
        List<Customer> customers = customerRepository.findByPhoneNumber(phoneNumber);
        customers.forEach(customer -> Hibernate.initialize(customer.getCustomerOrders()));
        return customers;
    }

    public void saveCustomer(Customer customer) {
        customerRepository.save(customer);
    }
}
