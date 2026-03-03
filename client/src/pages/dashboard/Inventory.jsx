// client/src/pages/dashboard/Inventory.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Inventory = () => {
  const [items, setItems] = useState([]);
  const messId = "dummy-mess-id"; // You will replace this with real auth state later

  useEffect(() => {
    // Fetch inventory data on load
    const fetchInventory = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/inventory/${messId}`);
        setItems(response.data);
      } catch (error) {
        console.error("Failed to fetch inventory", error);
      }
    };
    fetchInventory();
  }, []);

  return (
    <div className="p-6 bg-[#06080e] min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Inventory Management</h1>
      
      <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="pb-3">Item Name</th>
              <th className="pb-3">Category</th>
              <th className="pb-3">Stock Level</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr><td colSpan="4" className="py-4 text-gray-400 text-center">No items in inventory.</td></tr>
            ) : (
              items.map((item) => (
                <tr key={item._id} className="border-b border-gray-700">
                  <td className="py-3">{item.itemName}</td>
                  <td className="py-3">{item.category}</td>
                  <td className="py-3">{item.quantity} {item.unit}</td>
                  <td className="py-3">
                    {item.quantity <= item.threshold ? (
                      <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs font-bold">Low Stock</span>
                    ) : (
                      <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-bold">In Stock</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;