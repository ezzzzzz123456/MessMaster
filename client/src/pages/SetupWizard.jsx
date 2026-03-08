import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMutation } from '@tanstack/react-query';
import { CheckCircle2, ChevronRight, Plus, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';
import api from '../api/axios';
import PageWrapper from '../components/layout/PageWrapper';

const SetupWizard = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const { register, control, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      messName: '', capacity: '', established: '', phone: '', address: '',
      menuItems: [{ name: '', category: 'Main Course' }],
      staffMembers: [{ name: '', role: 'Cook', phone: '', speciality: '' }]
    }
  });

  const { fields: menuFields, append: appendMenu, remove: removeMenu } = useFieldArray({ control, name: 'menuItems' });
  const { fields: staffFields, append: appendStaff, remove: removeStaff } = useFieldArray({ control, name: 'staffMembers' });

  const launchMutation = useMutation({
    mutationFn: async (data) => {
      // Assuming a single endpoint handles the bulk setup for the hackathon
      const response = await api.post('/mess/setup', data);
      return response.data;
    },
    onSuccess: () => {
      toast.success('Mess setup complete!');
      navigate('/dashboard/overview'); // Redirect to dashboard [cite: 225]
    }
  });

  const onSubmit = (data) => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      launchMutation.mutate(data);
    }
  };

  const loadSampleMessInfo = () => {
    setValue('messName', 'Mega Bytes Hostel Mess');
    setValue('capacity', 500);
    setValue('established', 2018);
    setValue('phone', '+91 9876543210');
    setValue('address', 'Block B, Tech Campus');
  };

  const loadSampleMenu = () => {
    setValue('menuItems', [
      { name: 'Chole Bhature', category: 'Breakfast' },
      { name: 'Rajma Rice', category: 'Main Course' },
      { name: 'Paneer Butter Masala', category: 'Main Course' },
      { name: 'Dal Makhani', category: 'Main Course' },
    ]);
  };

  const loadSampleStaff = () => {
    setValue('staffMembers', [
      { name: 'Ravi Kumar', role: 'Head Cook', phone: '9998887776', speciality: 'North Indian' },
      { name: 'Priya Sharma', role: 'Store Keeper', phone: '8887776665', speciality: 'Inventory' }
    ]);
  };

  return (
    <PageWrapper className="flex flex-col items-center justify-center p-6 py-12">
      <div className="w-full max-w-3xl bg-card border border-default rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Animated Stepper  */}
        <div className="flex items-center justify-between p-6 bg-surface border-b border-default">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= num ? 'bg-accent-green text-[#06080e]' : 'bg-default text-muted'}`}>
                {step > num ? <CheckCircle2 size={16} /> : num}
              </div>
              {num < 4 && (
                <div className={`w-20 h-1 mx-2 rounded ${step > num ? 'bg-accent-green' : 'bg-default'}`} />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-8">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Step 1: Mess Details [cite: 221] */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-display text-primary">Mess Details</h2>
                  <button type="button" onClick={loadSampleMessInfo} className="text-accent-green text-sm hover:underline">Fill Sample Data</button>
                </div>
                <input {...register('messName')} placeholder="Mess Name" className="w-full bg-surface border border-default rounded-lg px-4 py-2.5 text-primary" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="number" {...register('capacity')} placeholder="Capacity (Students)" className="w-full bg-surface border border-default rounded-lg px-4 py-2.5 text-primary" />
                  <input type="number" {...register('established')} placeholder="Established Year" className="w-full bg-surface border border-default rounded-lg px-4 py-2.5 text-primary" />
                </div>
                <textarea {...register('address')} placeholder="Full Address" className="w-full bg-surface border border-default rounded-lg px-4 py-2.5 text-primary h-24" />
              </div>
            )}

            {/* Step 2: Food Menu [cite: 222] */}
            {step === 2 && (
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-display text-primary">Food Menu</h2>
                  <button type="button" onClick={loadSampleMenu} className="text-accent-green text-sm hover:underline">Load Sample Menu</button>
                </div>
                {menuFields.map((field, index) => (
                  <div key={field.id} className="flex gap-3">
                    <input {...register(`menuItems.${index}.name`)} placeholder="Dish Name" className="flex-1 bg-surface border border-default rounded-lg px-4 py-2.5 text-primary" />
                    <select {...register(`menuItems.${index}.category`)} className="bg-surface border border-default rounded-lg px-4 py-2.5 text-primary w-40">
                      <option>Breakfast</option><option>Main Course</option><option>Snacks</option><option>Dessert</option>
                    </select>
                    <button type="button" onClick={() => removeMenu(index)} className="p-2 text-accent-red hover:bg-[#ff3d5a1a] rounded-lg"><Trash2 size={20} /></button>
                  </div>
                ))}
                <button type="button" onClick={() => appendMenu({ name: '', category: 'Main Course' })} className="flex items-center gap-2 text-accent-green mt-2"><Plus size={16} /> Add Item</button>
              </div>
            )}

            {/* Step 3: Staff Members [cite: 224] */}
            {step === 3 && (
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-display text-primary">Staff Members</h2>
                  <button type="button" onClick={loadSampleStaff} className="text-accent-green text-sm hover:underline">Load Sample Staff</button>
                </div>
                {staffFields.map((field, index) => (
                  <div key={field.id} className="flex gap-3">
                    <input {...register(`staffMembers.${index}.name`)} placeholder="Staff Name" className="flex-1 bg-surface border border-default rounded-lg px-4 py-2.5 text-primary" />
                    <select {...register(`staffMembers.${index}.role`)} className="bg-surface border border-default rounded-lg px-4 py-2.5 text-primary w-32">
                      <option>Head Cook</option><option>Cook</option><option>Helper</option><option>Store Keeper</option>
                    </select>
                    <button type="button" onClick={() => removeStaff(index)} className="p-2 text-accent-red hover:bg-[#ff3d5a1a] rounded-lg"><Trash2 size={20} /></button>
                  </div>
                ))}
                <button type="button" onClick={() => appendStaff({ name: '', role: 'Cook' })} className="flex items-center gap-2 text-accent-green mt-2"><Plus size={16} /> Add Staff</button>
              </div>
            )}

            {/* Step 4: Launch [cite: 225] */}
            {step === 4 && (
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-display text-primary mb-2">Ready to Launch!</h2>
                <p className="text-muted">You are registering {watch('messName')} with {menuFields.length} menu items and {staffFields.length} staff members.</p>
              </div>
            )}
          </motion.div>

          <div className="flex justify-end mt-8 pt-6 border-t border-default">
            <button
              type="submit"
              disabled={launchMutation.isPending}
              className="flex items-center gap-2 bg-accent-green text-[#06080e] px-6 py-2.5 rounded-lg font-semibold hover:bg-[#00c853] transition-colors"
            >
              {step < 4 ? 'Next Step' : (launchMutation.isPending ? 'Launching...' : 'Launch MessTrack')}
              {step < 4 && <ChevronRight size={18} />}
            </button>
          </div>
        </form>
      </div>
    </PageWrapper>
  );
};

export default SetupWizard;