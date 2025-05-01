import { useState, useEffect } from 'react';
import { Close } from "@mui/icons-material";

export default function SidebarForm({ 
  onClose, 
  onAdd, 
  show, 
  fields = [],  // 👈 dynamic fields array
  title = "Add Item",  // 👈 Sidebar title
}) {
  const [form, setForm] = useState({});

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]);

  useEffect(() => {
    // 👇 Initialize empty form when sidebar opens
    if (show) {
      const initialForm = {};
      fields.forEach(field => {
        initialForm[field.name] = field.defaultValue || '';
      });
      setForm(initialForm);
    }
  }, [show, fields]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    onClose();
  };

  const handleChange = (e, name) => {
    setForm({ ...form, [name]: e.target.value });
  };

  return (
    <div className={`fixed top-0 right-0 h-screen w-96 bg-[#1e2640] z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${show ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="h-full flex flex-col">
        <div className="flex justify-between px-5 py-7 mb-2 border-b border-white">
          <h2 className='text-xl text-white font-bold'>{title}</h2>
          <button onClick={onClose}>
            <Close className="text-white" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 pb-6 text-white">
            {fields.map((field) => (
              <div key={field.name}>
                <label className="text-md text-gray-100 mb-1 block">{field.label}</label>

                {field.type === 'select' ? (
                  <select
                    className="p-2 w-full rounded text-gray-400 bg-[#2e3655] focus:ring-2 focus:ring-[#6c63ff] focus:outline-none"
                    value={form[field.name] || ''}
                    onChange={(e) => handleChange(e, field.name)}
                  >
                    <option value="">{field.placeholder || "Select option"}</option>
                    {field.options?.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    className="p-2 w-full rounded bg-[#2e3655] focus:ring-2 focus:ring-[#6c63ff] focus:outline-none"
                    type={field.type || 'text'}
                    placeholder={field.placeholder || ''}
                    value={form[field.name] || ''}
                    onChange={(e) => handleChange(e, field.name)}
                  />
                )}
              </div>
            ))}

            <div className='flex gap-2 items-center'>
              <button className="bg-purple-600 hover:bg-purple-700 px-4 text-md py-2 mt-2 rounded text-white" type="submit">Submit</button>
              <button onClick={onClose} type="button" className="bg-red-200 hover:bg-red-400 px-4 text-md py-2 mt-2 rounded text-red-600">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
