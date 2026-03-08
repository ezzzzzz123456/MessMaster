import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, Filter, MoreVertical, AlertCircle } from 'lucide-react';
import Badge from '../../../components/ui/Badge';

const Inventory = () => {
    const [searchQuery, setSearchQuery] = useState('');

    // Dummy inventory data
    const inventoryItems = [
        { id: 1, name: 'Basmati Rice', category: 'Grains', stock: 150, unit: 'kg', minStock: 50, status: 'In Stock' },
        { id: 2, name: 'Toor Dal', category: 'Pulses', stock: 45, unit: 'kg', minStock: 20, status: 'In Stock' },
        { id: 3, name: 'Cooking Oil', category: 'Pantry', stock: 15, unit: 'L', minStock: 20, status: 'Low Stock' },
        { id: 4, name: 'Onions', category: 'Vegetables', stock: 5, unit: 'kg', minStock: 30, status: 'Out of Stock' },
        { id: 5, name: 'Milk', category: 'Dairy', stock: 120, unit: 'L', minStock: 50, status: 'In Stock' },
        { id: 6, name: 'Paneer', category: 'Dairy', stock: 8, unit: 'kg', minStock: 10, status: 'Low Stock' },
    ];

    const filteredItems = inventoryItems.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const getStatusBadge = (status) => {
        switch (status) {
            case 'In Stock': return <Badge color="green">In Stock</Badge>;
            case 'Low Stock': return <Badge color="yellow">Low Stock</Badge>;
            case 'Out of Stock': return <Badge color="red">Out of Stock</Badge>;
            default: return <Badge color="blue">{status}</Badge>;
        }
    };

    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-8">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-default pb-6">
                <div>
                    <h1 className="text-3xl font-display font-bold text-primary flex items-center gap-3">
                        Inventory Management
                    </h1>
                    <p className="text-muted mt-2">Track real-time stock levels of raw materials and ingredients.</p>
                </div>

                <button className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-accent-blue text-[#0f2319] font-bold shadow-lg shadow-accent-blue/20 hover:bg-[#00c9ff] transition-all whitespace-nowrap">
                    <Plus size={18} /> Add New Item
                </button>
            </div>

            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="relative w-full sm:w-96">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="text-muted" size={18} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search items or categories..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-surface border border-default text-primary rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-accent-blue transition-colors"
                        title="Search"
                    />
                </div>

                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface border border-default text-muted hover:text-primary transition-colors w-full sm:w-auto justify-center">
                    <Filter size={18} /> Filter List
                </button>
            </div>

            {/* Low Stock Alerts */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {inventoryItems.filter(i => i.status !== 'In Stock').map(alert => (
                    <div key={`alert-${alert.id}`} className="min-w-[250px] flex items-start gap-3 p-4 rounded-xl bg-card border border-accent-red/30 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-accent-red"></div>
                        <AlertCircle className="text-accent-red shrink-0" size={20} />
                        <div>
                            <h4 className="font-bold text-primary text-sm">{alert.name} running low</h4>
                            <p className="text-xs text-muted mt-1">Current: {alert.stock} {alert.unit} (Min: {alert.minStock} {alert.unit})</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Data Grid */}
            <div className="bg-card border border-default rounded-2xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-surface border-b border-default text-sm font-semibold text-muted uppercase tracking-wider">
                                <th className="p-4 font-medium">Item Name</th>
                                <th className="p-4 font-medium">Category</th>
                                <th className="p-4 font-medium">Current Stock</th>
                                <th className="p-4 font-medium">Min. Required</th>
                                <th className="p-4 font-medium">Status</th>
                                <th className="p-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-default">
                            {filteredItems.map((item, index) => (
                                <motion.tr
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    key={item.id}
                                    className="hover:bg-surface/30 transition-colors group"
                                >
                                    <td className="p-4 font-medium text-primary">
                                        {item.name}
                                    </td>
                                    <td className="p-4 text-muted text-sm">
                                        <span className="bg-surface px-2 py-1 rounded-md border border-default">{item.category}</span>
                                    </td>
                                    <td className="p-4">
                                        <span className="text-primary font-bold">{item.stock}</span>
                                        <span className="text-muted text-xs ml-1">{item.unit}</span>
                                    </td>
                                    <td className="p-4">
                                        <span className="text-muted">{item.minStock}</span>
                                        <span className="text-muted text-xs ml-1">{item.unit}</span>
                                    </td>
                                    <td className="p-4">
                                        {getStatusBadge(item.status)}
                                    </td>
                                    <td className="p-4 text-right">
                                        <button className="p-2 text-muted hover:text-accent-blue rounded-lg transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
                                            <MoreVertical size={18} />
                                        </button>
                                        <button className="ml-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-surface border border-default text-primary hover:border-accent-blue transition-colors">
                                            Update
                                        </button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>

                    {filteredItems.length === 0 && (
                        <div className="p-8 text-center text-muted">
                            No inventory items found matching your search.
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Inventory;
