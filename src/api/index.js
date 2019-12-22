import axios from "axios";
import EndpointFactory from "axios-endpoints";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/",
  responseType: "json"
});

const Endpoint = EndpointFactory(axiosInstance);


export default {
  rooms       : new Endpoint("rooms"),
  roomsStatus : new Endpoint("rooms/status"),
  bookings    : new Endpoint("roomBookings"),
  visitors    : new Endpoint("visitors")
}