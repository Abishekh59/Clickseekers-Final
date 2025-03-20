
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Calendar, Check, X } from "lucide-react";

// Example booking data
const initialBookings = [
  {
    id: 1,
    clientName: "Michael & Sarah Johnson",
    service: "Wedding Photography",
    date: "2023-09-15",
    time: "10:00 AM - 8:00 PM",
    location: "Grand Plaza Hotel, New York",
    status: "confirmed",
    amount: 2500,
  },
  {
    id: 2,
    clientName: "Emily Wilson",
    service: "Portrait Session",
    date: "2023-08-28",
    time: "2:00 PM - 3:30 PM",
    location: "Central Park, New York",
    status: "pending",
    amount: 350,
  },
  {
    id: 3,
    clientName: "Robert Brown",
    service: "Commercial Product Shoot",
    date: "2023-09-05",
    time: "9:00 AM - 1:00 PM",
    location: "Client Studio, Brooklyn",
    status: "pending",
    amount: 800,
  },
  {
    id: 4,
    clientName: "The Davis Family",
    service: "Family Portrait",
    date: "2023-08-20",
    time: "4:00 PM - 5:30 PM",
    location: "Riverside Park, New York",
    status: "completed",
    amount: 450,
  },
];

const Bookings = () => {
  const [bookings, setBookings] = useState(initialBookings);
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredBookings = statusFilter === "all" 
    ? bookings 
    : bookings.filter(booking => booking.status === statusFilter);

  const handleStatusChange = (bookingId: number, newStatus: string) => {
    setBookings(bookings.map(booking => 
      booking.id === bookingId ? { ...booking, status: newStatus } : booking
    ));
    
    const statusMessage = newStatus === "confirmed" 
      ? "Booking confirmed" 
      : newStatus === "completed" 
        ? "Booking marked as completed" 
        : "Booking declined";
    
    toast.success(statusMessage);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-500">Confirmed</Badge>;
      case "pending":
        return <Badge variant="outline" className="text-yellow-600 border-yellow-600">Pending</Badge>;
      case "declined":
        return <Badge variant="destructive">Declined</Badge>;
      case "completed":
        return <Badge className="bg-blue-500">Completed</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card className="p-6 animate-fadeIn">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Bookings</h1>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Bookings</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="declined">Declined</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {filteredBookings.length === 0 ? (
          <p className="text-center text-gray-500 my-10">No bookings found with the selected filter.</p>
        ) : (
          filteredBookings.map((booking) => (
            <Card key={booking.id} className="p-5 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{booking.clientName}</h3>
                    {getStatusBadge(booking.status)}
                  </div>
                  <p className="text-gray-700">{booking.service}</p>
                  <div className="mt-2 space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{booking.date}, {booking.time}</span>
                    </div>
                    <div>
                      <span>Location: {booking.location}</span>
                    </div>
                    <div>
                      <span className="font-medium text-primary">${booking.amount}</span>
                    </div>
                  </div>
                </div>

                {booking.status === "pending" && (
                  <div className="flex gap-2 mt-4 md:mt-0">
                    <Button 
                      variant="outline" 
                      className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                      onClick={() => handleStatusChange(booking.id, "confirmed")}
                    >
                      <Check className="h-4 w-4 mr-1" />
                      Confirm
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                      onClick={() => handleStatusChange(booking.id, "declined")}
                    >
                      <X className="h-4 w-4 mr-1" />
                      Decline
                    </Button>
                  </div>
                )}

                {booking.status === "confirmed" && (
                  <div className="mt-4 md:mt-0">
                    <Button
                      variant="outline"
                      className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                      onClick={() => handleStatusChange(booking.id, "completed")}
                    >
                      Mark as Completed
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          ))
        )}
      </div>
    </Card>
  );
};

export default Bookings;
