import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ItemDialog from './ItemDialog';

export interface ItemProps {
    id: number;
    title: string;
    description: string;
    link: string;
    price: string;
}

const ItemCard: React.FC<ItemProps> = ({ title, description, link, price, id }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const toggleDialog = () => setIsDialogOpen(!isDialogOpen);

    return (
        <div
            className="flex flex-col justify-between h-full border border-gray-200 rounded-lg shadow-lg hover:bg-gray-50 cursor-pointer overflow-hidden"
            onClick={toggleDialog}
            onKeyDown={(e) => e.key === 'Enter' && toggleDialog()}
            role="button"
            tabIndex={0}
        >
            {/* Framer Motion Image with fixed height */}
            <motion.div className="w-full h-45 overflow-hidden">
                <motion.img
                    src={link}
                    alt="Description"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                />
            </motion.div>

            <div className="flex flex-col justify-between flex-grow p-4">
                <h3 className="font-semibold text-lg mb-3">{title}</h3>
                <p className="flex-grow">{description}</p>
                <div className="flex justify-between items-center mt-5">
                    <p>{price}</p>
                    <button
                        onClick={(e) => { e.stopPropagation(); alert("Added!"); }}
                        className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondaryHover"
                    >
                        Add
                    </button>
                </div>
            </div>
            <ItemDialog isOpen={isDialogOpen} onClose={toggleDialog} item={{ id, title, description, link, price }} />
        </div>
    );
};

export default ItemCard;
