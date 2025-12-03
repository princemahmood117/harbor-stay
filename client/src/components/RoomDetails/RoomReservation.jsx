// // import PropTypes from "prop-types";
// // import Button from "../Shared/Button/Button";
// // import { useState } from "react";
// // import { DateRange } from "react-date-range";
// // import { differenceInCalendarDays } from "date-fns";
// // import BookingModal from "../Modal/BookingModal";
// // import useAuth from "../../hooks/useAuth";

// // const RoomReservation = ({ room, refetch }) => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const { user } = useAuth();
// //   const [state, setState] = useState([
// //     {
// //       startDate: room.from,
// //       endDate: room.to,
// //       key: "selection",
// //     },
// //   ]);

// //   const totalPrice = parseInt(
// //     differenceInCalendarDays(new Date(room.to), new Date(room.from)) *
// //       room?.price
// //   );
// //   console.log(totalPrice);

// //   const closeModal = () => {
// //     setIsOpen(false);
// //   };
// //   return (
// //     <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
// //       <div className="flex items-center gap-1 p-4">
// //         <div className="text-2xl font-semibold">$ {room?.price}</div>
// //         <div className="font-light text-neutral-600">/night</div>
// //       </div>
// //       <hr />
// //       <div className="flex justify-center">
// //         <DateRange
// //           rangeColors={["#f6536d"]}
// //           editableDateInputs={true}
// //           onChange={() =>
// //             setState([
// //               {
// //                 startDate: room.from,
// //                 endDate: room.to,
// //                 key: "selection",
// //               },
// //             ])
// //           }
// //           moveRangeOnFirstSelection={false}
// //           ranges={state}
// //           // showDateDisplay={false}
// //         />
// //       </div>
// //       <hr />

// //       <div className="p-4">
// //         <Button
// //           disabled={room?.booked === true}
// //           onClick={() => setIsOpen(true)}
// //           label={"Reserve"}
// //         />
// //       </div>
// //       <BookingModal
// //         isOpen={isOpen}
// //         refetch={refetch}
// //         closeModal={closeModal}
// //         bookingInfo={{
// //           ...room,
// //           price: totalPrice,
// //           guest: {
// //             name: user?.displayName,
// //             email: user?.email,
// //             image: user?.photoURL,
// //           },
// //         }}
// //       ></BookingModal>

// //       <hr />
// //       <div className="p-4 flex items-center justify-between font-semibold text-lg">
// //         <div>Total</div>
// //         <div>${totalPrice}</div>
// //       </div>
// //     </div>
// //   );
// // };

// // RoomReservation.propTypes = {
// //   room: PropTypes.object,
// //   refetch: PropTypes.func,
// // };

// // export default RoomReservation;




// import PropTypes from "prop-types";
// import Button from "../Shared/Button/Button";
// import { useState, useMemo } from "react";
// import { DateRange } from "react-date-range";
// import { differenceInCalendarDays } from "date-fns";
// import BookingModal from "../Modal/BookingModal";
// import useAuth from "../../hooks/useAuth";

// const RoomReservation = ({ room, refetch }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { user } = useAuth();

//   // ✅ Default user date selection (today → tomorrow)
//   const today = new Date();
//   const tomorrow = new Date(today);
//   tomorrow.setDate(today.getDate() + 1);

//   const [state, setState] = useState([
//     {
//       startDate: today,
//       endDate: today,
//       key: "selection",
//     },
//   ]);

//   // ✅ Dynamic total price calculation
//   const totalPrice = useMemo(() => {
//     const days = differenceInCalendarDays(
//       new Date(state[0].endDate),
//       new Date(state[0].startDate)
//     );
//     return days > 0 ? days * room?.price : room?.price;
//   }, [state, room?.price]);

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
//       <div className="flex items-center gap-1 p-4">
//         <div className="text-2xl font-semibold">$ {room?.price}</div>
//         <div className="font-light text-neutral-600">/night</div>
//       </div>
//       <hr />

//       {/* ✅ User-selectable date range */}
//       <div className="flex justify-center">
//         <DateRange
//           rangeColors={["#f6536d"]}
//           editableDateInputs={true}
//           onChange={(ranges) => setState([ranges.selection])}
//           moveRangeOnFirstSelection={false}
//           ranges={state}
//           minDate={new Date()} // prevent selecting past dates
//         />
//       </div>
//       <hr />

//       <div className="p-4">
//         <Button
//           disabled={room?.booked === true}
//           onClick={() => setIsOpen(true)}
//           label={"Reserve"}
//         />
//       </div>

//       {/* ✅ Booking modal now uses user-selected dates */}
//       <BookingModal
//         isOpen={isOpen}
//         refetch={refetch}
//         closeModal={closeModal}
//         bookingInfo={{
//           ...room,
//           from: state[0].startDate, // user-selected start
//           to: state[0].endDate, // user-selected end
//           price: totalPrice,
//           guest: {
//             name: user?.displayName,
//             email: user?.email,
//             image: user?.photoURL,
//           },
//         }}
//       ></BookingModal>

//       <hr />
//       <div className="p-4 flex items-center justify-between font-semibold text-lg">
//         <div>Total</div>
//         <div>${totalPrice}</div>
//       </div>
//     </div>
//   );
// };

// RoomReservation.propTypes = {
//   room: PropTypes.object,
//   refetch: PropTypes.func,
// };

// export default RoomReservation;








import PropTypes from "prop-types";
import Button from "../Shared/Button/Button";
import { useState, useMemo } from "react";
import { DateRange } from "react-date-range";
import { differenceInCalendarDays } from "date-fns";
import BookingModal from "../Modal/BookingModal";
import useAuth from "../../hooks/useAuth";

const RoomReservation = ({ room, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  // ✅ Get host's available dates
  const hostStartDate = new Date(room.from);
  const hostEndDate = new Date(room.to);

  // ✅ Initialize with host's start date as default
  const [state, setState] = useState([
    {
      startDate: hostStartDate,
      endDate: hostStartDate,
      key: "selection",
    },
  ]);

  // ✅ Dynamic total price calculation based on selected days
  const totalPrice = useMemo(() => {
    const days = differenceInCalendarDays(
      new Date(state[0].endDate),
      new Date(state[0].startDate)
    );
    return days > 0 ? days * room?.price : room?.price;
  }, [state, room?.price]);

  // ✅ Calculate total available days set by host
  const totalAvailableDays = useMemo(() => {
    return differenceInCalendarDays(hostEndDate, hostStartDate);
  }, [hostStartDate, hostEndDate]);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {room?.price}</div>
        <div className="font-light text-neutral-600">/night</div>
      </div>
      <hr />

      {/* Available Date Range Info */}
      <div className="px-4 py-2 bg-rose-50 text-sm text-rose-600">
        <p className="font-semibold">Available Period:</p>
        <p className="text-xs">
          {hostStartDate.toLocaleDateString()} - {hostEndDate.toLocaleDateString()}
        </p>
        <p className="text-xs mt-1">
          ({totalAvailableDays} {totalAvailableDays === 1 ? 'day' : 'days'} available)
        </p>
      </div>
      <hr />

      {/* ✅ Date range restricted to host's availability */}
      <div className="flex justify-center">
        <DateRange
          rangeColors={["#f6536d"]}
          editableDateInputs={true}
          onChange={(ranges) => setState([ranges.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
          minDate={hostStartDate} // ✅ Can't select before host's start date
          maxDate={hostEndDate}   // ✅ Can't select after host's end date
        />
      </div>
      <hr />

      {/* Selected Duration Info */}
      <div className="px-4 py-2 bg-gray-50 text-sm">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Selected Duration:</span>
          <span className="font-semibold text-gray-800">
            {differenceInCalendarDays(state[0].endDate, state[0].startDate) || 1} 
            {differenceInCalendarDays(state[0].endDate, state[0].startDate) === 1 ? ' day' : ' days'}
          </span>
        </div>
        <div className="flex justify-between items-center mt-1">
          <span className="text-gray-600">Price per night:</span>
          <span className="font-semibold text-gray-800">${room?.price}</span>
        </div>
      </div>
      <hr />

      <div className="p-4">
        <Button
          disabled={room?.booked === true}
          onClick={() => setIsOpen(true)}
          label={room?.booked ? "Booked" : "Reserve"}
        />
      </div>

      {/* ✅ Booking modal with user-selected dates */}
      <BookingModal
        isOpen={isOpen}
        refetch={refetch}
        closeModal={closeModal}
        bookingInfo={{
          ...room,
          from: state[0].startDate, // user-selected start
          to: state[0].endDate,     // user-selected end
          price: totalPrice,         // calculated based on selected days
          guest: {
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
          },
        }}
      />

      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>${totalPrice}</div>
      </div>
    </div>
  );
};

RoomReservation.propTypes = {
  room: PropTypes.object,
  refetch: PropTypes.func,
};

export default RoomReservation;
