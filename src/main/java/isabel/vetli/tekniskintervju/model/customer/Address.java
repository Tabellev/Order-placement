package isabel.vetli.tekniskintervju.model.customer;


import javax.persistence.*;

@Entity
@Table(name = "address")
public class Address {

    @Id
    @GeneratedValue
    private long id;
    private String streetname;
    private int housenumber;
    private String city;
    private String zipcode;

    public Address() {
    }

    public Address(String streetname, int housenumber, String city, String zipcode) {
        this.streetname = streetname;
        this.housenumber = housenumber;
        this.city = city;
        this.zipcode = zipcode;
    }

    public long getId() {
        return id;
    }

    public String getStreetname() {
        return streetname;
    }

    public int getHousenumber() {
        return housenumber;
    }

    public String getCity() {
        return city;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setStreetname(String streetname) {
        this.streetname = streetname;
    }

    public void setHousenumber(int housenumber) {
        this.housenumber = housenumber;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    @Override
    public String toString() {
        return "Address{" +
                "id=" + id +
                ", streetname='" + streetname + '\'' +
                ", housenumber=" + housenumber +
                ", city='" + city + '\'' +
                ", zipcode='" + zipcode + '\'' +
                '}';
    }
}
