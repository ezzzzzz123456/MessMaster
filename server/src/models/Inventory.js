// server/src/models/Inventory.js
const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  messId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Mess', 
    required: true 
  },
  itemName: { 
    type: String, 
    required: true 
  },
  category: { 
    type: String, 
    enum: ['Vegetables', 'Dairy', 'Spices', 'Grains', 'Meat', 'Other'],
    default: 'Other'
  },
  quantity: { 
    type: Number, 
    required: true,
    default: 0
  },
  unit: { 
    type: String, 
    required: true, // e.g., 'kg', 'liters', 'packets'
  },
  threshold: { 
    type: Number, 
    required: true,
    default: 5 // If quantity falls below this, trigger a low-stock alert
  }
}, { timestamps: true });

module.exports = mongoose.model('Inventory', inventorySchema);