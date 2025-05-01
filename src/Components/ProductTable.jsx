import Switch from '@mui/material/Switch';

export default function ProductTable({ products,
    onSelectAll,
    onProductSelect,
    selectedProducts,
    isAllSelected }) {

    return (
        <div className='overflow-x-auto'>
            <table className="table-auto w-full dark:text-white">
                <thead className="text-left ">
                    <tr className="border-gray-400 border-y">
                        <th className="px-6 py-4 text-left">
                            <input checked={isAllSelected}
                                onChange={onSelectAll} type="checkbox" className="accent-purple-500 transform scale-100 cursor-pointer" />
                        </th>
                        <th className="px-6 py-4 text-xl  text-black dark:text-white font-medium">Product</th>
                        <th className="px-6 py-4 text-xl  text-black dark:text-white font-medium">Category</th>
                        <th className="px-6 py-4 text-xl  text-black dark:text-white font-medium">Stock</th>
                        <th className="px-6 py-4 text-xl  text-black dark:text-white font-medium">SKU</th>
                        <th className="px-6 py-4 text-xl  text-black dark:text-white font-medium">PRICE</th>
                        <th className="px-6 py-4 text-xl  text-black dark:text-white font-medium">QTY</th>
                        <th className="px-6 py-4 text-xl  text-black dark:text-white font-medium">STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.sku} className="border-b border-gray-400">
                            <td className="px-6 py-4">
                                <input type="checkbox" checked={selectedProducts.includes(product.sku)}
                                    onChange={() => onProductSelect(product.sku)} className="accent-purple-500 transform scale-100 cursor-pointer" />
                            </td>
                            <td className="px-6 py-4  min-w-[350px] sm:min-w-[280px] md:min-w-[320px] flex items-center gap-2">
                                <img src={product.avatar} alt="" className="w-10 h-10 rounded-full" />
                                <div>
                                    <p className="text-black dark:text-white text-base hover:text-purple-600 cursor-pointer">{product.name}</p>
                                    <p className="text-base text-gray-400">{product.description}</p>
                                </div>
                            </td>

                            <td className="text-base ">
                                <div className="flex items-center gap-3 p-5">
                                    <span>{product.icon}</span>
                                    <span className="text-black dark:text-white">{product.category}</span>
                                </div>
                            </td>
                            <td className="text-base">
                                <div className="p-5 text-black dark:text-white">
                                    <Switch
                                        checked={Boolean(product.stock)}
                                        disabled
                                    />
                                </div>
                            </td>


                            <td className="text-base ">
                                <div className="p-5 text-black dark:text-white">
                                    {product.sku}
                                </div>
                            </td>
                            <td className="text-base ">
                                <div className="p-5 text-black dark:text-white">
                                    {product.Price}
                                </div>
                            </td>
                            <td className="text-base ">
                                <div className="p-5 text-black dark:text-white">
                                    {product.qty}
                                </div>
                            </td>
                            <td className="text-base text-white">
                                <div className="p-5">
                                    <span
                                        className={`px-2 py-1 text-md rounded text-white ${product.status === "Inactive"
                                            ? "bg-red-600"
                                            : product.status === "Scheduled"
                                                ? "bg-yellow-500"
                                                : "bg-green-600"
                                            }`}
                                    >
                                        {product.status}
                                    </span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
