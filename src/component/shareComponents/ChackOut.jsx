import { useState } from "react";
import locationData from "../../data/locationData";
import { useNavigate, useOutletContext } from "react-router-dom";
import Swal from "sweetalert2";

const ChackOut = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phonenumber: "",
    building: "",
    region: "",
    city: "",
    area: "",
    address: "",
  });
  const { clearCart } = useOutletContext();
  const [cities, setCities] = useState([]);
  const [areas, setAreas] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "region") {
      setFormData((prev) => ({
        ...prev,
        region: value,
        city: "",
        area: "",
      }));
      setCities(locationData[value] ? Object.keys(locationData[value]) : []);
      setAreas([]);
    } else if (name === "city") {
      setFormData((prev) => ({
        ...prev,
        city: value,
        area: "",
      }));
      setAreas(locationData[formData.region]?.[value] || []);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // name 
    if (!/^[A-Za-z\u0980-\u09FF\s]+$/.test(formData.fullName.trim())) {
      Swal.fire({
        icon: "error",
        title: "Invalid Name",
        text: "Name can only contain letters and spaces",
      });
      return;
    }
    // Phone Number 
    if (!/^\d{11}$/.test(formData.phonenumber)) {
      Swal.fire({
        title: "Invalid Phone Number?",
        text: "Please enter a valid 11-digit phone number",
        icon: "question",
      });
      return;
    }
    // Success 
    Swal.fire({
      title: "Your order has been placed.",
      icon: "success",
      draggable: true,
    }).then(() => {
      clearCart();
      navigate("/");
    });
  };
  // Payment Method Check
  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <section className="bg-white/80 py-[220px] px-1">
      <div className="container mx-auto">
        <form onSubmit={handleSubmit}>
          <h1 className="font-bold text-base text-pColor mb-8">
            Delivery Information:{" "}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] items-center">
            {/* Left Side */}
            <div>
              <p className="text-pColor font-normal text-sm">Full Name</p>
              <input
                type="text"
                name="fullName"
                placeholder="Enter Your First and Last Name"
                value={formData.fullName}
                onChange={handleChange}
                className="h-[40px] w-full border border-pColor outline-0 px-4 rounded mb-10"
              />

              <p className="text-pColor">Phone Number</p>
              <input
                type="tel"
                name="phonenumber"
                placeholder="Enter Your Phone Number"
                value={formData.phonenumber}
                onChange={handleChange}
                className="h-[40px] w-full border border-pColor outline-0 px-4 rounded mb-10"
              />

              <p className="text-pColor">
                Building / House No / Floor / Street
              </p>
              <input
                type="text"
                name="building"
                placeholder="Please Enter"
                value={formData.building}
                onChange={handleChange}
                className="h-[40px] w-full border border-pColor outline-0 px-4 rounded mb-10"
              />

              <p className="text-pColor">Region</p>
              <select
                name="region"
                value={formData.region}
                onChange={handleChange}
                className="h-[40px] w-full border border-pColor outline-0 px-4 rounded mb-10"
              >
                <option value="" disabled hidden>
                  Please Choose Your Region
                </option>
                {Object.keys(locationData).map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>

            {/* Right Side */}
            <div>
              <p className="text-pColor">City</p>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                disabled={!cities.length}
                className="h-[40px] w-full border border-pColor outline-0 px-4 rounded mb-10"
              >
                <option value="" hidden disabled>
                  Select City
                </option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>

              <p className="text-pColor">Area</p>
              <select
                name="area"
                value={formData.area}
                onChange={handleChange}
                disabled={!areas.length}
                className="h-[40px] w-full border border-pColor outline-0 px-4 rounded mb-10"
              >
                <option value="" disabled hidden>
                  Select Area
                </option>
                {areas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>

              <p className="text-pColor">Address</p>
              <input
                type="text"
                name="address"
                placeholder="Enter Your Address"
                value={formData.address}
                onChange={handleChange}
                className="h-[40px] w-full border border-pColor outline-0 px-4 rounded mb-10"
              />
              <p className="text-pColor text-base font-normal">Colony</p>
              <input
                type="text"
                placeholder="For Example House:#123, Road:06, sector:3, Uttora, Dhaka"
                value={formData.address}
                onChange={handleChange}
                className="h-[40px] w-full border border-pColor outline-0 px-4 rounded mb-10"
              />
            </div>
          </div>
          <p className="text-pColor">Payment Method</p>
          <div className="mb-10">
            <label className="flex gap-2">
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={handlePaymentChange}
              />
              Cash on Delivery
            </label>
            <label className=" flex gap-2">
              <input
                type="radio"
                name="paymentMethod"
                value="online"
                checked={paymentMethod === "online"}
                onChange={handlePaymentChange}
              />
              Online Payment (No Financial API)
            </label>
          </div>
          <button
            type="submit"
            className="bg-pColor text-white px-6 py-2 rounded cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ChackOut;
