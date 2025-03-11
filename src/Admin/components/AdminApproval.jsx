import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  approveRejectPrice,
  fetchPendingPrices,
} from "../../State/Price/Action";

const AdminPriceApproval = () => {
  const dispatch = useDispatch();

  // ✅ Correct way to access state
  const { pendingPrices, loading, error } = useSelector(
    (store) => store.pendingPrices
  );
  console.log(pendingPrices)

  useEffect(() => {
    dispatch(fetchPendingPrices());
  }, [dispatch]);

  const handleAction = (requestId, action) => {
    dispatch(approveRejectPrice(requestId, action));
  };

  return (
    <div>
      <h3>Admin - Price Approvals</h3>

      {/* Show loading state */}
      {loading && <p>Loading pending price requests...</p>}

      {/* Handle error properly */}
      {error && <p style={{ color: "red" }}>Error: {JSON.stringify(error)}</p>}

      {/* Ensure pendingPrices is an array before mapping */}
      {Array.isArray(pendingPrices) && pendingPrices.length === 0 ? (
        <p>No pending price requests.</p>
      ) : (
        <ul>
          {Array.isArray(pendingPrices) &&
            pendingPrices.map((price) => (
              <li key={price._id}>
                <p>Product: {price.productId._id || "Unknown Product"}</p>
                <p>Proposed Price: {price.proposedPrice}</p>
                <button
                  onClick={() => handleAction(price._id, "approved")}
                  className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                >
                  Approve
                </button>

                <button
                  onClick={() => handleAction(price._id, "rejected")}
                  className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300 ml-2"
                >
                  Reject
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default AdminPriceApproval;
